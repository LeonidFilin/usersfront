'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('Users', 'password', {
    type: Sequelize.STRING,
    allowNull: false
  });
}

export async function down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'password');
}
