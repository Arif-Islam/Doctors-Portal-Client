import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    // if (!user.emailVerified) {
    //     return <>
    //         <p className='text-center text-red-500 text-2xl mb-2 mt-16'>Your email is not verified!</p>
    //         <p className='text-center text-primary text-2xl mb-6'>Please verify your email</p>
    //         <div className='flex justify-center items-center'>
    //             <button className='bg-secondary rounded text-center p-2 font-medium text-stone-100'
    //                 onClick={async () => {
    //                     await sendEmailVerification();
    //                     toast('Verification email sent!');
    //                 }}
    //             >
    //                 Send Verification Email
    //             </button>
    //         </div>
    //         <ToastContainer></ToastContainer>
    //     </>
    // }
    return children;
};

export default RequireAuth;