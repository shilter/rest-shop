import 'dotenv/config'; 
import Sequelize from 'sequelize';
import products from './products.js';
import productsCategory from './productsCategory.js';

const sequelized = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

sequelized.authenticate()
  .then(() => {
    console.log('connected to DB');
  });
  
const model = {
  products: products(sequelized, Sequelize.DataTypes),
  productsCategory: productsCategory(sequelized, Sequelize.DataTypes),
};

Object.keys(model).forEach(key => {
  if('associate' in model[key]) {
    model[key].associate(model);
  }
});

export { sequelized };
export default model;