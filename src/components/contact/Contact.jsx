import "aos/dist/aos.css";
import "./contact.css";
import AOS from "aos";
import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

// ..
AOS.init({
  duration: 2000,
});

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_96cj9lc",
      "template_zi8040j",
      form.current,
      "iB0vGMA0P8GzdAbRPriSB"
    );

    e.target.reset();
  };
  return (
    <section id="contact" data-aos="zoom-in-down">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="underline"></div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>skraj5873@gmail.com</h5>
            <a href="mailto:skraj5873@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Sandeep Kumar</h5>
            <a href="#" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+919305525008</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=919305525008
"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {/* <form ref={form} onSubmit={sendEmail}> */}
        {/* <form action="https://api.web3forms.com/submit" method="POST">
          <i
            type="hidden"
            name="access_key"
            value="20de9b2e-6361-492e-ba12-8f45663379af"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form> */}
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
