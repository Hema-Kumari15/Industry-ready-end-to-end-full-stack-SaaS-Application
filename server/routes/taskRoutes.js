const router = require('express').Router();
const auth = require('../middleware/auth');
const { createTask, getTasks } = require('../controllers/taskController');

router.post('/', auth, createTask);
router.get('/', auth, getTasks);

module.exports = router;
