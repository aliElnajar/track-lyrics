import Results from "../components/Results";
import { useState } from "react";
import Search from "../components/Search";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const [trackSearch, setTrackSearch] = useState("");

  const { data, error, loading } = useFetch(trackSearch);

  return (
    <div>
      <Search setTrackSearch={setTrackSearch} />
      <Results data={data} error={error} loading={loading} />
    </div>
  );
};

export default Home;
