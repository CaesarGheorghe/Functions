function map(items: string[], f: (string) => string): string[] {   
    let result:  string[]=[]; 
    for (let item of items ) {
     let r=f(item)
     result.push (r)
    }
    return result
}
let i=["1","2","3"];
console.log (map(i, (x) => x + "1"))
function filter(items:string[], predicate: (string) => boolean): string[]{
    let result: string []=[];
    for (let item of items){
        if (predicate(item)){
            result.push (item)
        }
        
    }
    return result
}
let j = ["1","2","3"];
console.log (filter(j, (x) => x!=="2"))
function reduce(items:string[], initValue: string, f: (acc: string, currentElement: string)=> string) : string{
    let acc = initValue;
    for (let k=0; k< items.length;k++)
{
    acc = f(acc, items[k]);
}
return acc;
}
let k = ["1","2","3"];
let result= reduce(k,"",(acc, x)=> acc+x);
console.log(result);