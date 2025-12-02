interface DirectorInterface {
    // methods 
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// teachers interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string
    workTeachersTasks(): string;
}

class Director implements DirectorInterface {
    getCoffeeBreak(): string {
        throw new Error("Method not implemented.");
    }
    
    workFromHome(): string {
        return `Working from home`
    }
    getToWork(): string {
        return `Getting a coffee break`
    }
    workDirectorTasks(): string {
        return ` Getting to director tasks`
    }
}

// teachers class
class Teacher implements TeacherInterface {
    workTeachersTasks(): string {
        throw new Error("Method not implemented.");
    }
    
    workFromHome(): string {
        return `Cannot work from home`
    }
    getCoffeeBreak(): string {
        return ` Cannot have a break`
    }
    workTeacherTasks(): string {
        return `Getting to work`
    }
}

// create a function employee 
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

// createEmployee(200)
// Write a function isDirector:
// it accepts employee as an argument
// it will be used as a type predicate and if the employee is a director
// Write a function executeWork:
// it accepts employee as an argument
// if the employee is a Director, it will call workDirectorTasks
// if the employee is a Teacher, it will call workTeacherTasks

function isDirector(employee: Director | Teacher): employee is Director{
    return (employee as Director).workDirectorTasks !== undefined;
}

// function to execute work based on employee type
function  executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)){
        console.log(employee.workDirectorTasks());
    }else {
        console.log(employee.workTeacherTasks());
    }
}

// example
executeWork(createEmployee(200));