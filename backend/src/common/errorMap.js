exports.map = [
  // Sequelize Error
  {
    name : 'SequelizeValidationError',
    type : 'notNull Violation',
    code : 001,
    statusCode : 400,
  },
  {
    name : 'SequelizeUniqueConstraintError',
    type : 'unique violation',
    code : 002,
    statusCode : 400,
  },
  {
    name : 'SequelizeForeignKeyConstraintError',
    message : 'Invalid foreign key',
    code : 004,
    statusCode : 400,
  },
  {
    name : 'SequelizeValidationError',
    type : 'Validation error',
    code : 005,
    statusCode : 400,
  },
    // Http Error
  {
    name : 'HttpStatusError',
    type : '',
    code : 101,
    statusCode : 404,
  },
];
