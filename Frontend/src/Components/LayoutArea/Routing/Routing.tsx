import { Navigate, Route, Routes } from "react-router-dom";
import Insert from "../../CodeBlockArea/CodeBlockComponent/CodeBlock";
import CodeBlockPage from "../../CodeBlockArea/CodeBlockPage/CodeBlockPage";
import List from "../../CodeBlockArea/CodeBlockPage/CodeBlockPage";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/codeblocks/:codeblockId" element={<CodeBlockPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Routing;
