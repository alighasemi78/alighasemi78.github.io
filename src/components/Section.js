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
        {props.title === "education" ? (
          data.educations.map((education) => (
            <Card
              key={education.title}
              logos={education.logos}
              title={education.title}
              body={education.body}
              isList={education.type === "ol"}
            />
          ))
        ) : props.title === "experiences" ? (
          data.experiences.map((experience) => (
            <Card
              key={experience.title}
              logos={experience.logos}
              title={experience.title}
              body={experience.body}
              isList={experience.type === "ol"}
            />
          ))
        ) : props.title === "certifications" ? (
          data.certifications.map((certification) => (
            <Card
              key={certification.title}
              logos={certification.logos}
              title={certification.title}
              body={certification.body}
              isList={certification.type === "ol"}
            />
          ))
        ) : props.title === "projects" ? (
          data.projects.map((project) => (
            <Card
              key={project.title}
              logos={project.logos}
              title={project.title}
              body={project.body}
              isList={project.type === "ol"}
              hasBanner
            />
          ))
        ) : props.title === "about" ? (
          <div className="sectionMainBody">
            Welcome to my website! I'm Ali Ghasemi, a recent graduate of the BSc
            in Computer Engineering from Sharif University of Technology. With a
            strong academic background and practical experience as a Front-end
            Developer, I am passionate about leveraging technology to create
            intuitive and impactful digital experiences.
            <br />
            <br />
            During my time at Sharif University of Technology, I gained a solid
            foundation in computer engineering, developing expertise in areas
            such as software development, algorithms, and programming languages.
            My academic journey provided me with a deep understanding of the
            fundamental principles necessary to solve complex technical
            challenges.
            <br />
            <br />
            As a Front-end Developer, I have had the opportunity to apply my
            skills in creating user-friendly and visually appealing web
            applications. Through hands-on experience with tools like React.js,
            I have honed my ability to translate design concepts into functional
            and engaging interfaces.
            <br />
            <br />
            Passion and dedication drive me in my work. I thrive on pushing
            boundaries, constantly seeking innovative solutions to enhance user
            experiences and deliver exceptional results. With a strong work
            ethic and attention to detail, I strive for excellence in every
            project I undertake.
            <br />
            <br />
            On this website, you will find examples of my work, showcasing my
            expertise in front-end development. Whether you're looking for a
            skilled developer to bring your vision to life or seeking insights
            into the world of technology, I'm here to help.
            <br />
            <br />
            Thank you for visiting my website, and I look forward to the
            opportunity to collaborate and contribute to your projects. Please
            don't hesitate to reach out to me using the provided contact
            information.
          </div>
        ) : (
          <div className="sectionMainBody">
            Thank you for your interest! I would be delighted to connect and
            discuss how we can collaborate. Feel free to reach out to me using
            any of the following contact methods:
            <br />
            <br />
            Email:{" "}
            <a href="mailto:hesanghasemi99@gmail.com">
              hesanghasemi99@gmail.com
            </a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/alighasemi13781999/"
              target="_blank"
            >
              https://www.linkedin.com/in/alighasemi13781999/
            </a>
            <br />
            GitHub:{" "}
            <a href="https://github.com/alighasemi78" target="_blank">
              https://github.com/alighasemi78
            </a>
            <br />
            <br />
            I am open to opportunities, whether it's a freelance project, a
            potential partnership, or simply a conversation about technology and
            its possibilities. I aim to respond promptly to all inquiries, so
            please don't hesitate to get in touch.
            <br />
            <br />I look forward to hearing from you and exploring how we can
            work together to achieve your goals.
          </div>
        )}
      </main>
    </section>
  );
};

export default Section;
