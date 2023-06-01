import "../styles/Section.css";
import * as data from "../data";
import Card from "./Card";

const Section = (props) => {
  return (
    <section className="section subSection">
      <h3 className="sectionTitle">{props.title}</h3>
      <main
        className={`sectionMain${
          props.title === "certifications" || props.title === "projects"
            ? " grid"
            : ""
        }`}
      >
        {props.title === "education"
          ? data.educations.map((education) => (
              <Card
                key={education.title}
                logos={education.logos}
                title={education.title}
                body={education.body}
                isList={education.type === "ol"}
              />
            ))
          : props.title === "experiences"
          ? data.experiences.map((experience) => (
              <Card
                key={experience.title}
                logos={experience.logos}
                title={experience.title}
                body={experience.body}
                isList={experience.type === "ol"}
              />
            ))
          : props.title === "certifications"
          ? data.certifications.map((certification) => (
              <Card
                key={certification.title}
                logos={certification.logos}
                title={certification.title}
                body={certification.body}
                isList={certification.type === "ol"}
              />
            ))
          : data.projects.map((project) => (
              <Card
                key={project.title}
                logos={project.logos}
                title={project.title}
                body={project.body}
                isList={project.type === "ol"}
                hasBanner
              />
            ))}
      </main>
    </section>
  );
};

export default Section;
