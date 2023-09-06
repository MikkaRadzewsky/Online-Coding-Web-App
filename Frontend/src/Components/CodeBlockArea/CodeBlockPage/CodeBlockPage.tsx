import "./CodeBlockPage.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import CodeBlock from "../CodeBlockComponent/CodeBlock";
import { useEffect, useRef, useState } from "react";
import CodeBlockModel from "../../../Models/CodeBlockModel";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import Spinner from "../../SharedArea/Spinner/Spinner";
import { Input } from "@mui/material";

function CodeBlockPage(): JSX.Element {
  const params = useParams();
  const [codeblock, setCodeblock] = useState<CodeBlockModel>();
  const [loading, setLoading] = useState<boolean>(true);
  // const navigate = useNavigate();

  useEffect(() => {
    console.log(params);

    const id = +params.codeblockId;
    dataService
      .getOneCodeblock(id)
      .then((codeblock) => setCodeblock(codeblock))
      .catch((err) => notifyService.error(err));
  }, []);

  function reRenderCodeBlock() {
    console.log("rerender...");
  }

  return (
    <div className="CodeBlockPage">
      {!codeblock && <Spinner />}

      {codeblock && (
        <>
          <NavLink to="/home">Lobby</NavLink>
          <hr />
          <div onChange={reRenderCodeBlock}>
            <h1>{codeblock.name}</h1>
            <CodeBlock
              codeblockId={codeblock.codeblockId}
              code={codeblock.code}
              language={codeblock.language}
              name={codeblock.name}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default CodeBlockPage;
