const users = require('../data/index')
const createUser = require('../data/sampleUser')
const idAutoIncrement = require('id-auto-increment');


const list = (req, res) => {
    res.json(users)
}

const show = (req, res) => {
    const getUsers = users.some(user => user.id == req.params.id)
    if (getUsers){
      res.send(users.filter(user => user.id == req.params.id))
    } else {
      res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
}

const create = (req, res) => {
    const newUser = {
        // createUser
        id: idAutoIncrement,
        name: "Brett Smith",
        username: "brsmith",
        email: createUser.email,
        address: {
            street: createUser.address.street,
            suite: createUser.address.suite,
            city: createUser.address.city,
            zipcode: createUser.address.zipcode,
            geo: {
              lat: createUser.address.geo.lat,
              lng: createUser.address.geo.lng
            }
          },
          phone: createUser.address.phone,
          website: createUser.address.website,
          company: {
            name: createUser.address.company.name,
            catchPhrase: createUser.address.company.catchPhrase,
            bs: createUser.address.company.bs
          }
    }
    users.push(newUser)
    res.json(users)
}

module.exports = { 
    list,
    show,
    create
}

// const newComment = {
//     _id: Math.floor(Math.random()*100),
//     body: req.body.body,
//     postId: req.body.postId
// }
// if(!newComment._id) res.status(400).json({ msg: "New comments require an id" })
// comments.push(newComment)
// res.json(comments)