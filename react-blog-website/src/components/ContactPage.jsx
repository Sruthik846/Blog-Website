import React from "react";
import contactImg from "../assets/contact.png";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="mt-10 mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:p-5">
            {/* contact image */}
            <div className="flex justify-center items-center">
                <img src={contactImg} alt="Image" className="w-full " />
                {/* <img src={contactImg} alt="Image" className="w-full " /> */}
            </div>

            {/* contact Form */}
            <div>
                <ContactForm />
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
