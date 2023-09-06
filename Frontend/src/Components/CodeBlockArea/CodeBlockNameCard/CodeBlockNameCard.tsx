import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CodeBlockModel from "../../../Models/CodeBlockModel";
import appConfig from "../../../Utils/Config";
import "./CodeBlockNameCard.css";

interface CodeblockCardProps {
  codeblock: CodeBlockModel;
}

function CodeBlockNameCard(props: CodeblockCardProps): JSX.Element {
  return (
    <div className="CodeBlockNameCard Box font-link">
      <NavLink to={"/codeblocks/" + props.codeblock.codeblockId}>
        <h2>{props.codeblock.name}</h2>
      </NavLink>
    </div>
  );
}

export default CodeBlockNameCard;
