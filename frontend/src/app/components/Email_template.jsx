
import * as React from 'react';



const EmailTemplate=({
  email,message,name
}) => (
    <div className='flex-wrap p-4 m-3'>
    <p >Name :{name}</p>
    <p>This message is from Contact Me NeuroCure :</p>
    <p>
    Message : {message}
    </p>
    <p className='text-2xl text-green-400'>Client Email : {email} </p>
    
  </div>
);

export default EmailTemplate