import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CodeBlockModel from "../../../Models/CodeBlockModel";
import { codeblocksStore } from "../../../Redux/CodeblocksState";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Services/NotifyService";
import CodeBlockNameCard from "../../CodeBlockArea/CodeBlockNameCard/CodeBlockNameCard";
import "./Home.css";

function Home(): JSX.Element {
  const [codeblocks, setCodeblocks] = useState<CodeBlockModel[]>([]);

  useEffect(() => {
    dataService
      .getAllCodeblocks()
      .then((codeblocks) => setCodeblocks(codeblocks))
      .catch((err) => notifyService.error(err));

    const unsubscribe = codeblocksStore.subscribe(() => {
      setCodeblocks(codeblocksStore.getState().codeblocks);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="Home">
      <h1>Choose a code block:</h1>
      {codeblocks.map((c) => (
        <CodeBlockNameCard key={c.codeblockId} codeblock={c} />
      ))}
    </div>
  );
}

export default Home;
