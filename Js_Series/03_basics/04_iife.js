// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // name IIFE
    console.log(`DB Connected`);
})();


( (name) => {
    console.log(`DB Uconnected ${name}`);
}
)("Aksh")