import { body, validationResult } from 'express-validator';

const validateUserRegistration = [
    body('username').isString().notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const validateUserLogin = [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').exists().withMessage('Password is required'),
];

const validatePasswordCreation = [
    body('title').isString().notEmpty().withMessage('Title is required'),
    body('password').isString().notEmpty().withMessage('Password is required'),
];

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export {
    validateUserRegistration,
    validateUserLogin,
    validatePasswordCreation,
    validateRequest,
};