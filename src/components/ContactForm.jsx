import React, { useState } from "react";
import Footer from "./Footer";
import TopHead from "./TopHead";
import emailjs from "@emailjs/browser";
import DetailsSentConfirmation from "./FormSubmitConfrimation";
import { useNavigate } from "react-router-dom";

function ContactForm() {
    const navigatTo = useNavigate();
    const [formData, setFormData] = useState({
        name: "Brij Shyam",
        email: "brij@email.com",
        phone: "9800000000",
        message:
            "Hi Brij, I wanted to discuss my upcoming pre-wedding plans with you. Please let me know when can we schedule a meet",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const submitHandler = (event) => {
        event.preventDefault();
        /* fetch("http://localhost:3000/submit-form", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setformSubmitted("Hang tight, We'll revert soon!!!");
                // console.log("Form data submitted successfully!");
            })
            .catch((error) => {
                console.error("Error submitting form data:", error);
            }); */
        emailjs
            .send(
                "service_7miqyun",
                "template_7e453mo",
                formData,
                "w4IXFO1oe-g1UGRJH"
            )
            .then((res) => {
                // alert("Thanks for Contacting!!!, Brij will revert soon 😊");
                setFormSubmitted(true);
                // navigatTo("/form-submit-confirmation");
            });
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    return (
        <>
            <header>
                <TopHead />
            </header>
            {formSubmitted && <DetailsSentConfirmation formData={formData} />}
            <div className="contactUs_wrapper">
                <h1 className="contactUs_form-header">Contact Us</h1>
                <p className="contactUs_form-description">
                    Please fill the form up to contact us. <br /> We apprecieate
                    your patience till we get back to you. Thanks...
                </p>
                <div className="form-group">
                    <div className="form-group_image">
                        <img
                            className="img"
                            src="/src/assets/contact-us.svg"
                            alt=""
                        />
                    </div>
                    <div className="form-group_form-container">
                        <form onSubmit={submitHandler} className="form-control">
                            <label htmlFor="name">
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={formData.name}
                                    onChange={changeHandler}
                                />
                            </label>
                            <label htmlFor="email">
                                Email:
                                <input
                                    type="text"
                                    name="email"
                                    placeholder={formData.email}
                                    onChange={changeHandler}
                                />
                            </label>
                            <label htmlFor="phone">
                                Phone:
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder={formData.phone}
                                    onChange={changeHandler}
                                />
                            </label>
                            <label htmlFor="message">
                                Message:
                                <textarea
                                    type="text"
                                    name="message"
                                    onChange={changeHandler}
                                    placeholder={formData.message}
                                />
                            </label>
                            <button className="submit-btn" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactForm;

/* 
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      // Handle successful form submission here
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

 */
