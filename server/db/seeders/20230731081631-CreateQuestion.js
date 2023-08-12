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
    await queryInterface.bulkInsert("Questions", [
      {
        quest_body: "Как называется самая длинная горная цепь в Южной Америке?",
        right_answer: "Анды",
        theme_id: 1,
        points: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body:
          "В каком городе находится знаменитая статуя Эдварда Эриксена «Русалочка»?",
        right_answer: "Копенгаген",
        theme_id: 1,
        points: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Какой самый длинный подвесной мост в мире?",
        right_answer: "Мост Акаси Кайкё",
        theme_id: 1,
        points: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "В какой стране находится самый высокий водопад в Европе?",
        right_answer: "Норвегия",
        theme_id: 1,
        points: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Какой город в мире самый большой по плотности населения?",
        right_answer: "Манила",
        theme_id: 1,
        points: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body:
          "Из какого портового города Англии отправился «Титаник» в 1912 году?",
        right_answer: "Саутгемптон",
        theme_id: 2,
        points: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Какой знак зодиака проходит с 23 августа по 22 сентября?",
        right_answer: "Дева",
        theme_id: 2,
        points: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body:
          "Каким профессиональным видом спорта занимался грабитель банков Джон Диллинджер?",
        right_answer: "Бейсбол",
        theme_id: 2,
        points: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body:
          "Кто был вьетнамским революционным лидером, который привел Вьетнам к независимости от Франции, а затем от США?",
        right_answer: "Хо Ши Мин",
        theme_id: 2,
        points: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Какой химический символ у золота?",
        right_answer: "Au",
        theme_id: 2,
        points: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Какое число на черном шаре в пуле?",
        right_answer: "8",
        theme_id: 3,
        points: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "В каком городе проходили Олимпийские игры 2000 года?",
        right_answer: "Сидней",
        theme_id: 3,
        points: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body:
          "Сколько людей находится на льду во время хоккейного матча, включая игроков и судей?",
        right_answer: "16",
        theme_id: 3,
        points: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Сколько игроков в команде по водному поло?",
        right_answer: "7",
        theme_id: 3,
        points: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Какую спортивную игру Джеймс Нейсмит изобрел в 1891 году?",
        right_answer: "Баскетбол",
        theme_id: 3,
        points: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Какое животное самое быстрое?",
        right_answer: "Гепард",
        theme_id: 4,
        points: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Сколько воды может выпить верблюд после долгой жажды?",
        right_answer: "60 литров",
        theme_id: 4,
        points: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Какое животное намеренно глотает камни?",
        right_answer: "Крокодил",
        theme_id: 4,
        points: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body:
          "Сколько процентов жирности содержится в молоке самки кита?",
        right_answer: "50%",
        theme_id: 4,
        points: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Сколько метров отделяет голову взрослого жирафа от земли?",
        right_answer: "4",
        theme_id: 4,
        points: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body:
          "Какой алкогольный напиток является одной из статей экспорта Великобритании?",
        right_answer: "Виски",
        theme_id: 5,
        points: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body:
          "Этот напиток в переводе с англ.языка означает «Петушиный хвост»?",
        right_answer: "Коктейль",
        theme_id: 5,
        points: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Подливка для джина?",
        right_answer: "Тоник",
        theme_id: 5,
        points: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Каким вином рыцари поили своих коней?",
        right_answer: "Херес",
        theme_id: 5,
        points: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quest_body: "Какой напиток французская актриса Марина Влади называла «омерзительным пойлом»?",
        right_answer: "Портвейн",
        theme_id: 5,
        points: 1000,
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
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
