// Modules allow us to split code into seperate files and export/import parts of the code.


//      math.js (export)    
        export const  PI = 3.14;
        export function add(a, b){
            return a + b;
        }

        export default function multiply(a, b){
            return a * b;
        }

//      app.js (import)
        import multiply, {PI, add} from './math.js';

        console.log(PI);                // 3.14
        console.log(add(2,3));          // 5
        console.log(multiply(2,3));     // 6
        
        