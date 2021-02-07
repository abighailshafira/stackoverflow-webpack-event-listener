import { CompanyContainer, Company } from "./company-container";

(window as any).onClickHandler = function onClickHandler(event) {
    console.log(event);
}

export interface User {
    name: string,
    companyId: number,
    birthday: string,
    company: Company
}

export const UserContainer = (user: User) => {

    return (
        `
        <a href="#" onclick="onClickHandler(event)">${user?.name}</a>
        <div class="user-details hide">
            <p>Birthday: ${user.birthday}</p>
            <p><img src="" width="100px"></p>
            ${CompanyContainer(user.company)}
        </div>
        `
    )
};

