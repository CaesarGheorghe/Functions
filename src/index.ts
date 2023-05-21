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
