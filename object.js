let person= {
    name :"SYLLOGISM",
    age :"22",
    greet :function(){
        return`HELLO,my name is ${this.name}`;
    },
    };
   
    console.log(person.name);
    console.log(person.greet());