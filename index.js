//const + arrow function
const helloBabel = () => {
  console.log('Hello Babel!');
}

helloBabel();

// block scope
// cannot access foo variable outside of block
if(true){
  let foo = "bar";
}
