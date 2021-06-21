// your custom hook goes here
import { useState, useEffect } from "react";

const useCountry = (countryName) => {
  const [country, setCountry] = useState();
  const [error, setError] = useState(null);

  let url = `https://restcountries.eu/rest/v2/${
    countryName ? `name/${countryName}` : `all` 
  }`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (res) => setCountry(res),
        (reason) => setError(reason)
      );
  }, [url]);

  return [error, country];
};

export default useCountry;