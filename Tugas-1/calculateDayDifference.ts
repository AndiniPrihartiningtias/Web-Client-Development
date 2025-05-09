// calculateDayDifference.ts
export function calculateDayDifference(date1: string, date2: string): string {
    let diffMs = (+new Date(date2)) - (+new Date(date1));
    let diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return diffDays + " days";
}

