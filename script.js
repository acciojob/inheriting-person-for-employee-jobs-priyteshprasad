// complete this js code
function Person(name, age) {
	let p = {}
	p.name = name;
	p.age = age;
	p.greet = function(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
	return p;
}

function Employee(name, age, jobTitle) {
	let emp = Person(name, age);
	emp.jobTitle = jobTitle;
	emp.jobGreet = function(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
	}
	return emp; 
}
// let p1 = Person("Alice", 25)
// p1.greet()
// let e1 = Employee("Bob", 30, "Manager")
// e1.jobGreet() 
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
