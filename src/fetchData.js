const discover = 'https://api.themoviedb.org/3/discover/movie?api_key=eace91482cfa11d0c5985461228e1380&language=es&sort_by=popularity.desc&include_adult=false&page=1';
const key = 'eace91482cfa11d0c5985461228e1380';


export async function fetchData(urlApi, varStrge, load) {
  load = true
  const response = await fetch(urlApi);
  const jsonResponse = await response.json(); 
  varStrge = jsonResponse.results;
  load = false
}
