const skills = [
  {skill: 'HTML', level: '3', description: 'Intermediate'},
  {skill: 'CSS', level: '3', description: 'Intermediate'},
  {skill: 'Javascript', level: '1', description: 'Beginner'},
];

function update(id, skill) {
  skills[id] = skill;
}

function deleteOne(id) {
  skills.splice(id, 1);
}

function create(skill) {
  skills.push(skill);
}

function getOne(id){
  return skills[id];
}

function getAll() {
  return skills;
}


module.exports = {
  update,
  deleteOne,
  create,
  getOne,
  getAll
};
