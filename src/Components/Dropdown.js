import "./dropdown.css"

export default function Dropdown() {

  (function () {
    // Bind Click event to the drop down navigation button
    document.querySelector(".nav-button").addEventListener(
      "click",
      function () {
        /*  Toggle the CSS closed class which reduces the height of the UL thus 
              hiding all LI apart from the first */
        this.parentNode.parentNode.classList.toggle("closed");
      },
      false
    );
  })();

  return (
    <nav>
      <ul class="drop-down closed">
        <li><a href="#" class="nav-button">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Library</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}
