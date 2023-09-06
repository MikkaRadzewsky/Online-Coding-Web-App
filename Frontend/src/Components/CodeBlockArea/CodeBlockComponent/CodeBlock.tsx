import "./CodeBlock.css";
import Editor from "react-simple-code-editor";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataService from "../../../Services/DataService";
import CodeBlockModel from "../../../Models/CodeBlockModel";
import notifyService from "../../../Services/NotifyService";
import e from "cors";
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

  //add roles to server side... with cookies maybe?

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
    // code to update in real time like socket?
    // });
    // return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userCount === 1) {
      setUserRole(RoleModel.Mentor);
    } else {
      setUserRole(RoleModel.User);
    }
  }, [userCount]);

  const handleCodeChange = (code: string) => {
    let newCode = code;
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
          <Editor
            value={codeText}
            onValueChange={(code) => {
              setCodeText(code);
              handleCodeChange(code);
            }}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              color: "white",
            }}
            readOnly={userRole === RoleModel.Mentor ? true : false}
          />
        </>
      )}
    </div>
  );
}

export default CodeBlock;
