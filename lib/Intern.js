import Employee from "./Employees";

// Creates intern class
class Intern extends Employee {

    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    };

    getSchool(){
        return this.school;
    };

    getRole(){
        return 'intern';
    };
};

// export
export default Intern;