
import { UserContainer } from './user-container';

export default (function () {

    document.getElementById("app").innerHTML = UserContainer({
        birthday: '5-9-1994',
        company: {
            location: 'some street',
            name: 'some name'
        },
        companyId: 22,
        name: 'User name here'
    });

}());

