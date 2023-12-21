/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/3.jpg";

const imageAltText = "Networking ";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "web devlopment",
    description:
      "Frontend and backend",
    url: "https://youtu.be/PRSyHTajxPk?si=DHqC4cqes6AHsc58",
  },
  {
    title: "About Html and CSS",
    description:
      "Designing",
    url: "https://www.youtube.com/live/WYo5bK7xxK0?si=YJrXKIZljdAhEsEr",
  },
  {
    title: "Code",
    description:
      "Coding Languages used for Website Design ",
    url: "https://youtu.be/j9wWPEmxSZg?si=G-TknqZrWN3x_-65",
  },
  {
    title: "About GitHub",
    description:
      "Profile",
    url: "https://github.com/GitKritiM",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
