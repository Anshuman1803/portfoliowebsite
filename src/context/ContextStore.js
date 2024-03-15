import { createContext, useState } from "react";
import EcomPoster from '../assets/ECOm.jpeg'
import todoPoster from '../assets/ToDoProject.png'
import weatherPoster from '../assets/reactWeather.png'
import pbClonePoster from '../assets/GuessGameProject.png'
import blogPoster from '../assets/MERNBlog.png'
export const MyProjectContext = createContext();

export default function ContextStore(props) {
    const [projectData] = useState([
        {
            projectID: 1,
            projectTitle: "Ms Blog",
            projectDesc : "Discover the next level of blogging with our cutting-edge Blog Web Application! Experience the convenience of intuitive authentication features, allowing you to access your account with ease. Effortlessly organize and update your blog posts, whether you're sharing your thoughts, experiences, or expertise. Engage with a diverse and vibrant community of fellow bloggers, exchanging ideas, insights, and inspiration. Plus, with our user-centric account controls, you have the power to manage your privacy settings and account preferences effortlessly. Embrace the future of blogging and join us today to unleash your creativity like never before!",
            projectDescList: [" User-friendly Authentication", "Effortless Blog Management", "Account Control"],
            projectPoster: blogPoster,
            projectStatus: "Completed",
            projectTech: ["JavaScript", "React", "Node JS", "Mongo DB", "Express"],
            projectHostLink: "https://mern-ms-blog.netlify.app/",
        },
        {
            projectID: 2,
            projectTitle: "E-Commerce",
            projectDesc : "The E-Commerce Web Application, meticulously crafted with a seamless blend of CSS, React, Node, and MongoDB, stands as a testament to cutting-edge technological integration. The use of CSS ensures an aesthetically pleasing and responsive design, creating an engaging user interface that captivates visitors from the moment they land on the platform.Incorporating React, the application boasts dynamic and interactive components, facilitating a smooth and enjoyable user experience. React's component-based architecture not only enhances the application's responsiveness but also simplifies the management of complex UI elements, ensuring scalability as the platform evolves.Powered by Node.js, the backend of the E-Commerce Web Application delivers exceptional performance and scalability.",
            projectDescList: ["SignIn and SignUp Facility", "Add and Remove To Cart", "Payment Integration", "Only Authneticated User can purchased Order", "Database Facility"],
            projectPoster: EcomPoster,
            projectStatus: "Completed",
            projectTech: ["HTML", "CSS", "JavaScript", "React", " Node JS", "Mongo DB"],
            projectHostLink: "https://ms-store-ecommerce.netlify.app/",
        },
        {
            projectID: 3,
            projectTitle: "PrepBytes Clone",
            projectDescList: ["SignIn and SignUp Facility", "Course Purchased", "Dashboard", "Payment Integration", "Only Authneticated User can purchased Course", "Local Storage Facility", "Database Facility"],
            projectDesc : "This project is an emulation of PrepBytes, serving as a significant endeavor in my MERN Stack Development course. Within this platform, students have the capability to purchase courses and tests tailored to their specific requirements. The acquired courses and tests seamlessly integrate into the user's dashboard, providing a streamlined and personalized learning experience.",
            projectPoster: pbClonePoster,
            projectStatus: "Completed",
            projectTech: ["HTML", "CSS", "React", "Node", "axios", "Express", "MongoDB", "JWT"],
            projectHostLink: "https://prepbytes.netlify.app/",
        },
        {
            projectID: 4,
            projectTitle: "To Do Application",
            projectDescList: ["Add The Task", "Delete the Task", "Mark Done Feature", "Local Storage Facility"],
            projectDesc : 'The To-Do Web Application, meticulously crafted with HTML, CSS, and JavaScript , enhanced by the incorporation of a Local Storage Facility. Throughout the development process, I not only achieved the successful implementation of core web technologies but also delved into the intricacies of JavaScript, acquiring new insights and refining my existing knowledge in web development. The utilization of Local Storage further enriched my skill set by providing a practical understanding of client-side data persistence. This feature enhances the To-Do Web Application, enabling users to retain their task data even after closing the browser. ',
            projectPoster: todoPoster,
            projectStatus: "Completed",
            projectTech: ["HTML", "CSS", "JavaScript", "Local Storage"],
            projectHostLink: "https://anshumanmahi7781.github.io/ToDo-Web-Application-Main/",
        },

        {
            projectID: 5,
            projectTitle: "Weather Forcast Application",
            projectDesc : "The Weather Forecast application, skillfully built using HTML, SCSS, and the React framework, empowers users to effortlessly retrieve weather information for their chosen city. By inputting the city name, the application leverages an API to swiftly obtain and display current weather conditions if the city is available within the API database. Going beyond the present weather snapshot, the application provides detailed insights into today's weather forecast, offering data at three-hour intervals. Additionally, users can access a comprehensive five-day weather forecast.",
            projectDescList: ["Current Weather", "5 day Weather Forcasting", "Maximum Weather Information"],
            projectPoster: weatherPoster,
            projectStatus: "Completed",
            projectTech: ["HTML", "CSS", "React", "SCSS", "axios", "API"],
            projectHostLink: "https://reactapp-weather-forecast.netlify.app/",
        },
      

    ])
    return (
        <MyProjectContext.Provider value={{ projectData }}>
            {props.children}
        </MyProjectContext.Provider>
    )
}