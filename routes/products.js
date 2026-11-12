const express = require('express');
const router = express.Router();

const {
    create,
    getAll,
    getByID,
    update,
    disable
} = require('../controllers/products');

const { protect } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getAll);
router.get('/:id', getByID);

// Protected routes
router.post('/', protect, create);
router.put('/:id', protect, update);
router.put('/:id/disable', protect, disable);

module.exports = router;