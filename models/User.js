const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create user model
class User extends Model {}

//define table of columns and configuration
User.init(
    {
        // define id column
        id: {
            // use the special Sequelize dataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of sql's `not null` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // define username coloumn.
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define email coloumn.
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            // if allownull is set to false, we can run our daata through validators befre creating the table data
            validate: {
                isEmail: true
            }
        },
        // define password coloumn
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // must be at leasst 4 characters long.
                len: [4]
            }
        }
    },
    {
        //TABLE OF CONFIGUTATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automaticallly create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stary lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;