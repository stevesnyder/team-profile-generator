const Employee = require("./Employees");

// Creates engineer class
class Engineer extends Employee {

    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    };
    
    getGithub(){
        return this.github
    };

    getRole() {
        return 'engineer';
    };
};

// export
module.exports = Engineer;