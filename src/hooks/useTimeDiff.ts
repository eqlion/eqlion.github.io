import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

export const useTimeDiff = (dateStart: dayjs.Dayjs, dateEnd?: dayjs.Dayjs) => {
    const { t } = useTranslation();
    const { years, months } = calculateTimeDiff(dateStart, dateEnd);
    const result: string[] = [];

    if (years > 0) {
        result.push(t('Util.year', { count: years }));
    }

    if (months > 0) {
        result.push(t('Util.month', { count: months }));
    }

    return result.join(', ');
};

const calculateTimeDiff = (dateStart: dayjs.Dayjs, dateEnd?: dayjs.Dayjs) => {
    const end = dateEnd ?? dayjs();
    let dateDiffM = Math.floor(end.diff(dateStart, 'month')) + 1;
    const dateDiffY = Math.floor(dateDiffM / 12);
    dateDiffM %= 12;

    return { years: dateDiffY, months: dateDiffM };
};
