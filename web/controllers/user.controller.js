import db from '../models/index.js';

const { User } = db;

// CREATE
export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (err) {
    next(err);
  }
};

// GET ONE
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.update({ name, email });

    res.json(user);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();

    res.json({ message: 'User deleted' });
  } catch (err) {
    next(err);
  }
};