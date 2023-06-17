import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

export const useTimeDiff = (dateStart: dayjs.Dayjs, dateEnd?: dayjs.Dayjs) => {
    const { t } = useTranslation();
    const end = dateEnd ?? dayjs();
    let dateDiffM = Math.floor(end.diff(dateStart, 'month'));
    const dateDiffY = Math.floor(dateDiffM / 12);
    dateDiffM %= 12;

    const result: string[] = [];

    if (dateDiffM > 0) {
        result.push(t('Util.month', { count: dateDiffM }));
    }

    if (dateDiffY > 0) {
        result.push(t('Util.year', { count: dateDiffY }));
    }

    return result.join(', ');
};
