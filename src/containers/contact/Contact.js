// import React from "react";
// import "./Contact.css";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
// import {contactInfo} from "../../portfolio";
// import { Fade } from "react-reveal";

// export default function Contact() {
//     return (
//         <Fade bottom duration={1000} distance="20px">
//          {/* <div className="row"> */}
//         <div className="main contact-margin-top" id="contact">
//             <div className="contact-div-main">
//             <div className="row">
//                 <div className="contact-header">
//                     <h1 className="heading contact-title">{contactInfo.title}</h1>
//                     <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

//                     <div className="contact-text-div">
//                         <a className="contact-detail" href={"tel:" + contactInfo.number}>{contactInfo.number}</a> 
//                         <br/><br/>
//                         <a className="contact-detail-email"
//                            href={"mailto:" + contactInfo.email_address}>{contactInfo.email_address}</a>
//                         <br/><br/>
//                         <SocialMedia/>
//                     </div>
//                 </div>
              
//                  <div className="contact-image-div">
//                  <img alt="Seif Working" src={require("../../assets/images/contactMail.png")}></img>
//                   {/* <img src="https://avatars1.githubusercontent.com/u/20065223?u=5250fb63df0d52dd5af06b00ad670cb8fda9e6ca&v=4" alt="Seif Eddine NOUARA" className="profile-image"/> */}
//                </div>
//                </div>
//             </div>
//         </div>
      
//         {/* </div> */}
//         </Fade>
//     );
// }
import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                false
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                false ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
