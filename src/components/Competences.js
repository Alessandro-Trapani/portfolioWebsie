import { ParallaxBanner } from "react-scroll-parallax";
import useScrollAnimation from "../hooks/useScrollAnimation";
export default function Competences() {
  useScrollAnimation("animated", "visible");

  return (
    <>
      <div class="row align-items-center" style={{ padding: "110vh 0 0 0" }}>
        <div class="skillsText col-md-6 text-section ps-5 ">
          <h2 class="animated display-4 mb-5">My Skills & Expertise</h2>
          <p class="animated lead">
            I specialize in developing dynamic and responsive web applications
            using robust technologies. With a foundation in both front-end and
            back-end frameworks
          </p>
          <a href="#contact" class="animated btn btn-dark mt-3">
            Get in Touch
          </a>
        </div>
        <div className="col-md-6 d-flex flex-wrap justify-content-center align-items-center competencesContainer pt-4">
          <img
            className="competence img-fluid animated"
            src="../assets/react.png"
            alt="competences"
          />
          <img
            className="competence img-fluid animated"
            src="../assets/springBoot.png"
            alt="competences"
          />
          <img
            className="competence img-fluid animated"
            src="../assets/bootstrap.png"
            alt="competences"
          />

          <img
            className="competence img-fluid animated"
            src="../assets/css.png"
            alt="competences"
          />
          <img
            className="competence img-fluid animated"
            src="../assets/html.png"
            alt="competences"
          />
          <img
            className="competence img-fluid animated"
            src="../assets/java.png"
            alt="competences"
          />

          <img
            className="competence img-fluid animated"
            src="../assets/javascript.png"
            alt="competences"
          />
          <img
            className="competence img-fluid animated"
            src="../assets/php.png"
            alt="competences"
          />
          <img
            className="competence img-fluid animated"
            src="../assets/sql.png"
            alt="competences"
          />
        </div>
      </div>
    </>
  );
}
