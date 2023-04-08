import { UI } from "./view.js";
//
function tabClick(e) {
  e.preventDefault();
  UI.TAB_LINKS.forEach((item) => item.classList.remove("active"));
  e.target.classList.add("active");

  UI.CONTENT_COLLECTION.forEach((item) => {
    item.classList.add("hide");
  });

  document.getElementById(e.target.dataset.tab_id).classList.remove("hide");
}

for (const item of UI.TAB_LINKS) {
  item.addEventListener("click", (e) => tabClick(e));
}

function openModal(e) {
  e.preventDefault();
  UI.MODAL_FIRST.classList.remove("hide");
}

function closeModalFirst(e) {
  e.preventDefault();
  UI.MODAL_FIRST.classList.add("hide");
  UI.MODAL_THANKS.classList.remove("hide");
  setInterval(() => showModalThanks(), 5000);
}

function closeModals() {
  UI.MODALS.forEach((item) => {
    item.classList.add("hide");
  });
}

function showModalThanks() {
  UI.MODAL_THANKS.classList.add("hide");
}

function scrollTo(e, id) {
  e.preventDefault();

  if (id === "link-1") {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  } else if (id === "link-2") {
    window.scrollTo({
      top: 1500,
      behavior: "smooth",
    });
  } else if (id === "link-3") {
    window.scrollTo({
      top: 2150,
      behavior: "smooth",
    });
  } else if (id === "link-4") {
    window.scrollTo({
      top: 4100,
      behavior: "smooth",
    });
  } else if (id === "link-5") {
    window.scrollTo({
      top: 4850,
      behavior: "smooth",
    });
  }
}

window.addEventListener(
  "scroll",
  function () {
    var top = this.scrollY;
    if (top >= 800) {
      UI.BUTTON_UP.classList.remove("hide");
    } else {
      UI.BUTTON_UP.classList.add("hide");
    }
  },
  false
);

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function getFormData() {
  const data = {
    name: UI.INPUT_NAME.value,
    phone: UI.INPUT_PHONE.value,
    email: UI.INPUT_EMAIL.value,
    comment: UI.INPUT_COMMENT.value,
    check: UI.INPUT_CHECK.checked,
  };

  console.log(data);
}

UI.IDEA_BUTTONS.forEach((item) => {
  item.addEventListener("click", (e) => openModal(e));
});

UI.BANNER_BUTTON.addEventListener("click", (e) => openModal(e));

UI.MODAL_BUTTON.addEventListener("click", (e) => {
  closeModalFirst(e), getFormData();
});

UI.MODAL_BUTTONS_CLOSE.forEach((item) => {
  item.addEventListener("click", closeModals);
});

UI.NAVIGATION_ITEMS.forEach((item) => {
  let id = item.getAttribute("id");
  item.addEventListener("click", (e) => scrollTo(e, id));
});

UI.BUTTON_UP.addEventListener("click", scrollUp);
