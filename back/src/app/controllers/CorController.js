import Cor from '../models/Cor.js';
import * as Yup from 'yup';

class CorController {
    async store(req, res) {
        
        const name = req.body;

        const create = await Cor.create(name);

        return res.json(create);
    }

    async index(req, res) {
        const busca = await Cor.findAll();

        return res.json(busca)
    }
}

export default new CorController();