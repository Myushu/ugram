exports.map = [
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
    name : 'HttpStatusError',
    type : '',
    code : 003,
    statusCode : 404,
  },
];
