function School(name)
{
    this.name = name;
}
School.prototype.getName = function(){
    return this.name;
}
 const hello = new School("DAV");
 console.log(hello.getName());

 function Employee(name,schoolName)
 {
    School.call(this,name);
    this.schoolName =schoolName;
    this.getSchoolName = function(){
        return this.schoolName;
     }
 }

 Employee.prototype = Object.create(School.prototype);
 

 const sinchan = new Employee("sinchan","Playschool");
 
 Employee.prototype.constructor = Employee;
 console.log(sinchan.getName());
 console.log(sinchan.getSchoolName());

 function Teacher(name,schoolName,designation)
 {
    Employee.call(this,name,schoolName);
    this.designation=designation;
   /* this.getdesignation = function(){
   
        return this.designation;
      }
     */
 }
 Teacher.prototype = Object.create(Employee.prototype);
 Teacher.prototype.constructor = Teacher;
 Teacher.prototype.getdesignation = function(){
   
   return this.designation;
 }
 
Teacher.prototype.getAll=function()
{
    return this.name +" "+ this.schoolName +" "+this.designation;
}


 const lect = new Teacher("Doremon","AnySchool","Cartoon");
 console.log(lect.getdesignation());
 console.log(lect.getName());
 console.log(lect.getSchoolName());
 console.log("======")
 console.log(lect.getAll());