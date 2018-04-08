export class DocType {
    // Unique value for dropdownlist
    value: number;
    // Shown value for user
    viewValue: string;

    constructor(value: number, viewValue: string) {
        this.value = value;
        this.viewValue = viewValue;
    }
}
