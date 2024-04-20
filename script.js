// complete this js code
let personPropObj = {
	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
}
let employeePropObj = {
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
	}
}
Object.setPrototypeOf(employeePropObj, personPropObj)

function Person(name, age) {
	let p = Object.create(personPropObj)
	p.name = name;
	p.age = age;
	return p;
}

function Employee(name, age, jobTitle) {
	let emp = Person(name, age);
	emp.jobTitle = jobTitle;
	Object.setPrototypeOf(emp, employeePropObj)
	
	return emp; 
}
// let p1 = Person("Alice", 25)
// p1.greet()
// let e1 = Employee("Bob", 30, "Manager")
// e1.jobGreet() 
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
