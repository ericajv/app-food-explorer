const AppError = require("../utils/AppError");
const knex = require("../database/knex");

async function ensureAdminAuthenticated(request, response, next) {
    const id = request.user.id;

    if (!id) {
        throw new AppError("Apenas usuários com papel de administrador podem acessar este recurso", 401);
    }

    const user = await knex("users").where({ id }).first();

    if (!user || user.role != 'admin') {
        throw new AppError("Apenas usuários com papel de administrador podem acessar este recurso", 401);
    }

    return next();
}

module.exports = ensureAdminAuthenticated;

