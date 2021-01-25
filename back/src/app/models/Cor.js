import Sequelize, { Model } from 'sequelize';


class Cor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  
}
export default Cor;
