class User {
    constructor(username, password, age) {
        this.username = username;
        this.password = password;
        this.age = age;
    }
}

// const login = new User("Kalysbek", "qwerty123", 33)
// console.log(login)


class Login extends User{
    constructor(username, password, age) {
        super(username, password);
        this.username = username
        this.password = password
        this.age = age
    }

    enterLogin(){
        console.log(this.username)
        console.log(this.password)
        console.log(this.age)
    }
}

const login = new Login("Kalysbek", "qwerty123", 33)
console.log(login)
login.enterLogin()