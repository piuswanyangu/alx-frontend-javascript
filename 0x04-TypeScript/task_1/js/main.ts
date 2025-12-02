export interface Teacher {
    // readonly mode
    readonly firstName: string;
    readonly lastName: string;
    // mandatory
    fullTimeEmployee: boolean;
    location:string;
// optional property we use ? modifier
    yearsOfExperience?:number;
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
 interface Directors extends Teacher{
    numberOfReports: number
}

// example
const director1: Directors ={
    firstName: "Mesh",
    lastName: "Obwaya",
    fullTimeEmployee: false,
    location: "Nairobi",
    numberOfReports: 5
}
// console.log(director1);