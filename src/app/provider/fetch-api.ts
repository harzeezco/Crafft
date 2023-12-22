const fetchOpenSeaAssets = async () => {
  // API endpoint URL
  const url = 'https://opensea13.p.rapidapi.com/assets/';

  // Query parameters
  const params = {
    collection_slug: 'cryptopunks',
    limit: '20',
  };

  // Request headers
  const headers = new Headers({
    'X-RapidAPI-Key': '22be4b36c3msh24261fc899433bdp1934b3jsn2e1fac9f1107',
    'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
  });

  // Construct the query string
  const queryString = new URLSearchParams(params).toString();

  // Make the HTTP request
  const response = await fetch(`${url}?${queryString}`, { headers });

  // Parse and return the JSON response
  const data = await response.json();

  return data;
};

export default fetchOpenSeaAssets;
