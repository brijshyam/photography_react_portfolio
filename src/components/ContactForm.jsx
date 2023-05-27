import React, { useState } from "react";
import Footer from "./Footer";
import TopHead from "./TopHead";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitMessage, setSubmitMessage] = useState("");
    const submitHandler = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/submit-form", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setSubmitMessage("Hang tight, We'll revert soon!!!");
                // console.log("Form data submitted successfully!");
            })
            .catch((error) => {
                console.error("Error submitting form data:", error);
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
            <div className="contactUs_wrapper">
                <h1 className="contactUs_form-header">Contact Us</h1>
                <p className="contactUs_form-description">
                    Please fill the form up to contact us. We apprecieate your
                    patience till we get back to you. Thanks...
                </p>
                <div className="form-group">
                    <div className="form-group_image">
                        <img
                            className="img"
                            src="/src/assets/contact-us.svg"
                            alt=""
                            srcset=""
                        />
                    </div>
                    <div className="form-group_form-container">
                        <form onSubmit={submitHandler} className="form-control">
                            <label htmlFor="name">
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={changeHandler}
                                />
                            </label>
                            <label htmlFor="email">
                                Email:
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={changeHandler}
                                />
                            </label>
                            <label htmlFor="phone">
                                Phone:
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={changeHandler}
                                />
                            </label>
                            <label htmlFor="message">
                                Message:
                                <textarea
                                    type="text"
                                    name="message"
                                    value={formData.message}
                                    onChange={changeHandler}
                                />
                            </label>
                            <button className="submit-btn" type="submit">
                                Submit
                            </button>
                            {submitMessage && (
                                <p className={`success-msg`}>{submitMessage}</p>
                            )}
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
