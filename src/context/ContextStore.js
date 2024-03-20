import { createContext, useState } from "react";
import EcomPoster from '../assets/ECOm.jpeg'
import todoPoster from '../assets/ToDoProject.png'
import weatherPoster from '../assets/reactWeather.png'
import pbClonePoster from '../assets/GuessGameProject.png'
import blogPoster from '../assets/MERNBlog.png'
import instagramPoster from '../assets/InstagramCLONE.png'
export const MyProjectContext = createContext();

export default function ContextStore(props) {
    const [projectData] = useState([
        {
            projectID: 1,
            projectTitle: "Instagram-Clone",
            projectPoster: instagramPoster,
            projectStatus: "Progress",
            projectHostLink: "https://github.com/Anshuman1803/Instagram-Clone",
        },
        {
            projectID: 2,
            projectTitle: "Ms Blog",
            projectPoster: blogPoster,
            projectStatus: "Completed",
            projectHostLink: "https://mern-ms-blog.netlify.app/",
        },
        {
            projectID: 3,
            projectTitle: "E-Commerce",
            projectPoster: EcomPoster,
            projectStatus: "Completed",
            projectHostLink: "https://ms-store-ecommerce.netlify.app/",
        },
        {
            projectID: 4,
            projectTitle: "PrepBytes Clone",
            projectPoster: pbClonePoster,
            projectStatus: "Completed",
            projectHostLink: "https://prepbytes.netlify.app/",
        },
        {
            projectID: 5,
            projectTitle: "To Do Application",
            projectPoster: todoPoster,
            projectStatus: "Completed",
            projectHostLink: "https://anshuman1803.github.io/ToDo-Web-Application-Main/",
        },

        {
            projectID: 6,
            projectTitle: "Weather Forcast",
            projectPoster: weatherPoster,
            projectStatus: "Completed",
            projectHostLink: "https://reactapp-weather-forecast.netlify.app/",
        },
      

    ])
    return (
        <MyProjectContext.Provider value={{ projectData }}>
            {props.children}
        </MyProjectContext.Provider>
    )
}