import Sequelize from 'sequelize';


import Cor from "../app/models/Cor"
import Cores from "../app/models/Cores"

import databaseConfig from '../config/database';

const models = [Cor, Cores];

class Database {
  constructor() {
    this.init(); 
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
  }
}

export default new Database();
