export const getLevel = (pathname) => {
  let path = pathname.split('/')[2]
  if (!path) {
    return levels[0]
  }
  return levels.find(l => l.path === path)
}

// export const getChapter = (lesson, pathname) => {
//   let path = pathname.split('/')[3]
//   if (!path) {
//     return lesson.chapters[0]
//   }
//   return lesson.chapters.find(s => s.path === path)
// }

// export const isLastChapter = (lesson, currentChapter) => currentChapter.id + 1 === lesson.chapters.length

// export const isLastLesson = (currentLesson) => currentLesson.id === levels.length

export const levels = [
  {
    path: 'level-1-a-hero-always-finds-a-way',
    title: 'A Hero always finds a way.',
    subtitle: 'Move your hero to the door.',
    description: 'The goal in every dungeon is to get to the door safely',
    room:
`
##########
##########
##########
####*#####
##########
##########
####D#####
##########
`
  }
].map(level => ({
  ...level,
  room: level.room.substr(1),
  goal: {
    playerPosition: (() => {
      const rows = level.room.substr(1).split('\n')
      let x, y;
      for(let i = 0; i < rows.length; i++){
        x = rows[i].indexOf('*')
        if(x > -1){
          y = i
          break
        }
      }
      return {x, y}
    })()
  }
}))
