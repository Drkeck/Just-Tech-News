const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: DataTypes.TEXT('medium')
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                references:'user',
                key:'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: { 
                model:'post',
                key:'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;