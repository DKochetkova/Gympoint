import Sequelize from 'sequelize';

import User from '../app/models/User';
import Student from '../app/models/Student';
import Plan from '../app/models/Plan';
import Enrollment from '../app/models/Enrollment';
import Help_order from '../app/models/Help_order';
import Checkin from '../app/models/Checkin';

import databaseConfig from '../config/database';

const models = [User, Student, Plan, Enrollment, Help_order, Checkin];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
