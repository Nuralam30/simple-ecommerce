import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {

    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    console.log(watch("example")); 
    return (
        <div className="shipment-info">
            <div className="shipment-user">
                <h2>Biller Information</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Enter Your name' defaultValue={loggedInUser.name} {...register("name", { required: true })} />
                    {errors.name && <span className='required-field'>Name is required</span>}

                    <input placeholder='Enter Your email address' defaultValue={loggedInUser.email} {...register("email", { required: true })} />
                    {errors.email && <span className='required-field'>email is required</span>}

                    <input placeholder='Enter Your address' {...register("address", { required: true })} />
                    {errors.address && <span className='required-field'>address is required</span>}

                    <input placeholder='Enter Your Phone number' {...register("phone", { required: true })} />
                    {errors.phone && <span className='required-field'>phone number is required</span>}
                    <br />
                    <input type="submit" />
                </form>
            </div>
           
        </div>
        
    );
};

export default Shipment;