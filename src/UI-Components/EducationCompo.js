import { useEffect } from "react"

function EducationCompo() {
  useEffect(()=>{
    document.querySelector(".educationSection").classList.add("sectionSlideIN");
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  }, [])
  return (
    <section className="app_Section educationSection">

      <div className="educationBox">
        <i className="fa-solid fa-graduation-cap educationIcon"></i>
        <span className="educationYear"
        >2023 - 2023</span
        >
        <h2 className="educationName">Web Development (MERN)</h2>
        <p className="educationDesc">
          This course is provied by PrepBytes.The duration of this course
          was 7-8 months. In this course, i learn the basic and advance
          concept of HTML, CSS, JavaScript, Git, React, Node and MongoDB.
        </p>
        <a
          rel="noreferrer"
          href="https://drive.google.com/drive/u/0/folders/1mqf6XTqJo-TKgXBUtOll68iPOs2PNsey"
          target="_blank"
          className="certificateLink"
        >Certificate</a
        >
      </div>

      <div className="educationBox">
        <i className="fa-solid fa-graduation-cap educationIcon"></i>
        <span className="educationYear">2022 - 2022</span>
        <h2 className="educationName">Web Development (Internship)</h2>
        <p className="educationDesc">
          This is a Three months internship program, which in joined in Oct
          2022. In this program, i learned the basic of HTML, CSS, and
          JavaScript and My SQL.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1AEaoX0B-okVG2SNEZnIvwpaHkiWxhRDP"
          target="_blank"
          className="certificateLink"
          rel="noreferrer"
        >Certificate</a
        >
      </div>

      <div className="educationBox">
        <i className="fa-solid fa-graduation-cap educationIcon"></i>
        <span className="educationYear">2023 - 2023</span>
        <h2 className="educationName">JavaScript Udemy</h2>
        <p className="educationDesc">
          The mentor of this course <strong> Jonas Schmedtmann</strong> has
          some great teaching skils.In this course i learn about how
          the JavaScript is really work from behind.
        </p>
        <a
          rel="noreferrer"
          href="https://www.udemy.com/certificate/UC-860be70f-f866-4a2a-836c-ee46144da334/"
          target="_blank"
          className="certificateLink"
        >Certificate</a
        >
      </div>

      <div className="educationBox">
        <i className="fa-solid fa-graduation-cap educationIcon"></i>
        <span className="educationYear">2019 - 2022</span>
        <h2 className="educationName">BCA</h2>
        <p className="educationDesc">
          I Completed my graduation in BCA (Bachelor of Computer
          Application) from TNB College Bhagalpur. I got total
           <strong> 72.31%</strong> marks in graduation.
        </p>
        <a
          rel="noreferrer"
          href="https://drive.google.com/drive/folders/1fd7Zc0-l6cvMVQZYxhi_MwiyBA8fPNno"
          target="_blank"
          className="certificateLink"
        >Certificate</a
        >
      </div>

      <div className="educationBox">
        <i className="fa-solid fa-graduation-cap educationIcon"></i>
        <span className="educationYear">2017 - 2019</span>
        <h2 className="educationName">12th</h2>
        <p className="educationDesc">
          I Completed My 12th From SD College Gouripur, Bhagalpur, Bihar. I
          got total <strong>63.8%</strong> marks in 12th.
        </p>
        <a
          rel="noreferrer"
          href="https://drive.google.com/drive/folders/1ZqSXtC_cHM4gQ204LWqJzq84GoWLnc9T"
          target="_blank"
          className="certificateLink"
        >Certificate</a
        >
      </div>

      <div className="educationBox">
        <i className="fa-solid fa-graduation-cap educationIcon"></i>
        <span className="educationYear">2016 - 2017</span>
        <h2 className="educationName">10th</h2>
        <p className="educationDesc">
          I Completed My 10th From Kanya High School Sonbarhs, Bihpur,
          Bhagalpur, Bihar, India. I got total <strong>73%</strong> marks in
          10th.
        </p>
        <a
          rel="noreferrer"
          href="https://drive.google.com/drive/folders/1BKMEeuHeUPDMAo9Wt4p18LQzwVuHCwoU"
          target="_blank"
          className="certificateLink"
        >Certificate</a
        >
      </div>

    </section>
  )
}

export default EducationCompo
