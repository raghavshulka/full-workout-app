export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'af778f7287msh9777c5e3e0c5ee2p11fd07jsn16ff1c68de45',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'af778f7287msh9777c5e3e0c5ee2p11fd07jsn16ff1c68de45',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};