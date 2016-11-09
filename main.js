var employee = function () {
	this.name = null;
	this.department = null;
	this.education = "post-doc";
}

var clinician = function (){
	this.medical_expertise = null;
}

clinician.prototype = new employee();

var operations = function (){
	this.responsibility = null;
}
operations.prototype = new employee();


var department = function () {
	this.name = null;
	this.city = null;
	this.size = 5321;
}

var fieldOffice = function (){
	this.product = "medical devices"
	this.city = "Somerville, MA";
}

fieldOffice.prototype = new department();
var fieldOffice1 = new fieldOffice();

var headquarters = function() {
	this.function = "corporate"
	this.city= "Los Gatos, CA"
}
headquarters.prototype = new department();
var headquartersMain = new headquarters();

var clinician1 = new clinician();
clinician1.name = "Roger Andrews";
clinician1.medical_expertise = "hemotology";
clinician1.department = fieldOffice1;
var clinician2 = new clinician ();
clinician2.name = "Andrea Kassel";
clinician2.medical_expertise = "pathology";
clinician2.department = headquartersMain;

var operations1 = new operations ();
operations1.name = "Samuel Lewis";
operations1.responsibility = "quality control";
operations1.department = fieldOffice1
var operations2 = new operations();
operations2.name = "Luisa Solis";
operations2.responsibility = "SHEM"
operations2.department = headquartersMain;
console.log(clinician1, clinician2, operations2, operations1);

var employeeArr = [clinician1, clinician2];
for (var i = 0; i < employeeArr.length; i++){
	var divString = "<p>" + employeeArr[i].name + " works as a clinician in the " + employeeArr[i].department.city + " offices and is a specialist in " + employeeArr[i].medical_expertise + ".</p>";
	$("#maincontent").append(divString);
}

var plantArr = [operations1, operations2];
for (var j = 0; j <plantArr.length; j++){
	var divString2 = "<p>" + plantArr[j].name + " works as a manager in the " + plantArr[j].department.city + " offices and is a specialist in " +  plantArr[j].responsibility + ".</p>";
	$("#maincontent").append(divString2);
}