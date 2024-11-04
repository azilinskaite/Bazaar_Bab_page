import "./style.css";
import { pageLoad } from "./pageload";
import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";

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
