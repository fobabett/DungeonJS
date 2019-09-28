// Just one of the game levels for these lessons?
const lessons = [
  {
    id: 1,
    title: "Functions",
    path: 'functions',
    sections: [
      {
        id: 0,
        title: "What Are Functions?",
        path: 'what-are-functions',
        content: `A JavaScript function is a block of code designed to perform a particular task.
        A JavaScript function is executed when "something" invokes it (calls it).`,
        example: `
// example
function attack(){
  console.log('attack!')
}
// or
const attack = () => {
  console.log('attack!')
}`
      },
      {
        id: 1,
        title: "Create a Function",
        path: 'create-a-function',
        content: `In order to move the character up the y axis, we must increment 'player.y' by 1.`,
        task: 'Create a function named "moveUp" that moves the character up one tile.',
        answer: { text_match: `function moveUp(){player.y = player.y+1}`} //or similar
      },
      {
        id: 2,
        title: "Invoking Functions",
        path: 'invoking-functions',
        content: `Great job on creating your first function. When you executed the program, 
        did you notice that nothing happend? That's because functions have to be invoked in order to do their job.
        <Blah Blah explain function invocation + show example here>.`,
        task: 'Move the character up one title by invoking the function you created previously.',
        answer: { player_position: { x: null, y: 1 }}
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
    ]
  },
  {
    id: 2,
    title: "Loops",
    path: 'loops',
    sections: [
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