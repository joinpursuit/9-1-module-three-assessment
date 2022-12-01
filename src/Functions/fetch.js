
// function to fetch for json data
export function fetchData (file) {
  return fetch (`/${file}.json`).then(resp => resp.json())
}

