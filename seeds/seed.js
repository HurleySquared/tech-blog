const sequelize = require('../config/connection');
const { Blog } = require('../models');
const blogData = require('./blog.json');

const seedData = async () => {
  for (let blog of blogData) {
    await postMessage.create({
      ...blog
    });
  }
  process.exit(0);
};

seedData;