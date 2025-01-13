export default function Projects() {
  return (
    <section id="projects" class="py-5">
      <div class="container">
        <h2 class="text-center mb-5 animated">My Projects</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card project-card ">
              <img
                src="https://picsum.photos/400/200"
                class="card-img-top project-image"
                alt="Project 1"
              />
              <div class="card-body project-info">
                <h5 class="card-title">Project One</h5>
                <p class="card-text">
                  A brief description of Project One. It involves building an
                  e-commerce website with a responsive layout and dynamic
                  features.
                </p>
                <a
                  href="https://github.com/yourusername/project-one"
                  class="btn btn-dark"
                >
                  View Project <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card project-card ">
              <img
                src="https://picsum.photos/400/200"
                class="card-img-top project-image"
                alt="Project 2"
              />
              <div class="card-body project-info">
                <h5 class="card-title">Project Two</h5>
                <p class="card-text">
                  Project Two is a dynamic blog platform that integrates REST
                  APIs and provides interactive features such as comments and
                  likes.
                </p>
                <a
                  href="https://github.com/yourusername/project-two"
                  class="btn btn-dark"
                >
                  View Project <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card project-card ">
              <img
                src="https://picsum.photos/400/200"
                class="card-img-top project-image"
                alt="Project 3"
              />
              <div class="card-body project-info">
                <h5 class="card-title">Project Three</h5>
                <p class="card-text">
                  This project is a portfolio website built with HTML, CSS, and
                  JavaScript. It's fully responsive and features a modern
                  design.
                </p>
                <a
                  href="https://github.com/yourusername/project-three"
                  class="btn btn-dark"
                >
                  View Project <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
