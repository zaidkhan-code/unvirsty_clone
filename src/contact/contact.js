import React from "react";
import "./contact.css";
import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import white_arrow from "../assets/white-arrow.png";
import location_icon from "../assets/location-icon.png";
function Contact() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7abdfc17-99fc-4d39-98eb-9631d644d5cb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          In a quiet corner of the world, where the trees swayed gently under
          the sun’s warm embrace, a soft breeze carried the secrets of the
          forest. Each rustling leaf whispered tales of ancient times when
          giants roamed and magic danced in the air.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            email zaidkhan123&gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" /> 03189230490
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            pakistan khyber pukhtoon khwa
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">PHONE Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows={"6"}
            placeholder="Enter your message"
            required
          ></textarea>
          <button className="btn dark-btn" type="submit">
            {" "}
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
