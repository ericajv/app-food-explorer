const DiskStorage = require("../providers/DiskStorage");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class PlateImageController {
    async update(request, response) {
        const plate_id = request.params.id;
        const imageFilename = request.file.filename;

        const diskStorage = new DiskStorage();

        const plate = await knex("plates")
            .where({ id: plate_id }).first();


        if (plate.image) {
            await diskStorage.deleteFile(plate.image);
        }

        const filename = await diskStorage.saveFile(imageFilename);
        plate.image = filename;

        await knex("plates").update(plate).where({ id: plate_id });

        return response.json(plate);

    }

}
module.exports = PlateImageController;