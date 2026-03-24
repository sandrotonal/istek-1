---
title: "Building RESTful APIs with Node.js and Express"
date: "2023-10-20"
author: "Ömer Özbay"
excerpt: "A guide to creating scalable and secure RESTful APIs using Node.js and Express."
coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80"
tags: ["Node.js", "Express", "API", "Backend"]
category: "BACKEND"
---

# Building RESTful APIs with Node.js and Express

Node.js forms the foundation of modern web applications by running JavaScript on the server side. Express is a minimalist web framework.

## Basic Setup

```javascript
const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Route Structure

### CRUD Operations

```javascript
// CREATE
app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// UPDATE
app.put('/api/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

// DELETE
app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
});
```

## Middleware Usage

```javascript
// Custom middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
};

app.use(logger);

// Error handling
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
};

app.use(errorHandler);
```

## Security Measures

1. **Helmet**: HTTP header security
2. **CORS**: Cross-origin resource sharing
3. **Rate Limiting**: DDoS protection
4. **JWT**: Authentication
5. **Input Validation**: Data validation

## Database Integration

### MongoDB (Mongoose)

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
```

## Conclusion

Node.js and Express offer a powerful and flexible combination for modern backend development.
