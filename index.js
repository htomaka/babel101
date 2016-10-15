//const + arrow function
const helloBabel = () => {
  console.log('Hello Babel!');
}

helloBabel();

// block scope
if(true){
  let foo = "bar";
}

console.log(foo); // foo is not defined error
