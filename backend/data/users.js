import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },

  {
    name: 'popo',
    email: 'popo@example.com',
    password: bcrypt.hashSync('1234', 10),
  },

  {
    name: 'lokman',
    email: 'lokman@example.com',
    password: bcrypt.hashSync('1234', 10),
  },
]

export default users
