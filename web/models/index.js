import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = {};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  }
);

const modelsDir = path.resolve('models');

// ❗ важно: используем async IIFE
const loadModels = async () => {
  const files = fs.readdirSync(modelsDir)
    .filter(file => file !== 'index.js' && file.endsWith('.js'));

  for (const file of files) {
    const fullPath = path.join(modelsDir, file);

    // ✅ фикс для Windows + ESM
    const modelImport = await import(pathToFileURL(fullPath).href);

    const model = modelImport.default(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }

  // связи
  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
};

await loadModels();

export default db;