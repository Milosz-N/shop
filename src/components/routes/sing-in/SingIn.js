// import {auth ,signInWithGooglePopup, createUserDocumentFromAuth, signInWithRedirectPopup} from "../../firebase/firebaase";
import {getRedirectResult} from "firebase/auth"
import { useEffect, useState } from "react";
import FormInput from "../../form-input/FormInput";
// import {singInWithEmail} from "../../firebase/firebaase"
import { singInWithGoogle, createUserDocument } from "../../firebase/firebase";
const SignIn = () => {
  const [form, setForm] = useState( {
    email:'',
    password: ''
  });
  const logGoogleUser = async()=>{
    const {user} = await singInWithGoogle();
    // console.log(response);
    createUserDocument(user);
    
  }
    // const logGoogleUser = async () => {
    //   const { user } = await signInWithGooglePopup();
    //   const userDocRef = await createUserDocumentFromAuth(user);
    // };
    // const handleSubmit = async (event) => {
    //   event.preventDefault();
   
    //   try{
    //     // console.log(response)
    //     const response = await singInWithEmail(form.email, form.password);
    //     console.log(response)
    //   }
    //   catch(error){
      
    //   }
    //  }
    //  const handleChange = (event) =>{
    //   const {name, value} = event.target;
    //   setForm({...form, [name]: value})
    //  }
    return(
        <div>
                 <h2>Alredy have a password?</h2>

         <h2>Sing up</h2>
   <button onClick={logGoogleUser}>log in with Google</button>
   {/* <button onClick={signInWithRedirectPopup}>log in with redirect</button> */}
        {/* <Authentication/> */}
       
        </div>
  
    )
  }

  export default SignIn;