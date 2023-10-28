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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
}
