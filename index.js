const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const { getAllUsers, UserDetails, getParticularUser, UpdateUser, deleteUser } = require('./controller/userController')

async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/proper_crud', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}


connectDB();

//routes
app.get('/api/users', getAllUsers);
app.post('/api/user', UserDetails);
app.get('/user/:id', getParticularUser);
app.put('/user/:id', UpdateUser);
app.delete('/user/:id', deleteUser);


app.listen(9090, () => {
    console.log('App Running On Port 9090');
});