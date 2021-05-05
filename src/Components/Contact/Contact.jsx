import React from "react";
import "./Contact.scss";
import { IoMdMail } from "react-icons/io";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  FaPhoneSquareAlt,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";


function Contact() {
  return (
    <section className="contact py-5">
      <div className="container">
      <div className="contact__header text-center">
        <h2>
          CONTACT <span>ME</span>
        </h2>
      </div>
      <div className="row pt-5">
        <div className="col-md-4 col-sm-12">
          <h4>DON'T BE SHY !</h4>
          <p className="mt-3">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <ul className="list-unstyled d-flex align-items-center">
            <li>
              <IoMdMail className="h3 mr-2 icon" />
            </li>
            <li className="mb-2"> ssnjr14@gmail.com</li>
          </ul>
          <ul className="list-unstyled d-flex align-items-center">
            <li>
              <FaPhoneSquareAlt className="h3 mr-2 icon" />
            </li>
            <li className="mb-2">01101722683</li>
          </ul>
          <ul className="list-unstyled d-flex align-items-center pt-2">
            <li>
              <a className="text-decoration-none" href="https://www.facebook.com/Sumaiyayahia" target="_blanck">
                <FaFacebookF className=" h6 icon2 mr-4" />
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="https://twitter.com/SumaiyaSinger" target="_blanck">
                <FaTwitter className=" h6 icon2 mr-4" />
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="https://www.linkedin.com/in/sumaiya-yahia-38b92a148/" target="_blanck">
                <FaLinkedinIn className=" h6 icon2 mr-4" />
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="https://github.com/Sumaiya218" target="_blanck">
                <FaGithub className=" h6 icon2 mr-4" />
              </a>
            </li>
            <li></li>
          </ul>
        </div>
        
        <div className="col-md-8 col-sm-12">
          <form noValidate autoComplete="off">
            <div className="d-flex justify-content-between mb-4">
            <TextField className="text"
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
            />
             <TextField className="text"
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
            />
            </div>
            <TextareaAutosize variant="outlined" className="w-100 p-3 area" aria-label="minimum height" rowsMin={5} placeholder="Your Message" />
            <Button className="mt-4 sendBtn" variant="contained" color="primary">
        Send Message
      </Button>
          </form>
        </div>
      </div>
   
      </div>
    </section>
  );
}

export default Contact;
