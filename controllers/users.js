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
        name: "Brett Smith",
        username: "brsmith",
        email: "brsmith@june.biz",
        address: {
            street: "Roger Ave",
            suite: "Apt. 294",
            city: "Austin",
            zipcode: "78758",
            geo: {
              lat: "-37.3159",
              lng: "81.1496"
            }
          },
          phone: "1-786-244-8273 x2095",
          website: "brett.org",
          company: {
            name: "Smith-Crona LLC",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
          }
    }
    users.push(newUser)
    res.json(users)
}

const update = (req, res) => {
    const found = users.some(user => user.id == req.params.id)
    if (found) {
        const updateThis = users.filter(user => user.id == req.params.id)
        updateThis[0].name = req.body.name;
        const updateUser = {
            name: "hello world"
        }
        updateThis.push(updateUser)
        res.send(updateThis)
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
}

const remove = (req, res) => {
    const found = users.some(user => user.id == req.params.id)
    if (found){
        const removeThis = users.filter(user => user.id == req.params.id)
        users.splice(removeThis, 1);
        res.send(users)
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
}

module.exports = { 
    list,
    show,
    create,
    update,
    remove
}