const Employee = require("./Employee.js")

class Engineer extends Employee {
    constructor(name, id, email, githubuser) {
        super(name, id, email)
        this.githubuser = githubuser
    }
    getGithub() {
        return this.githubuser
    }
    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer