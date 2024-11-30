import React from "react";

const ContactUs = () => {
  return (
    <div className="p-4 m-4">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-green-300 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};


export default ContactUs;
