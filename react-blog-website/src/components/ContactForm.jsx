import React, { useState, useEffect } from "react";

const ContactForm = () => {;
    const intialvalues = {fullname : "",email:"",subject:"",message:""};
    const [formValues, setFormValues] = useState(intialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const hanleChange = (e) => {
        const {name,value} = e.target;
        setFormValues({...formValues,[name]:value})
        setFormErrors(validate(formValues));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const  regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fullname){
            errors.fullname = "fullname is required";
        } else if (values.fullname.length < 3){
            errors.fullname = "name should be more than 3 characters";
        }
        if (!values.email){
            errors.email = "Email is required";
        } else if ( !regex.test(values.email)){
            errors.email = "This is not a valid email format!"
        }
        if (!values.subject){
            errors.subject = "Subject is required";
        }
        if (!values.message){
            errors.message = "Message is required";
        }
        console.log(errors);
        return errors;

    }
  return (
    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">Full Name</label>
            <input
            className="appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-1"
            id="fullname"
            type="text"
            name="fullname"
            value={formValues.fullname}
            onChange={hanleChange}
            placeholder="Full Name"/>
        <p className="text-red-500 text-sm">{formErrors.fullname}</p>
        </div>

        {/* email */}
        <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2" >Email Address</label>
            <input
            className="appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-1"
            id="email"
            type="email"
            name='email'
            value={formValues.email}
            onChange={hanleChange}
            placeholder="example.domain.com"/>
        <p className="text-red-500 text-sm">{formErrors.email}</p>
        </div>

        {/* subject */}
        <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">Subject</label>
            <input
            className="appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-1"
            id="subject"
            type="text"
            name="subject"
            value={formValues.subject}
            onChange={hanleChange}
            placeholder="Enter your subject" />
        <p className="text-red-500 text-sm">{formErrors.subject}</p>
        </div>

        {/* message */}
        <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2" >Subject</label>
            <textarea
            id="message"
            rows="4"
            name='message'
            value={formValues.message}
            onChange={hanleChange}
            className="block p-4 w-full text-gray-700 rounded border appearance-none leading-tight focus:outline-none focus:shadow-outline mb-1" 
            placeholder="Write your message here..." ></textarea>
        <p className="text-red-500 text-sm">{formErrors.message}</p>
        </div>

        <div className="flex items-center justify-between">
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Submit
            </button>
        </div>
    </form>
  );
};

export default ContactForm;