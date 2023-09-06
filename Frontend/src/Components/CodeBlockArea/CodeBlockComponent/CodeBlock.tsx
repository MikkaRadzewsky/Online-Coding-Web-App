import "./CodeBlock.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataService from "../../../Services/DataService";
import CodeBlockModel from "../../../Models/CodeBlockModel";
import notifyService from "../../../Services/NotifyService";
import e from "cors";
import Prism from "prismjs";
import { codeblocksStore } from "../../../Redux/CodeblocksState";
import RoleModel from "../../../Models/RoleModel";
import Spinner from "../../SharedArea/Spinner/Spinner";

interface CodeBlockProps {
  codeblockId: number;
  name: string;
  language: string;
  code: string;
}

function CodeBlock(Prop: CodeBlockProps): JSX.Element {
  const [currentCodeblock, setCurrentCodeblock] = useState<CodeBlockModel>();
  const [codeText, setCodeText] = useState<string>("");
  const [userCount, setUserCount] = useState(0);
  const [userRole, setUserRole] = useState<RoleModel>();
  const params = useParams();

  useEffect(() => {
    const id = +params.codeblockId;
    setUserCount((prevCount) => prevCount + 1);
    dataService
      .getOneCodeblock(id)
      .then((codeblock) => {
        setCodeText(codeblock.code);
        setCurrentCodeblock(codeblock);
      })
      .catch((err) => notifyService.error(err));

    // const unsubscribe = codeblocksStore.subscribe(async () => {
    //   Prism.highlightAll();
    // });
    // return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userCount === 1) {
      setUserRole(RoleModel.Mentor);
    } else {
      setUserRole(RoleModel.User);
    }

    console.log(userRole);
  }, [userCount]);

  //   useEffect(() => {
  //     Prism.highlightAll();
  //   }, [codeText]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newCode = e.target.textContent;
    updateCode(newCode);
  };

  async function updateCode(newCode: string) {
    const newCodeblock: CodeBlockModel = {
      codeblockId: Prop.codeblockId,
      name: Prop.name,
      language: Prop.language,
      code: newCode,
    };
    await dataService.updateCodeblock(newCodeblock);
  }

  return (
    <div className="wrapper">
      {!userRole && <Spinner />}

      {userRole && (
        <>
          <SyntaxHighlighter
            language="javascript" // to enable only js
            style={prism}
            className="CodeBlock"
            contentEditable={userRole === RoleModel.Mentor ? false : true}
            //flip this for testing...
            onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              handleCodeChange(e);
              //   Prism.highlightAll();
            }}
            // make the editable content error go away...
          >
            {codeText}
          </SyntaxHighlighter>
        </>
      )}
    </div>
  );
}

export default CodeBlock;
