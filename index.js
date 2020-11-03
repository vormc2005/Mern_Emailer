const express =  require('express')
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const cors =require('cors')

//App
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

app.get('/', ()=>{
    resizeBy.send("Welcome to my form")
})

app.post('/api/forma', (req, res)=>{
    let data = req.body
    console.log(data)
    let smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        port:465,
        auth: {
            user:"carcheckers2020@gmail.com",
            pass: "Carcheckers#123"
        }
    });

    let mailOptions ={
        from: data.email,
        to: "carcheckers2020@gmail.com",
        subject: `Message from  ${data.name}`,
        html: `
        <h3>Information</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Lastname: ${data.lastname}</li>
        <li>email: ${data.email}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>
        `
    }

    smtpTransport.sendMail(mailOptions, (error, response)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send('Success')
        }
    })

    smtpTransport.close();

})

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`Server is running on posr ${PORT}`)
})

