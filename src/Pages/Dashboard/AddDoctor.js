import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('https://enigmatic-beach-24999.herokuapp.com/service').then(res => res.json()));

    const imageStorageKey = 'e40e1b5d48af5e13e0361c3b72dc332c';

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        // console.log(data);
        // console.log(data.image);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    // console.log(result);
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    // send doctor info to database
                    fetch('https://enigmatic-beach-24999.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log('doctor', inserted);
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add a doctor!')
                            }
                        })
                }
                // console.log('imgbb', result);
            })
    };

    return (
        <div>
            <h2 className='text-2xl text-center mt-10'>Add a new doctor</h2>
            <div className='flex items-center justify-center mt-6'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p className='text-gray-800 pl-1'>Name</p>
                        <input {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })} className='w-72 md:w-80 p-2 border-2 border-gray-300 rounded-lg mb-2 focus:outline-none' type="name" name="name" id="" placeholder='Name' />
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
                        })} className='w-72 md:w-80 p-2 border-2 border-gray-300 rounded-lg mb-2 focus:outline-none' type="email" name="email" id="" placeholder='Email' />
                        <p>
                            {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                        </p>
                    </div>
                    <div className='mb-1'>
                        <p className='text-gray-800 pl-1'>Speciality</p>
                        <select {...register('speciality')} class="select w-full max-w-xs mt-1 input-bordered">
                            {
                                services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <p className='text-gray-800 pl-1'>Photo</p>
                        <input {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        })} className='w-72 md:w-80 p-2 border-2 border-gray-300 rounded-lg mb-2 focus:outline-none' type="file" id="" />
                        <p>
                            {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}
                        </p>
                    </div>

                    <button className='w-72 md:w-80 rounded-lg p-2 text-white uppercase btn btn-active tracking-wider' type='submit'>Add</button>

                </form>
            </div>
        </div>
    );
};

export default AddDoctor;