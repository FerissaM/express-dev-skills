const express = require('express');
const router = express.Router();
const skills = require('../models/skills');

// displays a list of all skills
router.get('/', (req, res) => {
  res.render('skills/index', { skills: skills });
});

// displays a form for adding a new skill
router.get('/new', (req, res) => {
  res.render('skills/new');
});

// handles form submission to add a new skill
router.post('/', (req, res) => {
  const { name, proficiency } = req.body;

  const newSkill = {
    id: skills.length + 1, // Generate a new ID (assuming IDs are sequential)
    name: name,
    proficiency: proficiency
  };
  skills.push(newSkill);
  res.redirect('/skills');
});

// displays details of a specific skill
router.get('/:id', (req, res) => {
  const skillId = parseInt(req.params.id);
  const skill = skills.find(skill => skill.id === skillId);
  if (skill) {
    res.render('skills/show', { skill: skill });
  } else {
    res.status(404).send('Skill not found');
  }
});

module.exports = router;
