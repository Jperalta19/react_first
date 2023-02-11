export class User {
    username = '';
    email = '';
    password = '';
    confirm='';
    
    constructor(username, email, password, confirm) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirm = confirm;
    }
}  