const Student ={
    name : "Raj",
    age:20,
    college: "ASU",
    score: 0,
    set setScore(s)
    {
        this.score=s
    },
    get getScore(){
        return this.score
    },
    
};
// const res = Object.values(Student);

/*let res =""
for(let i in Student)
{
    res+=Student[i] +" "
}*/
function Teacher(sname)
{
    this.name =sname;
}
//const res = JSON.stringify(Student)
//document.getElementById("p1").innerHTML = res;

//Student.setScore = 100;

//document.getElementById("p2").innerHTML = Student.getScore;

const myself = new Teacher("Nandy");

const deal = myself.name;
console.log(myself);
//document.getElementById("p3").innerHTML = deal;

function Fruit(name)
{
    this.name = name;
}
const fav = new Fruit("apple");
console.log(fav)