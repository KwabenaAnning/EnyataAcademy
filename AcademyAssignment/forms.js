const firstName = "Ghazi";
const lastName = "Anning";
const age = 32;
const country = "finland";

class student{
    constructor(firstName,lastName, age, country, picture){
     this.firstName = firstName;
     this.lastName = lastName;
     this.age = age; 
     this.country = country;
     this.picture = picture;
    }
    name(){
      return this.firstName
    }
    age(){
     return this.age
    }
async checkForm() {
    if (firstName === "fullName" || lastName ==="Name" || age === "something else" || country === "not selected" ) {
        throw new Error("Please fill all fields")
    };

};

formSentence() {
    return `My name is ${firstName} ${lastName}. I am from ${country}. I am ${age} years old.`;
};



mainForm.addEventListener('submit', async function (event) {
	const firstName = document.getElementById('firstName').value;
	const lastName = document.querySelector('LastName').value;
	const age = document.querySelector('age').value;
	const country = document.querySelector('country').value;
	const picture = document.querySelector('#picture').value;
	event.preventDefault();
	const formClass = new student(firstName, lastName, age, country, picture);
    mainForm = document.querySelector("inputs")
	try {
		await formClass.checkForm()
		alert(formClass.formSentence)
	} catch (error) {
		alert(error.message)
	}
});

}
