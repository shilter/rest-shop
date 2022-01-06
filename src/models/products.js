const products = (sequelize, DataTypes) => {
    const Products = sequelize.define('products', {
        name: {
            type: DataTypes.STRING,
            unique:false,
            allowNull:false,
            validate: {
                notEmpty:true,
            },
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull:true,
        }
    });

    return Products;
};


export default products;