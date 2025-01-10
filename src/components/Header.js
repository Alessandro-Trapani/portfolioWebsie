export default function Header() {
  return (
    <>
      <div class="container-fluid m-0 p-0 headerContainer">
        <img
          className="header"
          id="header"
          src="../assets/sky.jpg"
          alt="logo"
        />
        <h2 class="welcomeText" id="WelcomeMessage"></h2>
      </div>
    </>
  );
}
