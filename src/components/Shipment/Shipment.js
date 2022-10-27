import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    console.log(watch("example")); 
    return (
        <div className="shipment-info">
            <form className='shipment-user' onSubmit={handleSubmit(onSubmit)}>

            <input {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>}

            <input {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}

            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
            </form>
        </div>
        
    );
};

export default Shipment;