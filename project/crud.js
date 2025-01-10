const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();

// initialization

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

// port

const port=3000;

// database connection 
mongoose.connect('mongodb://localhost:27017/garage')
.then(()=>{
    console.log('Database connected')
})

.catch(()=>{
    console.log('Database connection failed')
})

// create schema and model
const {Schema}=mongoose;

const newSchema=new Schema({
    name:String,
    address:String,
    phone:String,
    date:String,
    service:String,
})

// define model

const User=mongoose.model('orders',newSchema);

// post method for order send on database

app.post('/order',(req,res)=>{

    const {name,address,phone,service,date}=req.body;

    const newUser= new User({name,address,phone,service,date})
    newUser.save()
    .then(()=>{
        return res.status(200).json({message:" "})
    })
    .catch((error)=>{
        console.log(error)
    })
})
// retrieve order records
app.get('/getOrder',(req,res)=>{
    User.find()
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        console.log(err);
    })
})
// delete

app.delete('/deleteOrder/:id',(req,res)=>{
const userId=req.params.id;
User.findByIdAndDelete(userId)
.then(()=>{
    res.status(200).json({message:''})
})
.catch((err)=>{
    console.log(err)
})
})

// get user by user

app.get('/order/:id',(req,res)=>{
    const userId=req.params.id;

    User.findById(userId)
    .then((user)=>{
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found!' });
        }
    })
    .catch((err) => {
        console.error('Error fetching user data:', err);
        res.status(500).json({ message: 'Error fetching user data' });
    });
})

// PUT method for updating a user by ID
app.put('/orderUpdate/:id', (req, res) => {
    const userId = req.params.id;
    const { name, address,phone,service,date } = req.body;


    User.findByIdAndUpdate(userId, {  name, address,phone,service,date  }, { new: true })
        .then((updatedOrder) => {
            if (updatedOrder) {  
                res.status(200).json({ message: '', user: updatedOrder });
            } else {
                res.status(404).json({ message: '' });
            }
        })
        .catch((err) => {
            console.error('Error updating user:', err);
            res.status(500).json({ message: 'Error updating user' });
        });
});



// starting server

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})