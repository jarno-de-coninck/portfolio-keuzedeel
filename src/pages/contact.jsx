import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isSuccess: false
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {

      setFormStatus({
        message: 'Bedankt voor uw bericht! We nemen snel contact met u op.',
        isSuccess: true
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormStatus({
        message: 'Vul alstublieft alle velden in.',
        isSuccess: false
      });
    }
  };

  return (
    <div className="container mt-5 h-75 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-lg-8 text-white mb-4 mb-lg-0">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <h2 className="text-center mb-4 fw-bold">Contacteer mij</h2>
              <div onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control formStyling"
                    id="name"
                    placeholder="Naam"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control formStyling"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control formStyling"
                    id="message"
                    rows="4"
                    placeholder="Bericht"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 text-white"
                  href="mailto:reielts@student.scalda.nl"
                  onClick={() => {
                    const nameInput = document.getElementById('name');
                    const subjectInput = document.getElementById('email');
                    const messageInput = document.getElementById('message');
        
                    const name = encodeURIComponent(nameInput.value);
                    const subject = encodeURIComponent(subjectInput.value);
                    const message = encodeURIComponent(messageInput.value);
        
                    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Reielts@student.scalda.nl&su=${subject}&body=From ${name},%0A%0A${message}`;
        
                    window.open(mailtoLink, '_blank');
                  }}
                >
                  Stuur bericht
                </button>
              </div>
              {formStatus.message && (
                <div
                  className={`mt-3 p-2 text-center ${formStatus.isSuccess ? 'bg-primary text-white rounded' : 'bg-danger text-white rounded'}`}
                >
                  {formStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-4 darkBg text-white rounded p-4">
          <h3 className="text-center mb-4 fw-bold">Contact Informatie</h3>
          <p><strong>Email:</strong> <a href="mailto:Reielts@student.scalda.nl" className="text-white">Reielts@student.scalda.nl</a></p>
          <p><strong>Telefoonnummer:</strong> <a href="tel:+1234567890" className="text-white">+31 123 456 7890</a></p>
          <p><strong>Adres:</strong></p>
          <p>33 Arendhof</p>
          <p>4451EB Heinkenszand</p>
          <p>Nederland</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
