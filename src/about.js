export const renderAboutPage = () => {
    
    const pageContainer = document.querySelector("#content")
    const aboutPage = document.createElement("div");
    aboutPage.setAttribute("id", "about");
    aboutPage.setAttribute("data-tab-content", "");
    aboutPage.innerHTML = `
        <header>
            <nav>
                <button data-tab-target="#home">Home,</button>
                <button data-tab-target="#menu">Menu,</button>
                <button data-tab-target="#about">About</button>
            </nav>
        </header>
        <section id="about-content">
        <div class="vibe-visual"></div>
        <h2>BAZAAR BAB</h2>
        <p>MIDDLE EASTERN RESTAURANT</p>
        <p>Respublikos g. 28, Panevėžys</p>
        <p>+370 690 33220</p>
      </section>
    `;
    pageContainer.appendChild(aboutPage);
};
