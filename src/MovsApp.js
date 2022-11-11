import { MovieCard } from './movie-card';
import { LitElement, html, css } from 'lit';
const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=eace91482cfa11d0c5985461228e1380&language=es&sort_by=popularity.desc&include_adult=false&page=1';

export class MovsApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      movs: { type: Array },
      loading: {type: Boolean}
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        font-size: calc(10px + 2vmin);
        color: #ffffff;
        margin: 0 auto;
        text-align: center;
      }
      main {
        flex-grow: 1;
      }
    `;
  }

  connectedCallback(){
    super.connectedCallback();
    if (!this.movs) {
      this.fetchData()
    }
  }

  async fetchData() {
    this.loading = true;
    const response = await fetch(discover);
    const jsonResponse = await response.json(); 
    this.movs = jsonResponse.results;
    this.loading = false;
  }

  // populateCards(movies) {
  //   movies.map(mov => {
  //     return html`<movie-card title=${mov.title} descrip=${mov.overview} img=${mov.poster_path}></movie-card>`
  //   })
  // }
  render() {
    return html`
      <main>
        <h1>Las mas populares</h1>
      </main>
      ${this.loading ? 
      html` <p>Loading</p>`
      : this.movs.map(mov => {
        return html`<movie-card title=${mov.title} descrip=${mov.overview} img=${mov.poster_path}></movie-card>`
      })}
    `;
  }
}
