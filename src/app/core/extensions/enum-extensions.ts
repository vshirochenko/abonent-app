export function getEnumValues(e: any): number[] {
    const enumValues = Object.keys(e)
        .map(n => Number.parseInt(n))
        .filter(n => !Number.isNaN(n));
    return enumValues;
}