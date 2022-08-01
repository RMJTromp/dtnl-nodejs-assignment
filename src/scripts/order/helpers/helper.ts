export function roundAmountOnTwoDecimals(amount: number): number {
    return parseFloat(amount.toFixed(2));
}

export function transformCentAmountToAmount(
    centAmount: number,
    fractionDigits: number,
): number {
    const factorOfTen = Math.pow(10, fractionDigits);
    return Math.round((centAmount / factorOfTen) * 100) / 100;
}