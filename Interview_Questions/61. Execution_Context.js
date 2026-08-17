
//      Execution context is an environment in which JS code is executed.

//      It has two phase:
//          1-  Creation Phase
//          2-  Execution Phase


//              Creation Phase               ->then->                   Execution Phase

//          ->  Variable objects                                   ->   Code execution
//          ->  Scope chain                                        ->   Assign values
//          ->  this binding                                       ->   Function calls
//          ->  Hoisting                                           ->   Return values



//      Types:

//    ->    Global Execution Context        ->      Default Context
//    ->    Function Execution Context      ->      Created for each function call 
//    ->    Eval Execution Context          ->      Created by eval()