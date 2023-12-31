import React from 'react'
import { signInWithPopup, getAuth} from "firebase/auth"
import { GoogleAuthProvider } from 'firebase/auth'
import { app } from '../Firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../Redux/user/slice'
import { useNavigate } from 'react-router-dom'

const Oath = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick= async()=> {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app);

            
            const result = await signInWithPopup(auth, provider)
            const res = await fetch('/app/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })
            const data = await res.json()
            dispatch(signInSuccess(data))
            navigate('/')
        } catch (error) {
            console.log("could not login with google", error)
            
        }
    }
  return (
   <button type='button' onClick={handleGoogleClick} className='bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>Continue with google</button>
  )
}

export default Oath
