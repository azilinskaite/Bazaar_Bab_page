export const pageLoad = (() => {
    //container
    const contentContainer = document.querySelector("#content");
  
    const header = document.createElement("header");
    header.innerHTML = `
    <header>
            <nav>
                <button data-tab-target="#home">Home,</button>
                <button data-tab-target="#menu">Menu,</button>
                <button data-tab-target="#about">About</button>
            </nav>
        </header>`;
  
      contentContainer.appendChild(header)
  })();