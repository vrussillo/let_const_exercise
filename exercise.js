const PI = 3.14;
PI = 42;

// var can be reasigned and redeclared and has function scope rules whereas let can be reassigned but not redeclared and has block scope rules

// var can be reasigned and redeclared and has function scope rules whereas const can neither be reasigned or redeclared and has block scope rules

// let can be reassigned but not redeclared whereas const can neither be reasigned or redeclared

// hoisting is where a variable could be declared and be hoisted at the top of the code. This can cause confusion in your code because if you have already declared a variable you could potentially and unkowingly redeclare a variable later in your code. Let and Const will allow a RefrenceError in console to make you aware of any confliction with redeclaring in your code.
