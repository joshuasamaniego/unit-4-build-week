const db = require('../data/db-config');

function getAll() {
    return db('trucks');
  }
  
function getBy(filter) {
    return db('trucks').where(filter).first();
}
  
function getById(truck_id) {
    return db('trucks').where('truck_id', truck_id).first();
}
  
async function addTruck(truck) { 
    const [id] = await db('trucks').returning('truck_id').insert(truck);
    return getById(id);
}   

async function updateTruck(id, changes) {
    const [updatedId] = await db('trucks').returning('truck_id').where('truck_id', id).update(changes);
    return getById(updatedId);
}

async function removeTruck(id) {
    const deleted = await db('trucks').where('truck_id', id).del();
    return(`Truck with id: ${id} was deleted`, deleted);
  }

module.exports = {
    getAll,
    getBy,
    getById,
    addTruck,
    updateTruck,
    removeTruck
}

