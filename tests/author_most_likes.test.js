const listHelper = require('../utils/list_helper')
const { blogs, listWithOneBlog } = require('./test_data')

describe('most liked author', () => {
  test('when list has only one blog, return author with likes number', () => {
    const result = listHelper.mostLikes(listWithOneBlog)
    expect(result).toEqual({ author: 'Edsger W. Dijkstra', likes: 5 })
  })

  test('when list has multiple blogs, return author with the most likes', () => {
    const result = listHelper.mostLikes(blogs)
    expect(result).toEqual({ author: 'Edsger W. Dijkstra', likes: 17 })
  })
})
