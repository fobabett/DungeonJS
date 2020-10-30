// import levels from './levels'

export const lessons = [
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
}`,

        map: `
##########
##########
##########
####*#####
##########
##########
##########
##########
`,
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
        `,
        map: `
##########
##########
##########
####*#####
##########
##########
##########
##########
`,
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
        `,
        map: `
##########
##########
##########
####*#####
##########
##########
##########
##########
`,
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
        placeholder: '',
        map: `
##########
###D######
##########
####*#####
##########
##########
##########
##########
`,
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
        map: `
##########
##########
##########
####*#####
##########
##########
##########
##########
`,

      },
    ]
  }
]

const DEPRECATED_levels = [

// level 0
// learn to move forward
// eslint-disable-next-line
`
##########
####D#####
##########
####*#####
##########
##########
##########
##########
`,

// level 1
// learn to move sideward
// eslint-disable-next-line
`
##########
###D######
##########
#######*##
##########
##########
##########
##########
`,

// level 2
// learn to not fall
// eslint-disable-next-line
`
..........
.D###.....
....#.....
....#.....
....*.....
..........
..........
..........
`,


// level 3
// eslint-disable-next-line



// remove the first new line
].map(asciiRoom => asciiRoom.substr(1))

export default { lessons }