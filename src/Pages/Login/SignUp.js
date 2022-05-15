import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user || gUser);

    const navigate = useNavigate();

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    let signInError;
    if (error || gError || updateError) {
        signInError = <p className='text-red-500 font-medium text-center'>{error?.message || gError?.message || updateError?.message}</p>
    }
    if (token) {
        // console.log(user || gUser);
        navigate('/appointment');
    }
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        toast('Verification email sent');
        // navigate('/appointment');
    };
    return (
        <div className='w-[350px] md:w-[400px] mx-auto mt-20 shadow-md border p-5 rounded-lg '>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl mb-10 text-gray-800 font-medium'>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p className='text-gray-800 pl-1'>Name</p>
                        <input {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })} className='w-72 md:w-80 p-2 border-2 border-gray-300 rounded-lg mb-2 focus:outline-none' type="name" name="name" id="" />
                        <p>
                            {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}
                        </p>
                    </div>
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
                    <div className='mb-4'>
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


                    {signInError}
                    <button className='w-72 md:w-80 rounded-lg p-2 text-white uppercase btn btn-active tracking-wider' type='submit'>Sign Up</button>
                    <ToastContainer></ToastContainer>
                    <div className='flex justify-center space-x-2 mt-3 text-sm'>
                        <p className='text-gray-800'>Already have an account?</p>
                        <div className='text-secondary font-medium'>
                            <Link to='/signup'>Please Login</Link>
                        </div>
                    </div>
                    <div className="divider">OR</div>
                </form>

                <button onClick={() => signInWithGoogle()} className='uppercase w-72 md:w-80  p-2 rounded-lg btn btn-outline tracking-wider'>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;