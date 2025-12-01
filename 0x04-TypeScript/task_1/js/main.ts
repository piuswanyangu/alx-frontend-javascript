export interface Teacher {
    firstName: string
    lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience:number
    location:string
    contract?: boolean

}

// teacher
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
    yearsOfExperience: 0
};

console.log(teacher3);