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


// Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:
// it takes todayClass as an argument
// it will return the string Teaching Math if todayClass is Math
// it will return the string Teaching History if todayClass is History
// Expected result:
// teachClass('Math');
// Teaching Math
// teachClass('History');
// Teaching History

type Subjects = 'Math' | 'History';

function teachClass(className: Subjects): string {
    if (className === 'Math') {
        return 'Teaching Math'
    } else if (className === 'History') {
        return 'Teaching History'
    }
    else {
        throw new Error('Invalid subject provided');
    }
}
// test example
console.log(teachClass('History'));