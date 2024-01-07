import { useEffect, useState } from "react"
import validator from "validator";

function ContactCompo() {

  const [formData, SetFormData] = useState({
    senderName: "",
    senderEmail: "",
    senderMessage: ""
  });
  const [IsError, SetIsError] = useState({
    nameError: false,
    emailError: false,
    messageError: false,
  })

  const handleOnChangeFormData = (e) => {
    SetIsError({
      nameError: false,
      emailError: false,
      messageError: false,
    })
    SetFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmitForm = (e) => {
    if (formData.senderName.length === 0) {
      e.preventDefault();
      SetIsError({
        nameError: true,
        emailError: false,
        messageError: false,
      });


    } else if (formData.senderEmail.length === 0 || !validator.isEmail(formData.senderEmail)) {
      e.preventDefault();
      SetIsError({
        nameError: false,
        emailError: true,
        messageError: false,
      })
    } else if (formData.senderMessage.length === 0) {
      e.preventDefault();
      SetIsError({
        nameError: false,
        emailError: false,
        messageError: true,
      })
    } else {
      SetIsError({
        nameError: false,
        emailError: false,
        messageError: false,
      });
    }
  }

  useEffect(() => {
    document.querySelector(".contactSection").classList.add("sectionSlideIN");
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  },[])

  return (
    <section className="app_Section contactSection">

      <form action={`${process.env.REACT_APP_FORMAPI}`} className="contactForm" method="POST" >
        <div className="contactForm_Heading">Contact Me</div>

        <div className="contactForm__formItemBox">
          <input type="text" name="senderName" className="contactForm__formItem" placeholder="Enter Your Name" value={formData.senderName} onChange={handleOnChangeFormData} required />
          {
            IsError.nameError && <i className="fa-solid fa-circle-exclamation fa-beat-fade errorICON"></i>
          }
         {IsError.nameError && <p className="errorMessage">Provide, Your Name</p>}
        </div>

        <div className="contactForm__formItemBox">
          <input type="email" name="senderEmail" className="contactForm__formItem" placeholder="Enter Your Email" value={formData.senderEmail} onChange={handleOnChangeFormData} required />
          {
            IsError.emailError && <i className="fa-solid fa-circle-exclamation fa-beat-fade errorICON"></i>
          }
          {IsError.emailError && <p className="errorMessage">Invalid Email</p>}
        </div>

        <div className="contactForm__formItemBox">
          <textarea name="senderMessage" className="contactForm__MessageBox" placeholder="Type Message Here" value={formData.senderMessage} onChange={handleOnChangeFormData} required></textarea>
          {
            IsError.messageError && <i className="fa-solid fa-circle-exclamation fa-beat-fade errorICON"></i>
          }
        </div>

        <input type="submit" className="contactForm__formItemButton" value={"Submit"} onClick={handleSubmitForm} />


      </form>
    </section>
  )
}

export default ContactCompo
