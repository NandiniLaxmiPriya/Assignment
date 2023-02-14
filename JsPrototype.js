function School(name)
{
    this.name = name;
}
const getName = {
    getmyname(){
        console.log(`${this.name}`)
    }
}
Object.assign(School.prototype,getName);

// /const gog = new School("Nandyy");
// gog.getmyname();

function Employee(name,schoolName)
{
   School.call(this,name);
   this.schoolName =schoolName;
   
}
const getSchoolName ={
    getnameofschool(){
      console.log(`${this.schoolName}`);
    }
}
Object.assign(School.prototype,getName);
 
Employee.prototype.constructor = Employee;
console.log(Employee)