const parseMonth = (value: string): { year: number; month: number } => {
    const [year, month] = value.split('-').map(Number);
    return { year, month };
};

export const formatMonth = (value: string): string => {
    const { year, month } = parseMonth(value);
    return `${String(month).padStart(2, '0')}, ${year}`;
};

export const formatDuration = (start: string, end?: string): string => {
    const startDate = parseMonth(start);
    const now = new Date();
    const endDate = end
        ? parseMonth(end)
        : { year: now.getUTCFullYear(), month: now.getUTCMonth() + 1 };
    const totalMonths =
        (endDate.year - startDate.year) * 12 +
        endDate.month -
        startDate.month +
        1;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const parts: string[] = [];

    if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
    if (months > 0) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);

    return parts.join(', ');
};
