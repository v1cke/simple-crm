import { EmailAuthCredential } from "@angular/fire/auth";

export class User {
    firstName: string;
    secondName: string;
    mail: string;
    phone: number;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.secondName = obj ? obj.secondName : '';
        this.mail = obj ? obj.mail : '';
        this.phone = obj ? obj.phone : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }


    public toJson() {
        return {
            firstName: this.firstName,
            secondName: this.secondName,
            mail: this.mail,
            phone: this.phone,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
        };
    }
}