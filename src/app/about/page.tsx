import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Celso Espino <span>Software Engineer</span>
                  </h2>
                  <p style={{ marginBottom: '15px' }}>
                    Hi! My name is Celso Espino.
                    I am a software engineer experienced in Node.js, React, Svelte, Phoenix, AI and I am
                    very passionate and dedicated to my work.
                  </p>
                  <p style={{ marginBottom: '15px' }}>
                    Very willing to discuss and learn new technologies for Phoenix, Svelte and AI.
                  </p>
                  <p>
                    “Just as there is no single type of intelligence, there is no single type of AI.” Marvin Minksy
                  </p>
                  <p>
                    As a passionate e-learning enthusiast, I am deeply excited about the potential of artificial general intelligence (AGI), virtual reality (VR) and chatbots to revolutionize the way we learn and acquire new knowledge.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>celso.espino.glo@email.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Bachelor of Engineering in Computer Science </span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+1 3156365319</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Residence : <span>Lima, Peru</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Svelte</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Three.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Sanity</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Vue</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Node.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "93%" }} />
                        <div className="skill-percent">93%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Elixir</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "88%" }} />
                        <div className="skill-percent">88%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Flask</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "86%" }} />
                        <div className="skill-percent">86%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Supabase</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }} />
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>AI</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2015-2019
                          </h6>
                          <h4 className="timeline-title">
                            Bachelor of Engineering in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Peruvian University of Applied Sciences
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2024.02-2024.07
                          </h6>
                          <h4 className="timeline-title">Self employed Full-Stack Developer | LlamaIndex | LangChain | OpenAI | Flask at 
                            <a href="https://analogai.net" style={{ color: "#00FFFF", marginLeft: "8px" }}>Analog AI</a></h4>
                          <p className="timeline-text">
                            Built AI solutions that replicate human emotional intelligence and behaviors.
                          </p>
                          <p className="timeline-text" style={{ fontSize: "14px", marginTop: "8px" }}>
                            Technologies: OpenAI, Neo4j, Langchain, LlamaIndex, Flask, Python, React, Next.js
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023.03-2024.06
                          </h6>
                          <h4 className="timeline-title">Full-Stack Developer | Next.js | Three.js | ElasticSearch | Sanity | Node.js at
                          <a href="https://gamerogue.com" style={{ color: "#00FFFF", marginLeft: "8px" }}>Game Rogue</a></h4>
                          <p className="timeline-text">
                            Created the MVP and built the website for an online apparel design and
                            shopping platform, as well as a management system for team events in
                            gaming and LiveKit social TV.
                          </p>
                          <p className="timeline-text" style={{ fontSize: "14px", marginTop: "8px" }}>
                            Technologies: React, Next.js, Typescript, Node.js, Three.js, ShadcnUI, NextUI,
                            TailwindCSS, Storybook, Google Cloud Platform, Vercel, Github Actions, Husky,
                            Turbo, MongoDB, ElasticSearch, Recaptcha, NextAuth, LiveKit, Sanity, Socketio,
                            Stripe
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2021.09-2023.01
                          </h6>
                          <h4 className="timeline-title">Full-Stack Developer | Phoenix | Elixir | Liveview | AWS at
                          <a href="https://www.digitalconcerthall.com/en" style={{ color: "#00FFFF", marginLeft: "8px" }}>Berlin Phil Media GmbH</a></h4>
                          <p className="timeline-text">
                            Developed a prototype for the future online subscription system for the
                            Digital Concert Hall, the video streaming service of the Berlin Philharmonic
                            using Elixir / Phoenix with GraphQL.
                          </p>
                          <p className="timeline-text" style={{ fontSize: "14px", marginTop: "8px" }}>
                            Technologies: Phoenix, Elixir, Phoenix Liveview, TailwindCSS, GraphQL, Stripe,
                            AWS, Terraform, Github actions
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020.02-2021.07
                          </h6>
                          <h4 className="timeline-title">Frontend Developer | Svelte | Typescript | Supabase at
                          <a href="https://tampax.com" style={{ color: "#00FFFF", marginLeft: "8px" }}>Tampax</a></h4>
                          <p className="timeline-text">
                            Developed the frontend tailored to client specifications, incorporating
                            features such as user registration, checkout management, and
                            administrative controls.
                          </p>
                          <p className="timeline-text" style={{ fontSize: "14px", marginTop: "8px" }}>
                            Technologies:  Javascript, Typescript, Svelte, SvelteKit, Supabase, PostgreSQL,
                            Vercel, npm, Jest, CSS
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2018.02-2019.11
                          </h6>
                          <h4 className="timeline-title">Part-time Full-Stack Developer | React | Express.js | GraphQL | AWS at
                          <a href="https://surveyplanet.com" style={{ color: "#00FFFF", marginLeft: "8px" }}>SurveyPlanet, LLC</a></h4>
                          <p className="timeline-text">
                            Engaged in the creation of Survey management systems enabling
                            advertisers to design and distribute user-friendly surveys while offering
                            comprehensive analysis of survey results.
                          </p>
                          <p className="timeline-text" style={{ fontSize: "14px", marginTop: "8px" }}>
                            Technologies: React, Typescript, TailwindCSS, CanvasJS Chart, Jest, Node.js,
                            Express.js, GraphQL, Sequelize, Postgresql, AWS, Terraform, OpenAI
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
