const Employee = require("./Employees");

// Creates manager class
class Manager extends Employee {
    
    constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

// export
module.exports = Manager;