function input(minAge , firstName , frstAge , secondName , scndAge) {
    let obj = {name:firstName,age:frstAge,Sname:secondName,Sage:scndAge};
if (minAge<=obj.age){
    console.log(`{ name: '${obj.name}', age: ${obj.age} }`);
}
if (minAge<=obj.Sage){
    console.log(`{ name: '${obj.Sname}', age: ${obj.Sage} }`);
}
}
