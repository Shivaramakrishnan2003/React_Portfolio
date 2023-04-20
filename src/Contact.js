import React, {useState} from 'react'
import "./Contactstyle.css"

function Contact() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
  const [message, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !mail || !message){
      // setErrorMsg("Please fill in all required fields")
      throw new Error("Error!!!")
    }
    else{
      alert('Your message has been recieved... Thank you!!!')
      console.log(`Name: ${name}, Email: ${mail}, Message:${message}`);
    }
  };
  return (
    <div className='login' style={{marginTop:'10%'}}>
      <center>
        <h1 style={{paddingBottom:"4%"}}>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className='formdiv'>
          <label className='credlabel'>Name : </label>
          <input
            className='logincred'
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            />
        </div>
        <div className='formdiv'>
          <label className='credlabel'>Email : </label>
          <input
            className='logincred'
            type="email"
            id="mail"
            name="mail"
            value={mail}
            onChange={handleMailChange}
            />
        </div>
        <div className='formdiv'>
          <label className='credlabel'>Message : </label>
          <input
            className='logincred'
            type="text"
            id="msg"
            name="msg"
            value={message}
            onChange={handleMsgChange}
            />
        </div>
        <button className='but' type="submit">Submit</button>
      </form>
      </center>
    </div>
  )
}

export default Contact