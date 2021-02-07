import { Company } from "./company-container";
export interface User {
    name: string;
    companyId: number;
    birthday: string;
    company: Company;
}
export declare const UserContainer: (user: User) => string;
