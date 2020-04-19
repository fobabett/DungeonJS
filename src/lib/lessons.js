// import levels from './levels'

const lessons = [
  {
    id: 0,
    title: "What is JavaScript?",
    path: 'intro',
    chapters: [
      {
        id: 0,
        title: "What is JavaScript",
        path: 'what-is-javascript',
        content: `JavaScript is the programming language of the web. These lessons will teach you the basics of JavaScript.
        
        Click Next to get started!`,
      }
    ]
  },
  {
    id: 1,
    title: "Console Object",
    path: 'console',
    chapters: [
      {
        id: 0,
        title: "What is the Console?",
        path: 'intro',
        content: `The Console Object lets you access your internet brower's debugging console.
For this lesson, we'll be looking looking at console.log().`,
      },
      {
        id: 1,
        title: "Write a Message to the Console",
        path: 'console-log',
        content: `The console.log() method writes messages to the browser console.`,
        task: 'Using the console.log() method, write "My name is NAME!". Replace NAME with your name.',
        example: `
// This function prints the message "My name is JS Knight!"
  console.log("My name is JS Knight!")
`,
        verify: ``,
        completionMessage: `Nice work! You wrote your first console message. There are other console methods. Check out https://www.w3schools.com/jsref/obj_console.asp to learn more.`
      },
    ]
  },
  {
    id: 1,
    title: "Variables",
    path: 'variables',
    chapters: [
      {
        id: 0,
        title: "What are Varaibles?",
        path: 'intro',
        content: 'A JavaScript variable is a container that stores a value.\n A variable is created by writing the keyword var, followed by the variable name. Then you set the value by using the equal to operator (=).',
        example: `
// creates a variable named 'health' with the number value set to 100        
var health = 100;

// creates a variable named 'knight_name' with the string value set to "JS Knight"      
var knight_name = "JS Knight";

// creates a variable named 'knightName' with the string value set to "JS Knight"      
var knightName = "JS Knight";
        `
      },
      {
        id: 1,
        title: "Create a Variable",
        path: 'create-a-variable',
        content: ``,
        task: 'Create a variable knight_name and set it to your name.',
        example: `
var knight_name = "JS Knight";
`,
      verify: `
      if(knight_name === undefined)
        throw new Error('Did you create a variable name "knight_name"?')
      if(typeof knight_name !== 'string')
        throw new Error('set knight_name to "your name".')
      `
      },
      {
        id: 2,
        title: "Print Your Variable to the Console",
        path: 'console-variable',
        content: ``,
        task: 'Using the console.log() method, print your variable knight_name to the console.',
        example: ``,
        placeholder: 'var knight_name = "JS Knight";',
        verify: ``, //TODO: verify
        completionMessage: `Nice work! You created your first string variable. A string is one of the JavaScript Data Types. You'll learn more about Data Dypes in the next lesson.`
      },
    ]
  },
  {
    id: 1,
    title: "Functions",
    path: 'functions',
    chapters: [
      {
        id: 0,
        title: "What Are Functions?",
        path: 'what-are-functions',
        content: `A JavaScript function is a block of code designed to perform a particular task.
        A JavaScript function is executed when "something" invokes it (calls it).`,
        example: `
  // example
  function attack(){
    // do stuff
  }

  const attack = () => {
    // do stuff
  }`
      },
      {
        id: 1,
        title: "Create a Function",
        path: 'create-a-function',
        content: `This game uses predefined functions to control the character. Before you start playing, you should learn how to use functions. Let's start by creating a simple function.`,
        task: 'Create a function named "myFirstFunc" that prints "hello world".',
        example: `
// This function prints "This is an example function!"
function exampleFunc() {
  console.log("This is an example function!")
}
`,
        verify: `
          if(myFirstFunc === undefined)
            throw new Error('myFirstFunc does not exist or was misspelled')
          if(typeof myFirstFunc !== 'function')
            throw new Error('myFirstFunc is not a function')
        `
      },
      {
        id: 2,
        title: "Invoking Functions",
        path: 'invoking-functions',
        content: `Great job on creating your first function. This function didn't actually print "hello world". This is because functions need to be invoked in order to do their job.
        To call a function, enter it's name follwed by a pair of open and closed paraentheses:`,
        task: 'Invoke myFirstFunc',
        example: `
        function exampleFunc() {
          console.log("This is an example function!")
        }
        // Invoke the function
        exampleFunc()
        `,
        placeholder:
`function myFirstFunc() {
  console.log("hello world")
}
`,
        precode: `
          let __myFirstFuncWasExecuted = false
          const __realLog = console.log
          console.log = function() {
            __myFirstFuncWasExecuted = true;
            __realLog(...arguments);
          }
        `,
        verify: `
          if(!__myFirstFuncWasExecuted)
            throw new Error('myFirstFunc was not invoked or was misspelled')
          console.log = __realLog
        `
      },
      // cover arguments??
      {
        id: 3,
        title: "Callenge",
        path: 'challenge',
        content: `Great job!
        The game has the following functions to controller the player:`,
        example: `
moveUp
moveDown
moveLeft
moveRight`,
        task: 'Using these functions, move the player to the ladder.',
        answer: { player_position: { x:3, y: 1 } }, //should be objective position
        completionMessage: `You probably had to call the functions multiple times. There's a more efficient way to do this.
        In the next lesson, you will learn about loops and how you cn use them to complete this level.`,
        placeholder: ''
      },
    ],
  },
  {
    id: 2,
    title: "Loops",
    path: 'loops',
    chapters: [
      {
        id: 0,
        title: "Coming Soon",
        path: 'loops',
        content: ``,
      },
    ]
  }
]

export default lessons
