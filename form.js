import React,{useState} from 'react'
import "./form.css";
export default function Form() {
  const [user, setUser ]=useState({
    name:"",
    email:"",
    phone:"",
    address:"",
    message:"",
    gender:""
})
let name,value;
const getData=(event)=>{
   name=event.target.name;
   value=event.target.value;
   setUser({...user, [name]:value},()=>{

   })
}
const dataStore=()=>{}

  return (
    < section className='signup'>

      
      <div className='text' >
      <strong><h1>Sign up</h1></strong>

        <div>
            <label>Name</label><br></br>
            <input type="text" name='name' placeholder="Enter your name"  value={user.name}  onChange={getData}/> 
        </div>
        <div>
            <label>Email</label><br></br>
            <input type="text" name='name' placeholder="Enter your Email"  value={user.email} onChange={getData}/> 
        </div>
        <div>
            <label>Phone</label><br></br>
            <input type="number" name='name' placeholder="Enter your Phone number"  value={user.phone} onChange={getData}/> 
        </div>
        <div>
            <label>Address</label><br></br>
            <input type="text" name='name' placeholder="Enter your Address"  value={user.address} onChange={getData}/> 
        </div>
        
      
        <div>
            <label>Message</label><br></br>
            <input type="text" name='name' placeholder="Enter your Message"  value={user.message} onChange={getData}/> 
        </div>
        <div><br></br>
            <button className="button-form"type="submit" onClick={dataStore}>Submit</button >
        </div>
        </div>
        <div className='img-1'>
        <img src='b.png' alt='image'/>
        <h2>News Paper</h2>
      </div>
     
    </section>
  )
}


   