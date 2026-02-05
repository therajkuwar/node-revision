import express from 'express'

const router = express.Router();


let users = [
    {"id": 1, "name": "John Doe", "email": "john@example.com"},
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
];

router.get('/', (req, res)=> {
    res.status(200).json(users);
});

router.get('/:id', (req, res)=>{
    const userId = Number.parseInt(req.params.id);

    const user = users.find(u=> u.id===userId);
    if(!user) res.status(404).json({error: "user not found"});

    res.status(200).json(user);
})


router.post('/', (req, res)=>{
    const{email, name} = req.body;

    const newUser = {
        id: users.length+1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

export default router;