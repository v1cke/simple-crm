export class User {
    firstName: string;
    secondName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.secondName = obj ? obj.secondName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }


    public toJson() {
        return {
            firstName: this.firstName,
            secondName: this.secondName,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        };
    }
}