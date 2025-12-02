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

createEmployee(200)