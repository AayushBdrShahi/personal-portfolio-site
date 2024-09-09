import './Contact.css';
import mail from '../../assets/mail.png';
import call from '../../assets/call.png';
import location from '../../assets/location.png';

const Contact = () => {

  const onSubmit = async (event: any) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    // Simple validation check for empty fields
    for (let [_, value] of formData.entries()) {
      if (!value) {
        alert(`Please enter all fields.`);
        return; // Stop form submission if a field is empty
      }
    }
  
    formData.append("access_key", "fbc08d79-59a2-47f9-9358-7bb68535696b");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
  
    if (res.success) {
      alert(res.message);
    } else {
      alert("Submission failed. Please try again.");
    }
  };
  

  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am currently doing an intern, but also available to take new projects.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Mail icon" /> <p>thakuriaayush122@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="Call icon" /> <p>+772-825-524</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location icon" /> <p>KTM ,NEPAL</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit} >
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />

            <label htmlFor="email">Your Email </label>
            <input type="email" placeholder="Enter your email" name="email" />

            <label htmlFor="message">Write your message here</label>
            <textarea name="message" rows={8} placeholder="Enter your message"></textarea>

            <button type="submit" className="contact-submit">Submit now</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
