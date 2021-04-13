import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Tanaka Makoto',
    email: 'tanaka@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Bra Bra',
    email: 'brabra@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
