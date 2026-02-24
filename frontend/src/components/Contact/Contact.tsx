import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";
import line from "../../images/line.png";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface EmailParams {
  [key: string]: string;  
  user_name: string;
  user_email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const SendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const params: EmailParams = {
      user_name: name,
      user_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send("service_2u152g9", "template_oenxmlu", params, "gllfUWAiXv0vTvaXM")
      .then(function () {
        toast("Success");
      });
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleSubject = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSubject(e.target.value);
  };

  const handleMessage = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setMessage(e.target.value);
  };

  return (
    <div className="container">
      <div className="contact_form_container" id="contact">
        <div className="contact_form_heading">
          Drop <span>me a Message </span>
        </div>

        <div className="contact_form_line">
          <img src={line} alt="" />
        </div>

        <div className="contact_form_form">
          <form onSubmit={SendEmail}>
            <div className="contact_form_row_1">
              <input
                name="from_name"
                type="text"
                id="fullname"
                placeholder="Your Name"
                onChange={handleName}
              />
              <input
                name="email_id"
                type="text"
                id="email_id"
                placeholder="Your Email"
                onChange={handleEmail}
              />
            </div>

            <div className="contact_form_row_2">
              <input
                name="subject"
                type="text"
                id="subject"
                placeholder="Subject"
                onChange={handleSubject}
              />
            </div>

            <div className="contact_form_row_3">
              <textarea
                name="message"
                id="message"
                cols={20}
                rows={6}
                placeholder="Your Message"
                onChange={handleMessage}
              />
            </div>

            <div className="contact_form_button">
              <button type="submit">
                Shoot Message
                <ToastContainer
                  position="top-center"
                  theme="dark"
                  autoClose={1000}
                  closeButton={false}
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="contact_end">
        <div className="contact_copy">
          Copyright © Yashvardhan Singh Bhadoria
        </div>

        <div className="contact_contact">
          <div className="contact_address">
            <FaLocationDot /> Kanpur, U.P., India
          </div>

          {/* <div className="contact_number">
            <a href="#">
              <FaPhoneAlt /> +91 8176823899
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;