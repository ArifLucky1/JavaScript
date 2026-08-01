// Lexical scope means scope is determined by the position of code in the source code.
//  * Inner function have access to outer variables.

    function outer(){
        let a = 10;
        function inner(){
            console.log(a)          // 10
        }
        inner();
    }