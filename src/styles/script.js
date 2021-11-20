let sidebar = document.querySelector(".sidebar");
let overlay = document.querySelector(".overlay");
let switchButton = document.querySelector(".switch-btn");
let serviceButtons = document.querySelectorAll(".server-btn");
let supportButton = document.querySelector(".support-btn");
let content = document.querySelector(".content");

switchButton.addEventListener("click", openSideBar);

function openSideBar(event) {
    sidebar.style.left = "0";
    overlay.style.display = "flex";
    event.target.style.marginRight = "10px";
    event.target.removeEventListener("click", openSideBar);
    event.target.addEventListener("click", closeSideBar);
    supportButton.style.left = "auto";
}

function closeSideBar(event) {
    sidebar.style.left = "-20%";
    overlay.style.display = "none";
    event.target.style.marginRight = "-50px";
    event.target.removeEventListener("click", closeSideBar);
    event.target.addEventListener("click", openSideBar);
}

serviceButtons.forEach(cb => cb.addEventListener("click", function (event) {
    switchButton.click();
    supportButton.style.left = "10px";
    Array.from(content.children).forEach(c => c.remove());
    let serviceFrame = document.createElement("iframe");
    serviceFrame.classList.add("service-frame");
    serviceFrame.src = event.target.value;
    content.append(serviceFrame);
    content.style.justifyContent = "flex-end";
}));


