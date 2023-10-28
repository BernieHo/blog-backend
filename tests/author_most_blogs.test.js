const listHelper = require('../utils/list_helper')
const { blogs, listWithOneBlog } = require('./test_data')

describe('author with the most blogs', () => {
  test('whenb list han only one blog, return the author', () => {
    const result = listHelper.mostBlogs(listWithOneBlog)
    expect(result).toEqual({ author: 'Edsger W. Dijkstra', blogs: 1 })
  })
  test('when list has multiple blogs, return the author with the most', () => {
    const result = listHelper.mostBlogs(blogs)
    expect(result).toEqual({ author: 'Robert C. Martin', blogs: 3 })
  })
})
