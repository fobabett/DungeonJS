// import levels from './levels'

const lessons = [
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
        content: `In order to move the character, we need to call some functions. Before we start playing, let's create a simple function.`,
        task: 'Create a function named "myFirstFunc" that prints "hello world".',
        example: `
function exampleFunc() {
  console.log("This is an example function!")
}
`,
        answer: {
          text_match: [
            `
            function myFun() {
              console.log("This is an example function!")
            }
            `
          ]
        }
      },
      {
        id: 2,
        title: "Invoking Functions",
        path: 'invoking-functions',
        content: `Great job on creating your first function. When you executed the program, 
        did you notice that nothing happend? That's because functions have to be invoked in order to do their job.
        <Blah Blah explain function invocation + show example here>.`,
        task: 'Move the character up one title by invoking the function you created previously.',
        answer: { player_position: { y: 2 }}
      },
      // cover arguments??
      {
        id: 3,
        title: "Callenge",
        path: 'challenge',
        content: `Great job!
        The game already has player movement functions built for you. <list funcs here>.`,
        task: 'Using these functions, move the player to the objective.',
        answer: { player_position: { }}, //should be objective position
        completionMessage: `You probably had to call the functions multiple times. There's a more efficient way to do this.
        In the next lesson, you will learn about loops and how you cn use them to complete this level.`
      },
    ],
    // level: levels[1]
  },
  {
    id: 2,
    title: "Loops",
    path: 'loops',
    chapters: [
      {
        id: 0,
        title: "",
        path: 'loops',
        content: ``,
      },
    ]
  }
]

export default lessons