let users = [
    {"id": 1, "name": "John Doe", "email": "john@example.com"},
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
];


export const getUsers = (req, res) => {
    return res.status(200).json(users);
}

export const getUserById = (req, res)=> {
    const userId = Number.parseInt(req.params.id, 10);
    if (Number.isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user id' });
    }

    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found', code: 'USER_NOT_FOUND' });
    }

    return res.status(200).json(user);
};

export const searchUsers = (req, res)=>{
    const { q, limit } = req.query;
    let filteredUsers = users;

    if (typeof q === 'string' && q.trim()) {
        const needle = q.toLowerCase();
        filteredUsers = users.filter(user => user.name.toLowerCase().includes(needle));
    }

    if (typeof limit !== 'undefined') {
        const n = Number.parseInt(limit, 10);
        if (!Number.isNaN(n) && n > 0) {
            const capped = Math.min(n, 100);
            filteredUsers = filteredUsers.slice(0, capped);
        }
    }

    return res.status(200).json(filteredUsers);
};

export const createUser = (req, res)=>{
    const { email, name } = req.body || {};

    if (typeof name !== 'string' || typeof email !== 'string') {
        return res.status(400).json({ error: 'Invalid payload: name and email must be strings' });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        return res.status(400).json({ error: 'Invalid name or email format' });
    }

    const newUser = {
        id: users.length + 1,
        name: trimmedName,
        email: trimmedEmail
    };

    users.push(newUser);
    return res.status(201).json(newUser);
};