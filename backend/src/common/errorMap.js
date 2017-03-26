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
  // Custom Error
  {
    name : 'passwordMissing',
    message : 'Missing PASSWORD',
    code : 006,
    statusCode : 400
  },
  {
    name : 'emailMissing',
    message : 'Missing EMAIL',
    code : 007,
    statusCode : 400
  },
  {
    name : 'missingProperties',
    message : 'Missing Picture Properties',
    code : 008,
    statusCode : 400
  },
  // Database Error
  {
    name : 'SequelizeDatabaseError',
    code : 101,
    statusCode : 400,
  },
  // Http Error
  {
    name : 'HttpStatusError',
    type : '',
    code : 201,
    statusCode : 404,
  },
  {
    name : 'missingPicture',
    type : '',
    code : 202,
    message : 'Missing Picture',
    statusCode : 400,
  },
  {
    name : 'invalidPictureSize',
    type : '',
    code : 203,
    message : 'The picture is to big',
    statusCode : 413,
  },
  {
    name : 'invalidPictureFormat',
    type : '',
    code : 204,
    message : 'The file is not a valid picture',
    statusCode : 400,
  }
];
