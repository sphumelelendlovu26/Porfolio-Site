import emailjs from "emailjs-com";
import { useRef } from "react";
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
    <form ref={formRef} onSubmit={sendEmail} className="flex gap-5  flex-col">
      {" "}
      <div className="border-b-1 border-b-gray-300 rounded">
        {" "}
        <input
          className="p-1 w-full outline-none  transition-all duration-300"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
      </div>
      <div className=" border-b-1 rounded border-b-gray-300">
        <input
          className="w-full p-2 outline-0"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>
      <textarea
        className="h-50 border-1 rounded border-gray-300 "
        name="message"
        placeholder="Your Message"
        required
      />
      <button
        className="border rounded hover:text-[#EA4335] hover:border-white w-1/2 self-center transition"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
