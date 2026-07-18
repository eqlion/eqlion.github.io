const parseMonth = (value: string): { year: number; month: number } => {
    const [year, month] = value.split('-').map(Number);
    return { year, month };
};

export const formatMonth = (value: string): string => {
    const { year, month } = parseMonth(value);
    return `${String(month).padStart(2, '0')}, ${year}`;
};
