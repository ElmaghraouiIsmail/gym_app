export const exercicesdb={
    method: 'GET',
    headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': 'ba92621e2dmsh0892cabfe12325ep114edejsna154271a1d5b'
  }
};
export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ba92621e2dmsh0892cabfe12325ep114edejsna154271a1d5b',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();

    return data;
}