export default function Header() {
  return (
    <>
      <img
        style={{ width: "100%", height: "auto" }}
        id="header"
        src="../assets/sky.jpg"
        alt="logo"
      />
      <h2 class="welcomeText" id="WelcomeMessage"></h2>
    </>
  );
}
window.addEventListener("load", () => {
  typeWriter("WelcomeMessage", "Welcome", 100);

  function typeWriter(id, txt, speed, i = 0) {
    if (i < txt.length) {
      document.getElementById(id).innerHTML += txt.charAt(i);
      setTimeout(() => typeWriter(id, txt, speed, i + 1), speed);
    }
  }
});
