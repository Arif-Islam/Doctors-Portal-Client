import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetPasswordError] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { register, getValues, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user || gUser);

    useEffect(() => {
        if (token) {
            // console.log(user || gUser);
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }
    
    const resetPassword = async () => {
        const email = getValues("email");
        console.log('user email', email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address!');
        }
    }
    let signInError;
    if (error || gError || resetPasswordError) {
        signInError = <p className='text-red-500 font-medium text-center'>{error?.message || gError?.message || resetPasswordError?.message}</p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
        // navigate('/appointment');
    };
    return (
        <div className='w-[350px] md:w-[400px] mx-auto mt-20 shadow-md border p-5 rounded-lg '>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl mb-10 text-gray-800 font-medium'>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p className='text-gray-800 pl-1'>Email</p>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a Valid Email'
                            }
                        })} className='w-72 md:w-80 p-2 border-2 border-gray-300 rounded-lg mb-2 focus:outline-none' type="email" name="email" id="" />
                        <p>
                            {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                        </p>
                    </div>
                    <div>
                        <p className='text-gray-800 pl-1'>Password</p>
                        <input {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be 6 characters or longer.'
                            }
                        })} className='w-72 md:w-80 p-2 border-2 border-gray-300 rounded-lg focus:outline-none' type="password" name="password" id="" />
                        <p>
                            {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                        </p>
                    </div>
                    <button onClick={resetPassword} className='text-sm text-red-500 mb-4 pl-1'>
                        Forgot Password?
                    </button>
                    <ToastContainer></ToastContainer>

                    {signInError}
                    <button className='w-72 md:w-80 rounded-lg p-2 text-white uppercase btn btn-active tracking-wider' type='submit'>Login</button>

                    <div className='flex justify-center space-x-2 mt-3 text-sm'>
                        <p className='text-gray-800'>New to Doctors Portal?</p>
                        <div className='text-secondary font-medium'>
                            <Link to='/signup'>Create an account</Link>
                        </div>
                    </div>
                    <div className="divider">OR</div>
                </form>

                <button onClick={() => signInWithGoogle()} className='uppercase w-72 md:w-80  p-2 rounded-lg btn btn-outline tracking-wider'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;