"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Themes", [
      {
        title: "География",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Общие знания",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Спорт",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Царство животных",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Бухлишко",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Themes", null, {});
  },
};
