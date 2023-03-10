import React ,{useState}from 'react';
import {useNavigate} from 'react-router-dom';
 
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
const AuthForm = ({buttonName}) => {
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [username,setUserName] = useState('');
const navigate = useNavigate();

 
const handleSubmit = (event) =>{
    event.preventDefault();
    // console.log("Form-Submitted")
    const auth = getAuth();
    console.log(auth)

if(buttonName === 'Login'){
 signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials) =>{
        console.log(userCredentials.user);
        userCredentials.user.displayName = username;

        navigate('/')
    }).catch((err) =>{
        console.log(err);
    })


}else{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredentials) =>{
        console.log(userCredentials.user);
        userCredentials.user.displayName = username;

        navigate('/')
    }).catch((err) =>{
        console.log(err);
    })

}
 
 
 
}
  return (

      <form onSubmit={handleSubmit}>
        {buttonName === "Sign Up" && (
           <div className="form-group">
           <label>Username</label>
           <input  type="text" className='form-input' placeholder='Enter your username'
           required
     value={username} onChange={(event) => setUserName(event.target.value)}/>
       </div>
        )}
      
                <div className="form-group">
                    <label>Email</label>
                    <input  type="email" className='form-input' placeholder='Enter your e-mail' required
                    autoComplete='off' value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="form-group">
                <label>Password</label>
                    <input  type="password" className='form-input' placeholder='Enter your password' required
                    value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="form-group">
                
                    <input  type="submit" className='cart-button'   value={buttonName}/>
                </div>
            </form>
     
  )
}

export default  AuthForm;
