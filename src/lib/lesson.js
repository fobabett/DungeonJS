import lessons from './lessons'

export const getLesson = (pathname) => {
  let path = pathname.split('/')[2]
  if(!path) {
    return lessons[0]
  }
  return lessons.find(l => l.path === path)
}

export const getLessonSection = (lesson, pathname) => {
  let path = pathname.split('/')[3]
  if(!path) {
    return lesson.sections[0]
  }
  return lesson.sections.find(s => s.path === path)
}