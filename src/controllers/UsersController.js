const { hash } = require("bcryptjs");
const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");


class UsersController {

    async create(request, response) {
        const { name, email, password, role } = request.body;

        const database = await sqliteConnection();
        const checkUsersExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if (checkUsersExists) {
            throw new AppError("Este email ja está em uso");
        }

        const hashedPassword = await hash(password, 8);

        await database.run("INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)",
            [name, email, hashedPassword, role]
        );

        response.status(201).json();
    }


}
module.exports = UsersController;