module.exports = (sequelize, type) => {
  return sequelize.define('Folder', {
      name: {
          type: type.STRING(50),
          allowNull: false,
          validate: {
              min: {
                  args: 2,
              },
              max: {
                  args: 50,
              }
          }
      }
  })
};