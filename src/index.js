import "./style.css";
import { pageLoad } from "./pageload";
import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";

<<<<<<< HEAD
const content = document.querySelector("#content");
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

function clearContent() {
    pageContainer.innerHTML = "";
}

tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("red");
      });
      tab.classList.add("red");
      target.classList.add("active");
    })
  );

=======
function attachTabListeners() {
    const tabs = document.querySelectorAll("[data-tab-target]");
    tabs.forEach((tab) =>
      tab.addEventListener("click", handleTabClick)
    );
  }

  function handleTabClick(event) {
    const tab = event.target;
    const target = tab.dataset.tabTarget;
    
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = "";
  
    if (target === "#home") {
      renderHomePage();
    } else if (target === "#menu") {
      renderMenuPage();
    } else if (target === "#about") {
        renderAboutPage();
    }

    // Reattach listeners after rendering new content
    attachTabListeners(); 
  }

renderHomePage();
attachTabListeners();
>>>>>>> main
