import React from 'react';
import contact from './contact.jpg';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full ">
      <div className="flex flex-col md:flex-row w-full md:w-4/5 h-auto bg-white shadow-lg">
        {/* Image section */}
        <div
          className="w-full md:w-2/5 h-64 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${contact})` }}
        ></div>

        {/* Contact details section */}
        <div className="w-full md:w-3/5 p-6 flex items-center justify-center bg-white">
          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold mb-6">Get in touch</h2>
            <p className="mb-4 text-sm md:text-base">
              Have an enquiry? Fill out the form to contact our team.
            </p>
            <form>
              <div className="flex flex-col md:flex-row mb-4">
                <div className="mb-4 md:mb-0 md:mr-2 w-full">
                  <label className="block text-sm font-medium">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="p-2 border w-full rounded"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="p-2 border w-full rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="p-2 border w-full rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="p-2 border w-full rounded"
                ></textarea>
              </div>
              {/* Button with custom violet color */}
              <button
                type="submit"
                style={{ backgroundColor: '#7c3cec', color: 'white' }}
                className="p-2 rounded-md w-full md:w-48 text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
