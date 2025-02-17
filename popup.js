document.getElementById("scan").addEventListener("click", () => {
    // alert(__NEXT_DATA__.props.pageProps.task.publicAttributes.questions.map(({index, value}) => ({index, value})));
    const answers = document.getElementById("answers").value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: fillAnswers,
            args : [ answers ],
        });
    });
});

function fillAnswers(answers = []) {
    document.body.style.color = "lightblue";
    if (typeof answers === "string") {
        answers = JSON.parse(answers);
    }

    let k = 0;
    for (let i = 0; i < answers.length; i++) {
        let element = document.getElementById(`answer-${answers[i].index}`);
        if (element) {
            if (answers[i].multiple) {
                for (let j = 0; j < answers[i].value.length; j++) {
                    setTimeout(
                        () => element.querySelector(`input[class="ant-checkbox-input"][value="${answers[i].value[j]}"]`).click(),
                        100 * (k++)
                    );
                }
            } else {
                setTimeout(
                    () => element.querySelector(`input[class="ant-radio-input"][value="${answers[i].value}"]`).click(),
                    100 * (k++)
                )
            }
        }

    }
}


const answers = [
    {
        "question": "Can JavaScript code be executed in a file with the .ts extension?",
        "multiple": false,
        "answers": [
            "Yes, it can.",
            "No, it cannot."
        ],
        "index": 0,
        "value": 0
    },
    {
        "question": "According to Microsoft recommendations, should the name of an interface in TS start with an additional 'I'?",
        "multiple": false,
        "answers": [
            "Yes, it should.",
            "No, it is not recommended."
        ],
        "index": 1,
        "value": 1
    },
    {
        "question": "What advantage does TS have?",
        "multiple": false,
        "answers": [
            "It uses class-based object-oriented programming (OOP).",
            "It provides guidelines for development and coding.",
            "It facilitates code structuring.",
            "All of the above."
        ],
        "index": 2,
        "value": 3
    },
    {
        "question": "Which access modifiers are supported in TS?",
        "multiple": true,
        "answers": [
            "public",
            "private",
            "void",
            "protected"
        ],
        "index": 3,
        "value": [0, 1, 3]
    },
    {
        "question": "Can you use alert() in TS?",
        "multiple": false,
        "answers": [
            "Yes, you can.",
            "No, you cannot."
        ],
        "index": 4,
        "value": 0
    },
    {
        "question": "Select types in TS:",
        "multiple": true,
        "answers": [
            "int",
            "string",
            "object",
            "any",
            "boolean",
            "tuple",
            "never",
            "double",
            "Array"
        ],
        "index": 5,
        "value": [1, 2, 3, 4, 5, 6, 8]
    },
    {
        "question": "Valid syntax in TS:",
        "multiple": true,
        "answers": [
            "let test = \"hello world\";",
            "let test: string = \"hello world\";",
            "let test string = \"hello world\";",
            "let string test = \"hello world\";",
            "let test: any = \"hello world\";"
        ],
        "index": 6,
        "value": [0, 1, 4]
    },
    {
        "question": "In the expression 'let test: string = \"hello world\";\ntest = 23;'",
        "multiple": false,
        "answers": [
            "No error will occur.",
            "There will be an error because the type is not specified in the second expression.",
            "There will be an error because the types of the first and second expressions do not match.",
            "There is no correct answer."
        ],
        "index": 7,
        "value": 2
    },
    {
        "question": "In the expression 'let test: any = \"hello\";\ntest = 23;'",
        "multiple": false,
        "answers": [
            "There will be an error because the type is not specified in the first expression.",
            "There will be an error because the type is not specified in the second expression.",
            "No error will occur.",
            "There is no correct answer."
        ],
        "index": 8,
        "value": 2
    },
    {
        "question": "Which operator is used to check the type of a variable?",
        "multiple": false,
        "answers": [
            "instanceof",
            "getTypeOf",
            "typeof",
            "There is no correct answer."
        ],
        "index": 9,
        "value": 2
    },
    {
        "question": "What values can the type-checking operator return?",
        "multiple": true,
        "answers": [
            "symbol",
            "number",
            "boolean",
            "tuple",
            "string",
            "undefined",
            "bigint",
            "any"
        ],
        "index": 10,
        "value": [0, 1, 2, 4, 5, 6]
    },
    {
        "question": "What types of functions can be written in TS?",
        "multiple": true,
        "answers": [
            "function declaration",
            "function expression",
            "arrow function"
        ],
        "index": 11,
        "value": [0, 1, 2]
    },
    {
        "question": "Is the function call func('1','2') valid for the function function func(a: number, b: number){ \n...some code...\n}?",
        "multiple": false,
        "answers": [
            "The call is valid, there will be no error.",
            "The call is incorrect, but there will be no error.",
            "The call is incorrect and there will be an error."
        ],
        "index": 12,
        "value": 2
    },
    {
        "question": "Can you pass more parameters than expected in a function call in TS?",
        "multiple": false,
        "answers": [
            "No, you cannot.",
            "Yes, you can."
        ],
        "index": 13,
        "value": 0
    },
    {
        "question": "Can you set a value that is another expression (e.g., a function call) as the default value for function parameters in TS?",
        "multiple": false,
        "answers": [
            "No, you cannot.",
            "Yes, you can.",
            "By default, you cannot, but you can create conditions under which it becomes possible."
        ],
        "index": 14,
        "value": 1
    },
    {
        "question": "How do you correctly describe the type of a function: function func(){\n console.log(\"My function\");\n};",
        "multiple": false,
        "answers": [
            "()=\u003estring;",
            "()=\u003evoid;",
            "(string)=\u003evoid;",
            "(undefined)=\u003evoid;",
            "There is no correct answer."
        ],
        "index": 15,
        "value": 1
    },
    {
        "question": "Can a function in TS accept another function as an argument?",
        "multiple": false,
        "answers": [
            "Yes, it can.",
            "No, it cannot.",
            "By default, it cannot, but you can create conditions under which it becomes possible."
        ],
        "index": 16,
        "value": 0
    },
    {
        "question": "Is it possible to combine two or more other types to form a combined type representing values that may be any one of those initial types?",
        "multiple": false,
        "answers": [
            "Yes, it is called a union.",
            "Yes, it is called an onion.",
            "Yes, it is called a merger.",
            "No, it is not possible."
        ],
        "index": 17,
        "value": 0
    },
    {
        "question": "In TypeScript, which syntax is used to declare a variable that can be either a 'number' or a 'string'?",
        "multiple": false,
        "answers": [
            "Types cannot be combined in TS.",
            "number \u0026\u0026 string",
            "number | string",
            "number || string",
            "number \u0026 string"
        ],
        "index": 18,
        "value": 2
    },
    {
        "question": "Which type is suitable for the object let obj = { name: 'Alan', age: 20 }?",
        "multiple": true,
        "answers": [
            "{name: string}",
            "{name: string; age: number}",
            "{name: string; age: number; isAdmin: boolean}",
            "{name: string; age: number; isAdmin?: boolean}",
            "{age: any; name: any; isAdmin: any}"
        ],
        "index": 19,
        "value": [1, 3]
    },
    {
        "question": "Can a function in TS return an object?",
        "multiple": false,
        "answers": [
            "Yes, it can.",
            "No, it cannot.",
            "By default, it cannot, but you can create conditions under which it becomes possible.",
            "It depends on the type of function (declaration, expression, arrow)."
        ],
        "index": 20,
        "value": 0
    },
    {
        "question": "How do you correctly extend a type alias? (A and B are types in the example)",
        "multiple": false,
        "answers": [
            "Type aliases cannot be extended in TS.",
            "A \u0026\u0026 B",
            "A || B",
            "A | B",
            "A \u0026 B"
        ],
        "index": 21,
        "value": 4
    },
    {
        "question": "What is 'as' in TS?",
        "multiple": false,
        "answers": [
            "It is a type assertion, a way to specify to the compiler which type (previously declared) the variable will have.",
            "It is a way to combine types and assign a different type (not previously defined) to a variable during compilation forcibly.",
            "It is a replacement of the type previously described for a variable with the type needed in a specific line.",
            "It is a deprecated operator that is not used at the moment."
        ],
        "index": 22,
        "value": 0
    },
    {
        "question": "Which type corresponds to the array let arr = [1, 2, 3];?",
        "multiple": true,
        "answers": [
            "number[ ]",
            "string[ ]",
            "Array",
            "Array\u003cnumber\u003e",
            "Array\u003cstring\u003e"
        ],
        "index": 23,
        "value": [0, 3]
    },
    {
        "question": "Which type corresponds to the array let arr = [1, 2, 3]; where the elements cannot be modified?",
        "multiple": true,
        "answers": [
            "ReadonlyArray\u003cnumber\u003e",
            "ReadonlyArray\u003cstring\u003e",
            "ReadonlyArray",
            "readonly string[ ]",
            "readonly number[ ]"
        ],
        "index": 24,
        "value": [0, 4]
    },
    {
        "question": "Does array destructuring work in TS?",
        "multiple": false,
        "answers": [
            "Yes",
            "No, it doesn't work",
            "Only in readonly arrays"
        ],
        "index": 25,
        "value": 0
    },
    {
        "question": "What is the type called for the structure: let person: [string, number] = [\"Alan\", 20];",
        "multiple": false,
        "answers": [
            "Readonly Array",
            "Enum",
            "Tuple",
            "Array"
        ],
        "index": 26,
        "value": 2
    },
    {
        "question": "Select the type for let person = [\"Alan\", 20];",
        "multiple": true,
        "answers": [
            "It is impossible to write a type for this structure",
            "number[  ]",
            "[number, string]",
            "string[ ]",
            "[string, number]",
            "[never]",
            "[any]"
        ],
        "index": 27,
        "value": [4]
    },
    {
        "question": "Which enum declaration is correct?",
        "multiple": true,
        "answers": [
            "enum Month { Jan, Feb, Mar, Apr }",
            "enum Month { Jan=1, Feb=2, Mar=3, Apr=5 }",
            "enum Month = { Jan, Feb, Mar=3, Apr }",
            "enum Month { Jan='Янв', Feb='Фев', Mar, Apr='Апр' }",
            "enum Month { Jan=1, Feb=2, Mar, Apr=5 }",
            "enum Month { Jan, Feb='Фев', Mar, Apr='Апр' }",
            "enum Month = { Jan, Feb='Фев', Mar='Мар', Apr='Апр' }",
            "enum Month { Jan=1, Feb=2, Mar, Apr='Апр' }"
        ],
        "index": 28,
        "value": [0, 1, 4, 7]
    },
    {
        "question": "In the expression 'let someVar: any = \"hello\"; test = 23;'",
        "multiple": false,
        "answers": [
            "No error will occur",
            "There will be an error because the type is not specified in the second expression",
            "There will be an error because the types do not match in the first and second expressions",
            "There is no correct answer"
        ],
        "index": 29,
        "value": [3]
    },
    {
        "question": "What is the value of C in enum One {A = 1,B = 5,C,D = 0}?",
        "multiple": false,
        "answers": [
            "3",
            "undefined",
            "6",
            "5",
            "There will be an error"
        ],
        "index": 30,
        "value": 2
    },
    {
        "question": "Which TypeScript strictness flag makes TypeScript issue an error on variables implicitly inferred as 'any'?",
        "multiple": false,
        "answers": [
            "strictNullChecks",
            "noImplicitAny",
            "strict",
            "noSurpriseVariables",
            "noAnyChecks"
        ],
        "index": 31,
        "value": 1
    },
    {
        "question": "What is the purpose of static type-checking in TypeScript?",
        "multiple": false,
        "answers": [
            "To catch runtime errors",
            "To improve code performance",
            "To find bugs before code execution",
            "To enhance code readability"
        ],
        "index": 32,
        "value": 2
    },
    {
        "question": "How can you add type annotations to variables in TypeScript?",
        "multiple": false,
        "answers": [
            "Before the variable, using \"int x = 0;\" style declarations.",
            "After the variable, using \"let x: string = 'hello';\" style declarations.",
            "Using the type keyword.",
            "TypeScript automatically infers types; no annotations needed."
        ],
        "index": 33,
        "value": 1
    },
    {
        "question": "When deciding between type aliases and interfaces, what is recommended to use?",
        "multiple": false,
        "answers": [
            "Always use type aliases for better performance.",
            "Use type for simple structures and interfaces for complex structures.",
            "Use interfaces until you need features from type, then switch to type.",
            "There is no significant difference; choose based on personal preference."
        ],
        "index": 34,
        "value": 2
    },
    {
        "question": "What distinguishes type aliases from interfaces in TypeScript?",
        "multiple": false,
        "answers": [
            "Type aliases are extendable, while interfaces are not.",
            "Type aliases cannot be re-opened to add new properties, while interfaces can.",
            "Type aliases are more powerful and versatile than interfaces.",
            "Interfaces cannot be used to declare the shapes of objects."
        ],
        "index": 35,
        "value": 1
    },
    {
        "question": "When working with class constructors in TypeScript, what is a key difference between function signatures and constructor signatures?",
        "multiple": false,
        "answers": [
            "Constructors can have type parameters, unlike functions",
            "Constructors can have return type annotations, unlike functions",
            "Constructors always return the class instance type",
            "Constructors cannot have default values for parameters"
        ],
        "index": 36,
        "value": 2
    },
    {
        "question": "In TypeScript, what is the default visibility modifier for class members?",
        "multiple": false,
        "answers": [
            "public",
            "private",
            "protected",
            "internal"
        ],
        "index": 37,
        "value": 0
    },
    {
        "question": "What does the question mark (?) signify when used in TypeScript object types?",
        "multiple": false,
        "answers": [
            "The property is required.",
            "The property is optional.",
            "The property is read-only.",
            "The property is a function."
        ],
        "index": 38,
        "value": 1
    },
    {
        "question": "What does the function type expression (a: string) =\u003e void mean in TypeScript?",
        "multiple": false,
        "answers": [
            "A function with one parameter named \"a\" of type string, returning void.",
            "A function with one parameter named \"string\" of type any.",
            "A function with a parameter named \"a\" of type any.",
            "A function with no parameters and returns void."
        ],
        "index": 39,
        "value": 0
    },
    {
        "question": "What role does the never type play in TypeScript?",
        "multiple": false,
        "answers": [
            "It represents a state that shouldn't exist and is used for exhaustive checking.",
            "It is assignable to every type, including itself.",
            "It allows concatenation of multiple module source files.",
            "It absorbs everything in an intersection with unknown."
        ],
        "index": 40,
        "value": 0
    },
    {
        "question": "What is the main advantage of the new unknown top type introduced in TypeScript 3.0?",
        "multiple": false,
        "answers": [
            "It absorbs everything in a union type.",
            "It allows operations without type assertion or narrowing.",
            "It is assignable to any type without restrictions.",
            "It is assignable only to itself and \"any\" without a type assertion or control flow based narrowing."
        ],
        "index": 41,
        "value": 3
    },
    {
        "question": "Which of the following syntax options is valid for const assertions in TypeScript?",
        "multiple": false,
        "answers": [
            "let x = \"hello\" \u003cconst\u003e;",
            "let y = [10, 20] as const;",
            "let z = { text: \"hello\" } const;",
            "let a = (Math.random() \u003c 0.5 ? 0 : 1) as const;"
        ],
        "index": 42,
        "value": 1
    },
    {
        "question": "What is a limitation of const assertions?",
        "multiple": false,
        "answers": [
            "They can only be applied to complex literal expressions.",
            "Const contexts immediately convert expressions to be fully immutable.",
            "They cannot be used with array literals.",
            "They can only be applied to simple literal expressions."
        ],
        "index": 43,
        "value": 3
    },
    {
        "question": "Which of the following are correct ways to perform type assertions in TypeScript?",
        "multiple": true,
        "answers": [
            "const myCanvas = document.getElementById(\"main_canvas\") as HTMLCanvasElement;",
            "const myCanvas = \u003cHTMLCanvasElement\u003edocument.getElementById(\"main_canvas\");",
            "const myCanvas = document.getElementById(\"main_canvas\") as string;",
            "const myCanvas = (HTMLCanvasElement)document.getElementById(\"main_canvas\");"
        ],
        "index":44,
        "value": [0, 1]
    },
    {
        "question": "With strictNullChecks turned on in TypeScript, what is the behavior when a value is null or undefined?",
        "multiple": false,
        "answers": [
            "Values can be accessed normally without any issues",
            "Null and undefined can be assigned to a property of any type.",
            "Values must be tested for null or undefined before using methods or properties.",
            "Both a and b."
        ],
        "index": 45,
        "value": 2
    },
    {
        "question": "What does the postfix ! operator do in TypeScript?",
        "multiple": false,
        "answers": [
            "It negates a boolean value.",
            "It asserts that a value isn't null or undefined.",
            "It converts a variable to a different type.",
            "It is used for arithmetic operations."
        ],
        "index": 46,
        "value": 1
    },
    {
        "question": "What is the purpose of intersection types in TypeScript?",
        "multiple": false,
        "answers": [
            "To create new types by extending existing types using the \u0026 operator.",
            "To define the relationship between interfaces and objects.",
            "To handle conflicts between types and aliases.",
            "To create generic helper types."
        ],
        "index": 47,
        "value": 0
    },
    {
        "question": "What does the keyof operator do?",
        "multiple": false,
        "answers": [
            "It takes an array and produces a union of its elements.",
            "It takes an object type and produces a union of its keys.",
            "It converts a string or number into a union type.",
            "It extracts the values from an array of objects."
        ],
        "index": 48,
        "value": 1
    }
]