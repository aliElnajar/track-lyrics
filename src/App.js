import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TrackLyrics from "./pages/TrackLyrics";
function App() {
  return (
    <Container width="1000px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<TrackLyrics />} />
      </Routes>
    </Container>
  );
}

export default App;
