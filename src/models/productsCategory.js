const productsCategory = (sequelize, DataTypes) => {
    const productCategory = sequelize.define('productCategory', {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    });
    return productCategory
};

export default productsCategory;