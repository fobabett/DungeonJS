const levels = [

// level 0
// learn to move forward
// eslint-disable-next-line
`
##########
####D#####
##########
####*#####
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
`,


// level 3
// eslint-disable-next-line



// remove the first new line
].map(asciiRoom => asciiRoom.substr(1))

export default levels
