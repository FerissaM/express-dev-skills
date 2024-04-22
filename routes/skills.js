const express = require('express');
const router = express.Router();
const skills = require('../models/skills');

// displays a list of all skills
router.get('/', (req, res) => {
  res.render('skills/index', { skills: skills });
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
