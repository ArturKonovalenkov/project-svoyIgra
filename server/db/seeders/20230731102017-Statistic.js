"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Statistics",
      [
        {
          user_id: 1,
          points: 400,
          time: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          points: 1000,
          time: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          points: 2500,
          time: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          points: 2222,
          time: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Statistics", null, {});
  },
};
