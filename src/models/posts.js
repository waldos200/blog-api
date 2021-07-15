// const db = require('../data/db');
const Model = require('./Model');
const Populate =require('knex-populate');
const db = require('../data/db');
class Post extends Model{
    constructor(){
        super('posts')
    }

    populateUser(){
        /* return this.db.innerJoin('users', 'posts.user_id', '=', 'users.id').select('posts.*','users.first_name', 'users.last_name'); */
        return Populate(db, 'posts')
            .find()
            .populate('users', 'user_id', 'user')// .populate(tabla de referenca, foreign_key, alias)
            .exec()
    }

    searchByCategory(category){
        return this.db.where( {category} );
    }

    searchInBody(search){
        return this.db.where('body', 'like', `%${search}%`);
    }
}

module.exports = Post;

/* module.exports = {
    findAll: () => {
    return db('posts');
    },
    
    create: (data) => {
        return db('posts').insert(data,['id', 'title', 'created_at']);
    },
    
    findOne : (id) => {
        return db('posts'). where({id});
    },

    update: (id, data) => {
        return db('posts').where({id}).update(data, ['id', 'title', 'body', 'user_id', 'category']);
    },

    delete: (id) => {
        return db('posts').where({id}).del();
    }
}; */