import Password from '../models/Password';

// Create a new password
export const createPassword = async (req, res) => {
    try {
        const { title, password } = req.body;
        const newPassword = new Password({ title, password });
        await newPassword.save();
        res.status(201).json(newPassword);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve all passwords
export const getAllPasswords = async (req, res) => {
    try {
        const passwords = await Password.find();
        res.status(200).json(passwords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a password by ID
export const deletePassword = async (req, res) => {
    try {
        const { id } = req.params;
        await Password.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};