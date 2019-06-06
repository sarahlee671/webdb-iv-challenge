const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('tracks');
}

function findById(id) {
    return db('tracks')
        .where({id})
        .first();
}

function add(track) {
    return db('tracks')
        .insert(track, 'id')
        .then(([id]) => {
            return findById(id);
        });
}