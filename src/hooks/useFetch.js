import { useEffect, useState } from "react";
const API_URL =
  "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/";
const API_KEY = process.env.REACT_APP_API_KEY;
const useFetch = (trackSearch, id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ state: false, msg: "" });
  const [requestStatus, setRequestStatus] = useState("");
  const gettingTracks = async () => {
    let condition = trackSearch
      ? `track.search?q_track=${trackSearch}&`
      : `chart.tracks.get?`;
    setLoading(true);
    try {
      let response;
      if (id) {
        response = await fetch(`${API_URL}track.lyrics.get?track_id=${id}
        &apikey=${API_KEY}`);
      } else {
        response =
          await fetch(`${API_URL}${condition}page=1&page_size=12&apikey=${API_KEY}
      `);
      }
      console.log(response);
      if (!response.ok) throw new Error();
      const fetchedData = await response.json();
      console.log(fetchedData);
      setData(fetchedData.message.body);
      setRequestStatus(fetchedData.message.header.status_code);
      setError({ state: false, msg: "" });
    } catch (err) {
      setError({ state: true, msg: `${err.message}` });
    }
    setLoading(false);
  };

  useEffect(() => {
    gettingTracks();
  }, [trackSearch,id]);
  return { data, loading, error, requestStatus };
};

export default useFetch;
