// File: backend/routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.post('/', protect, admin, eventController.createEvent);
router.put('/:id', protect, admin, eventController.updateEvent);
router.delete('/:id', protect, admin, eventController.deleteEvent);

module.exports = router;
