export const truncateString = (text: string, count: number): string => text && text.length > count ? `${text.substring(0, count)}...` : text;