
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="imgs/anyonmous.png"
              alt="Celso Profile"
              className="shadow-dark"
            />
            <h1>Celso Espino</h1>
            <p>Software Engineer | Node.js | React | Svelte | Phoenix | AI</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/celso-espino-128a98319" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/alijourney" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="mailto:celso.espino.glo@gmail.com" target="_blank">
                <i className="fa fa-envelope" />
              </a>
              <a href="https://wa.me/18494527587" target="_blank">
                <i className="fa fa-whatsapp" />
              </a>
              <a href="https://t.me/greatjourney589" target="_blank">
                <i className="fa fa-telegram" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
