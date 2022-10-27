let users = [];
class User {
    constructor(name, phone){
        this.name = name;
        this.phone = phone;
    }
}

class DatabaseManager {
    static addUser(name, phone){
        users.push(new User(name, phone));
    }
}
module.exports = DatabaseManager;
