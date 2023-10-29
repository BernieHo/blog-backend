const _ = require('lodash')

const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  return blogs.reduce((accumulator, blog) => accumulator + blog.likes, 0)
}

const favoriteBlog = blogs => {
  return blogs.reduce((max, current) => {
    return current.likes > max.likes ? current : max
  })
}

const mostBlogs = blogs => {
  const blogCounts = _.countBy(blogs, 'author')
  const maxAuthor = _.maxBy(Object.keys(blogCounts), author => blogCounts[author])
  return { author: maxAuthor, blogs: blogCounts[maxAuthor] }
}

const mostLikes = blogs => {
  const likesPerAuthor = blogs.reduce((result, blog) => {
    return result.hasOwnProperty(blog.author)
      ? { ...result, [blog.author]: result[blog.author] + blog.likes }
      : { ...result, [blog.author]: blog.likes }
  }, {})
  const maxAuthor = _.maxBy(Object.keys(likesPerAuthor), author => likesPerAuthor[author])
  return { author: maxAuthor, likes: likesPerAuthor[maxAuthor] }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
