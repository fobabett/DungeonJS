import { lessons } from './lessons'

export const getLesson = (pathname) => {
  let path = pathname.split('/')[2]
  if (!path) {
    return lessons[0]
  }
  return lessons.find(l => l.path === path)
}

export const getChapter = (lesson, pathname) => {
  let path = pathname.split('/')[3]
  if (!path) {
    return lesson.chapters[0]
  }
  return lesson.chapters.find(s => s.path === path)
}

export const isLastChapter = (lesson, currentChapter) => currentChapter.id + 1 === lesson.chapters.length
export const isLastLesson = (currentLesson) => currentLesson.id === lessons.length