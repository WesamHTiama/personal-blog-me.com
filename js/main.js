
const loader = document.querySelector(".loader"),
  settingBox = document.querySelector(".setting-box"),
  subscribeVaild = document.querySelector("#email"),
  scroolBtn = document.querySelector(".to-top-butotn"),
  stateSection = document.getElementById("stats"),
  stats = document.querySelectorAll(".stats .num"),
  section = document.querySelector(".skills"),
  spans = document.querySelectorAll(".progress span"),
  body = document.querySelector("body"),
  toggleBtn = document.querySelector(".toggle-btn"),
  getMood = window.localStorage.getItem("mode");
(document.onreadystatechange = () => {
  switch (document.readyState) {
    case "complete":
      loader.classList.add("remove");
      break;
    case "interactive":
    case "loading":
      loader.classList.add("show");
  }
}),
  console.log(
    "%cWelcom To Wesam%cBlog",
    "color:red; font-size:40px",
    "background-color:blue;color:white; font-size:40px"
  ),
  (document.querySelector(".icon").onclick = (e) => {
    settingBox.classList.toggle("show"), icon.classList.toggle("fa-spin");
  }),
  localStorage.getItem("colors") &&
    (document.documentElement.style.setProperty(
      "--main-color",
      localStorage.getItem("colors")
    ),
    console.log(
      `The Hex Code For The Color I present Now Is \`${localStorage.getItem(
        "colors"
      )}\``
    ));
let colorsList = document.querySelectorAll(".colors-options li");
colorsList.forEach((e) => {
  e.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    ),
      localStorage.setItem("colors", e.target.dataset.color);
  });
}),
  (document.forms[0].onsubmit = function (e) {
    let t = !1;
    "" !== subscribeVaild && ((t = !0), console.log("true")),
      !1 === t && (e.preventDefault(), console.log("prevent"));
  });
const userName = document.getElementById("name"),
  email = document.getElementById("email"),
  phoneNo = document.getElementById("phone"),
  textArea = document.getElementById("user-message");
document.forms[1].onsubmit = function (e) {
  ("" === userName.value ||
    "" === email.value ||
    "" === phoneNo.value ||
    "" === textArea.value) &&
    e.preventDefault();
};
let started = !1;
function increaseNums(e) {
  let t = e.dataset.goal,
    o = setInterval(() => {
      e.textContent++, e.textContent === t && clearInterval(o);
    }, 500 / t);
}
(window.onscroll = function () {
  window.scrollY >= 623
    ? (scroolBtn.style.display = "block")
    : (scroolBtn.style.display = "none"),
    (scroolBtn.onclick = function () {
      window.scrollTo({ top: 0, right: 4, behavior: "smooth" });
    }),
    window.scrollY >= stateSection.offsetTop &&
      (started ||
        stats.forEach((e) => {
          increaseNums(e);
        }),
      (started = !0)),
    window.scrollY >= section.offsetTop &&
      spans.forEach((e) => {
        e.style.width = e.dataset.width;
      });
}),
  toggleBtn.addEventListener("click", () => {
    if (
      (body.classList.toggle("dark"),
      toggleBtn.classList.toggle("active"),
      !body.classList.contains("dark"))
    )
      return window.localStorage.setItem("mode", "light");
    window.localStorage.setItem("mode", "dark");
  }),
  getMood &&
    "dark" === getMood &&
    (body.classList.add("dark"), toggleBtn.classList.add("active"));
