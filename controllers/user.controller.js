import db from "../db.js";

class UserController {
    async createUser(req, res) {
        const {name, surname} = req.body
        const newPerson = await db.query(` INSERT INTO person(name, surname) values( $1,$2 ) RETURNING *`, [name,surname])
        console.log(newPerson.rows)

        res.json(newPerson.rows)
    }
    async getUsers(req, res) {
        const users = await db.query(`SELECT * from person`)
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const user = await db.query(`SELECT * from person where id = $1`, [req.params.id])
        res.json(user.rows[0])
    }
    async updateUsers(req, res) {
        const {id, name, surname } = req.body
        const user = await db.query(
            ` UPDATE person set name = $1, surname = $2 where id = $3 RETURNING * `
            ,[name, surname, id] )
        res.json(user.rows[0])
    }
    async deleteUsers(req, res) {
        const user = await db.query(`delete from person where id = $1`, [req.params.id])
        res.json(user.rows[0])
    }
}

export default  new UserController()