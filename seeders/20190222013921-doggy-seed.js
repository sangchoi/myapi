'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('dogs', [{
     breed: "Akita",
     size: "medium",
     age: 5,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     breed: "Australian Shepherd",
     size: "medium",
     age: 3,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     breed: "Pug",
     size: "small",
     age: 6,
     createdAt: new Date(),
     updatedAt: new Date()
   }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
