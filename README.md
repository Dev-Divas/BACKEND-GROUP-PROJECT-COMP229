# BACKEND-GROUP-PROJECT-COMP229
Backend repository for the group project of COMP229 – Web Application Development 2026

## Database Setup

### MongoDB Atlas and Mongoose

The project uses MongoDB Atlas as its database and Mongoose for database connection and data modeling.

### Database Structure

The database work includes the following files:

- `config/db.js` - Connects the application to MongoDB Atlas.
- `models/product.js` - Defines the Product schema and model.
- `models/productHistory.js` - Defines the ProductHistory schema and model.

### Product Model

The Product model includes:

- Title
- Brand
- Category
- Price
- Condition
- Description
- Image
- Seller
- Status

### Product History Model

The ProductHistory model records product actions, including:

- Created
- Updated
- Disabled
- Sold

### Dependencies

- Mongoose
- dotenv

### Environment Configuration

The MongoDB connection string is stored in a `.env` file using the `ATLASDB` variable.

The `.env` file should not be uploaded to GitHub.
