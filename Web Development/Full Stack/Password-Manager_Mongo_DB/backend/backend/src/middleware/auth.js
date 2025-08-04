import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'You are not logged in! Please log in to get access.' });
    }

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        const currentUser = await User.findById(decoded.id);

        if (!currentUser) {
            return res.status(401).json({ message: 'The user belonging to this token does no longer exist.' });
        }

        req.user = currentUser;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token. Please log in again.' });
    }
};