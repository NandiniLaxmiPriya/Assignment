const callme = (name,age)=>{

    const person={
        pname : name,
        page : age,
        pyear : 2023,
        bornYear : function (){
            return this.pyear-this.page
        }
    }
    const output = `Hello my name is ${person.pname} and my age is ${person.page} and my birth year is ${person.bornYear()}`
    return output
}
console.log(callme('nandy',21))