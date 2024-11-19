import styles from "./ProjectsStyles.module.css";
import netflix from "../../assets/Netflix.png";
import hipsster from "../../assets/hipsster.png";
import spotify from "../../assets/spotify.png";
import weather from "../../assets/weather.jpg";
import airbnb from "../../assets/airbnb.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={netflix}
          link="https://netflix-clone-1-6k21.onrender.com"
          h3="Retflix"
          p="Streaming App"
        />
        <ProjectCard
          src={spotify}
          link="https://simple-spotify-clone-omega.vercel.app/"
          h3="Sporify"
          p="Free Music"
        />
        <ProjectCard
          src={weather}
          link="https://github.com/rishabhrthr001/advanced-weather-forecasting-app"
          h3="Weather forecasting"
          p="weather app"
        />
        <ProjectCard
          src={airbnb}
          link="https://github.com/rishabhrthr001/Yelp-Camp"
          h3="Airbnb"
          p="Booking App"
        />
      </div>
    </section>
  );
}

export default Projects;
