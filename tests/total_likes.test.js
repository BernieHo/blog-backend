const listHelper = require('../utils/list_helper')
const { blogs, listWithOneBlog } = require('./test_data')

describe('total likes', () => {
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('when list has multiple blogs, return the sum of all likes', () => {
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(36)
  })
})
