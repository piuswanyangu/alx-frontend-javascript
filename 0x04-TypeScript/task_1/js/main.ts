export interface Teacher {
    // readonly mode
    readonly firstName: string;
    readonly lastName: string;
    // mandatory
    fullTimeEmployee: boolean;
    location: string;
// optional property we use ? modifier
    yearsOfExperience?: number;
    // allow any other string-keyed property
    [key: string]: any;

}

// teacher
const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    yearsOfExperience: 5, // Optional, so we can include it
    subject: "Math", // Allowed by the [key: string]: any; signature
    age: 40 // Also allowed
};

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
    yearsOfExperience: 0
};

// console.log(teacher3);


// director interface
 interface Director extends Teacher{
    numberOfReports: number
}

// example
const director1: Director ={
    firstName: "Mesh",
    lastName: "Obwaya",
    fullTimeEmployee: false,
    location: "Nairobi",
    numberOfReports: 5
}
// console.log(director1);

// write an interface for the function printteacher
interface printTeacherFunction{
    firstName: string;
    lastName: string;
}
// write a function printTeacher:

function printTeacher({ firstName, lastName }: printTeacherFunction): string {
  return `${firstName}. ${lastName}`;
}
;
// testing the function
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));

// interface for student class
interface IsStudentClass{
    // methods defined on the class
    workOnHomework(): string;
    displayName(): string;
}

// interface of is student constructor
interface IsStudentConstructor{
    firstName: string;
    lastName: string;
}

// writing a class
class StudentClass{
    firstName: string;
    lastName: string

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string{
        return `Currently working`
    }
    displayName(): string{
        return `${this.firstName} `
    }

}
