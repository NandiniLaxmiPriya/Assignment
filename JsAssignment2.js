const School ={name :""}

const Employee = Object.create(School);
Employee.schoolName = "";


const Teacher = Object.create(Employee);
Teacher.designation = "";

Teacher.name = "abc";
Teacher.schoolName = "DAV";
Teacher.designation = "Maths";
console.log(Teacher)

Teacher.getAll = function()
{
    let res = Teacher.name +" "+ Teacher.schoolName+ " "+ Teacher.designation;
    return res;
}
console.log(Teacher.getAll());