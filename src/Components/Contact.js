import emailjs from "emailjs-com";
import { useState } from "react";
import { useRef } from "react";

const Contact = () => { 
const formRef = useRef();
const [done, setDone] = useState(false)
const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.sendForm('service_nt4yi8l', 'template_4qwtpkm', formRef.current, 'NWuZWqUX3JfozkOPW')
  // e.target.reset()
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  
}
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead"></p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form  ref={formRef} onSubmit= {handleSubmit}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input type="text" name="contactName"                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input  type="text" name="contactEmail"
                />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"  name="contactSubject" />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"                 
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button >Submit</button>
                {done && <p>Thank you for your message!</p>}
              </div>
            </fieldset>
          </form>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address ➡️ Phone</h4>
            <p className="address">
             Denis Wachira
              <br />
              deniswachira77@gmail.com
              <br />
              <br />
              Embu <br />
              Embu, Kenya 1112-60100
              <br />
              <span>+254745086753</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
