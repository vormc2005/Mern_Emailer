import React, { useState } from 'react'
import axios from 'axios'

const Form =()=> {
  //state

  const [sentEmail, setSentEmail] = useState({
    name: '',
    lastname:'',
    email: "",
    message: '',
    sent: false
  })

  const {name, lastname, email, message, sent}= sentEmail  

   
    // handle inputs 

    const handleChange = e => 
      setSentEmail({...sentEmail, [e.target.name]:e.target.value})
    
 
    
    // end of handle inputs   
    
   const formSubmit=(e)=>{
      e.preventDefault();    
     
      
     axios.post('http://localhost:3001/api/forma', sentEmail)
      .then((res)=>{
       
        setSentEmail({...sentEmail, sent:true})
         resetForm() 
     
       

      })
      .catch(()=>{
        console.log('message not send');
        
      })      
     
}

         
    // for reseting the form data
   const resetForm=()=>{
      setSentEmail({
        name:'',
        lastname:'',
        message:'',
        email:'',
        sent: true       
      
      }) 
   
     
    }
         
      

    
        return (
            <div className="container">
            <form onSubmit={formSubmit}>
            
            <div className="singleItem">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" className="name" value={name} onChange={handleChange} placeholder="your name..." />
            </div>
      
            <div className="singleItem">
              <label htmlFor="lastname">Lastname</label>
              <input 
                  type="text" 
                  name="lastname" 
                  className="lastname" 
                  value={lastname} 
                  onChange={handleChange} 
                  placeholder="your lastname..." />
            </div>
      
            <div className="singleItem">
              <label htmlFor="email">Email</label>
              <input 
                  type="email" 
                  name="email" 
                  className="email" 
                  value={email} 
                  onChange={handleChange} 
                  placeholder="your email..." required />
            </div>
      
            <div className="textArea singleItem">
            <label htmlFor="message">Message</label>
              <textarea 
                  name="message" 
                  value={message} 
                  id="" cols="30" 
                  rows="5" 
                  placeholder="your message..." 
                  onChange={handleChange}></textarea>
            </div>
      
             
             <div className={sent?'msg msgAppear':'msg'}>Message has been sent</div>
            <div className="btn">
            <button type="submit">Submit</button>
            </div>
      
      
           </form>
          </div>
        )
    
}


export default Form;
