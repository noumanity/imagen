const template = document.createElement('template');
let tailwindlink = document.createElement('link');
    tailwindlink.setAttribute('rel', 'stylesheet');
    tailwindlink.setAttribute('href', 'http://localhost:4000/assets/css/style.css');



template.innerHTML=`
  <div class="user-card">
    <h3 class="text-pink-800"></h3>
    <img></img>
  </div>
`

class UserCard extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.appendChild(tailwindlink);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }
}

window.customElements.define('user-card',UserCard);

