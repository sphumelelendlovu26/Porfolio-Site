import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_efg083q",
        "template_wx880yk",
        formRef.current,
        "A5Hy4QDOPBlssS2Ud"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          console.log("message sent");
        },
        (error) => {
          console.error("Email error:", error.text);
          console.log("message not sent");
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className=" p-5 flex gap-5 flex-col"
    >
      {" "}
      <div className="border-b-2 border-b-blue-500">
        {" "}
        <input
          className="p-2 w-full outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
      </div>
      <div className=" border-b-2 border-b-blue-500">
        <input
          className="w-full p-2 outline-0"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>
      <textarea
        className="h-50 border-1 border-blue-500 p-2"
        name="message"
        placeholder="Your Message"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
