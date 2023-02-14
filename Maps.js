const yearMap = new Map([
    [1,31],[2,28],[3,31],[4,30],[5,31],[6,30],[7,31],[8,31],[9,30],[10,31],[11,30],[12,31]
]);
// console.log(year.get(4));

// const d = new Date(2018,12,28);
// console.log(d.getFullYear()+" "+d.getMonth()+" "+d.getDate());

function checkLeapyear(year)
{
    if(year%4===0)
    {
        if(year%100===0)
        {
            if(year%400===0)
            {
                return true;
            }else{
                return false;
            }
        }else{
            return true;
    }
    }else{
        return false;
    }
}
function getDaysinMonth(year,month)
{
const ans = [];
    let n=0;
    if(month===2 && checkLeapyear(year))
    {
        n = yearMap.get(month)+1;
    }else{
        n = yearMap.get(month);
    }
    
    const d = new Date(year,month-1,n);
    let i=1;
    while(i<=n)
    {
        ans.push({"month":d.getMonth()+1,"day":i,
        "year":d.getFullYear()
        })
        i=i+1;
    }
    return ans;
}

const result = getDaysinMonth(2023,2);
console.log(result);