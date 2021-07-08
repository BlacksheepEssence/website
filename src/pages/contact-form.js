import React, { useState }  from "react"
import axios from "axios";
const ContactForm = () => {

    const [setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            alert('Votre message a bien été envoyé.');
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/37164295-ec22-4226-968e-e38bffff9df3",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };
    return (
        <div className="col-md-8 mt-5">
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <br />
                    <input type="email" name="email" placeholder="" />
                </div>
                <div>
                    <label htmlFor="name">Nom Prénom</label>
                    <br />
                    <input type="text" name="name" placeholder="" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <br />
                    <textarea name="message" placeholder="" cols="26" rows="10"></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default ContactForm;