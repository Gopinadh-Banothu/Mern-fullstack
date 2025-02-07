const greetfn=(name)=>{
    console.log(`hello,${name}!`);
}
function processName(callback){
    const name="ANURAG";
    callback(name);
}
processName(greetfn);