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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
