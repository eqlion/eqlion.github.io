import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
import { useTimeDiff } from '../src/hooks/useTimeDiff';
import { useTranslation } from 'react-i18next';
jest.mock('react-i18next');

describe('calculateTimeDiff', () => {
    // eslint-disable-next-line
    (useTranslation as any).mockImplementation(() => ({
        t: (key: string, values: { count: number }) => {
            const dict: Record<string, string> = {
                'Util.year': 'year',
                'Util.month': 'month',
            };
            return `${dict[key] ?? ''} ${values.count}`;
        },
    }));
    it('Same date', () => {
        expect(
            useTimeDiff(
                dayjs('07, 2021', 'MM, YYYY'),
                dayjs('07, 2021', 'MM, YYYY'),
            ),
        ).toEqual('month 1');
    });
    it('Less than a year', () => {
        expect(
            useTimeDiff(
                dayjs('07, 2021', 'MM, YYYY'),
                dayjs('04, 2022', 'MM, YYYY'),
            ),
        ).toEqual('month 10');
    });

    it('One year', () => {
        expect(
            useTimeDiff(
                dayjs('07, 2021', 'MM, YYYY'),
                dayjs('07, 2022', 'MM, YYYY'),
            ),
        ).toEqual('year 1, month 1');
    });

    it('More than one year', () => {
        expect(
            useTimeDiff(
                dayjs('12, 2022', 'MM, YYYY'),
                dayjs('04, 2024', 'MM, YYYY'),
            ),
        ).toEqual('year 1, month 5');
    });
});
