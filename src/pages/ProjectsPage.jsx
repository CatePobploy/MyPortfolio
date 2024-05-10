// import CardsList from '../components/features/card/CardsList'
import Container from "react-bootstrap/Container";
import abma from "../assets/abma.mp4"; // Example project image
import apv from "../assets/apv.mp4"; // Example project image
import soon from "../assets/soon.png";
import poke from "../assets/poke.png";
import moutainGallry from "../assets/moutainGallry.png";
import EverSweet from "../assets/EverSweet.png";
import VerseVoyage from "../assets/VerseVoyage.png";
<script src="src/js/modernizr.js"></script>


function ProjectsPage() {
  return (
    <Container>
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-container">
        <div className="project-card">
          <img src={poke} alt="Project 1" className="project-image" />
          <h2 className="project-title">Poke Guide</h2>
          <p className="project-description">
            Welcome to Poke Guild, your ultimate destination for all things
            Pokémon! Dive into a world filled with the charm and excitement of
            these iconic creatures, where you can explore, learn, and build your
            dream team.
          </p>
          <a
            href="https://poke-api-sage.vercel.app/"
            className="linkBtn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-card">
          <img src={moutainGallry} alt="Project 2" className="project-image" />
          <h2 className="project-title">Mountain Gallery</h2>
          <p className="project-description">
            Discover stunning mountain landscapes at Mountain Gallery. Explore
            snow-capped peaks, vibrant blooms, and adventurous trails through
            captivating photography. Find your inspiration for the next mountain
            adventure.
          </p>
          <a
            href="https://poke-api-sage.vercel.app/"
            className="linkBtn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={EverSweet} alt="Project 2" className="project-image" />
          <h2 className="project-title">Ever Sweet Hub</h2>
          <p className="project-description">
            Discover stunning mountain landscapes at Mountain Gallery. Explore
            snow-capped peaks, vibrant blooms, and adventurous trails through
            captivating photography. Find your inspiration for the next mountain
            adventure.
          </p>
          <a
            href="https://vercel.com/catepobploys-projects/ever-sweet"
            className="linkBtn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={VerseVoyage} alt="Project 2" className="project-image" />
          <h2 className="project-title">VerseVoyage</h2>
          <p className="project-description">
            VerseVoyage, your literary haven! Dive into a world of books where
            every day brings a new adventure. Discover captivating reads,
            explore our "Random Book of the Day" and join fellow book lovers to
            share your favorites and discuss all things literary. Set sail with
            us and explore the endless wonders of the written word!
          </p>
          <a
            href="https://poke-api-sage.vercel.app/"
            className="linkBtn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        <div className="project-card">
          <img src={soon} alt="Project 2" className="project-image" />
          <h2 className="project-title">Wordpress</h2>
          <p className="project-description">
            This is a brief explanation of project 2. It highlights the
            innovative features and design elements implemented.
          </p>
          <a
            href="https://poke-api-sage.vercel.app/"
            className="linkBtn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
    </Container>
  );
}

export default ProjectsPage;
