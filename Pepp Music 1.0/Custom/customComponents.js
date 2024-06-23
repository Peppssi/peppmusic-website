class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <nav class="header-nav">
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
    </label>
    <label ><a class="header-logo" href="/index.html">Pepp<a/></label>
    <ul class="header-ul">
        <li class="header-li"><a class="header-a" id="contact" href="../Contact/contact.html">BOKA</a></li>
        <li class="header-li"><a class="header-a" href="../About/about.html">Om mig</a></li>
        <li class="header-li"><a class="header-a" href="../Gallery/gallery.html">Galleri</a></li>
    </ul>
</nav>`;
  }
}

class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<footer class="footer-container">
        <div class="footer-contact-container">
          <p>0722076090</p>
          <p>kontakt@peppmusic.se</p>
        </div>
        <p id="footer-copyright"> Copyright © 2024 Jesper Follin. Alla rättigheter förbehålls. </p>
      </footer>`;
  }
}

customElements.define("my-header", MyHeader);
customElements.define("my-footer", MyFooter);
