import { LitElement, html, css } from 'lit-element';

export class MovieCard extends LitElement {
  static get styles() {
    return css`
      :host{
        color: white
      }
      .card{
        height:350px;
        width:190px;
        margin-top: 5px;
        display: table-caption;
        border: 1px solid black;
        border-radius: 10px;
        position: relative;
      }
      h3,p{
        background: rgba(0, 0, 0, 0.5);
        /* position: fixed;
        bottom: 0px; */
      }
      .cover{
        height:350px;
        width:190px;
        border-radius: 10px;
        /* object-fit: cover; */
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
    `
  }

  static get properties() {
    return { 
      title : {type : String},
      descrip : {type : String},
      img : {type : String},
     };
  }

  render() {
    const baseUrl = 'https://image.tmdb.org/t/p/original'
    return html`
      <div class="card">
        <h3>${this.title}</h3>
        <p>${this.descrip.slice(0,40)+'...'}</p>
        <img class="cover" src=${baseUrl+this.img}>
      </div>
      `
  }
}
customElements.define('movie-card', MovieCard);