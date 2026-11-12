const mongoose = require('mongoose');

const ProductHistorySchema = new mongoose.Schema(
    {
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        changedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        changes: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },
        action: {
            type: String,
            required: true,
            enum: ['Created', 'Updated', 'Disabled', 'Sold']
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('ProductHistory', ProductHistorySchema);