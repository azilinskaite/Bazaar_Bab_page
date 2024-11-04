<<<<<<< HEAD
export const renderMenuPage = (() => {
=======
export const renderMenuPage = () => {
>>>>>>> main
    
    const pageContainer = document.querySelector("#content")
    const menuPage = document.createElement("div");
    menuPage.setAttribute("id", "menu");
<<<<<<< HEAD
    menu.classList.add("data-tab-content", "");
    menuPage.innerHTML = `
    
        <section id="menu">
=======
    menuPage.setAttribute("data-tab-content", "");
    menuPage.innerHTML = `
        <header>
            <nav>
                <button data-tab-target="#home">Home,</button>
                <button data-tab-target="#menu">Menu,</button>
                <button data-tab-target="#about">About</button>
            </nav>
        </header>
        <section id="menu-page">
>>>>>>> main
            <div class="menu-container">
            <h2>UŽKANDŽIAI</h2>
            <div class="menu-item">
            <p>Humusas</p>
            <span>6.5</span>
            </div>
            <div class="menu-item">
            <p>Humusas su vištiena</p>
            <span>8</span>
            </div>
            <div class="menu-item">
            <p>Alyvuogės Zeytoon Parvard</p>
            <span>6</span>
            </div>
            <div class="menu-item">
            <p>Šviežių daržovių salotos</p>
            <span>6</span>
            </div>
            <h2>KEBABAI LAVAŠE</h2>
            <div class="menu-item">
            <p>Vištiena</p>
            <span>8.5</span>
            </div>
            <div class="menu-item">
            <p>Ėriena</p>
            <span>10</span>
            </div>
            <div class="menu-item">
            <p>Falafeliai</p>
            <span>9</span>
            </div>
            <h2>KEBABAI LĖKŠTĖJE</h2>
            <div class="menu-item">
            <p>Vištiena</p>
            <span>10</span>
            </div>
            <div class="menu-item">
            <p>Ėriena</p>
            <span>12</span>
            </div>
            <div class="menu-item">
            <p>Falafeliai</p>
            <span>10.5</span>
            </div>
            <div class="menu-item">
            <p>Krevetės ir kalmarai</p>
            <span>15</span>
            </div>
            <div class="menu-item">
            <p>Vištienos sparneliai</p>
            <span>10</span>
            </div>
        </div>
        </section>
    `;
    pageContainer.appendChild(menuPage);
<<<<<<< HEAD
})();
=======
};
>>>>>>> main
