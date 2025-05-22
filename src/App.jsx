import { Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import SubmissionPage from "./pages/SubmissionPage";
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/submission" element={<SubmissionPage />} />
    </Routes>
  );
}

export default App;