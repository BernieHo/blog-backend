const listHelper = require('../utils/list_helper')
const { blogs, listWithOneBlog } = require('./test_data')

describe('most liked blog', () => {
  test('when list has only one blog, return that', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)
    expect(result).toEqual(listWithOneBlog[0])
  })

  test('when list has multiple blogs, return one with the most likes', () => {
    const result = listHelper.favoriteBlog(blogs)
    expect(result).toEqual(blogs[2])
  })
})
