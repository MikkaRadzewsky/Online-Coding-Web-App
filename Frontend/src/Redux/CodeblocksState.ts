import { createStore } from "redux";
import CodeBlockModel from "../Models/CodeBlockModel";

export class CodeblocksState {
  public codeblocks: CodeBlockModel[] = [];
}

export enum CodeblocksActionType {
  FetchCodeblocks = "FetchCodeblocks",
  //AddCodeblock = "AddCodeblock",
  UpdateCodeblock = "UpdateCodeblock",
  //DeleteCodeblock = "DeleteCodeblock",
  EmptyStore = "EmptyStore",
}

export interface CodeblocksAction {
  type: CodeblocksActionType;
  payload: any;
}

export function codeblocksReducer(
  currentState = new CodeblocksState(),
  action: CodeblocksAction
): CodeblocksState {
  const newState = { ...currentState };

  switch (action.type) {
    case CodeblocksActionType.FetchCodeblocks:
      newState.codeblocks = action.payload;
      break;

    // case CodeblocksActionType.AddCodeblock:
    //     newState.codeblocks.push(action.payload);
    //     break;

    case CodeblocksActionType.UpdateCodeblock:
      const indexToUpdate = newState.codeblocks.findIndex(
        (c) => c.codeblockId === action.payload.id
      );
      if (indexToUpdate >= 0) {
        newState.codeblocks[indexToUpdate] = action.payload;
      }
      break;

    // case CodeblocksActionType.DeleteCodeblock:
    //     const indexToDelete = newState.codeblocks.findIndex(c => c.codeblockId === action.payload);
    //     if(indexToDelete >= 0) {
    //         newState.codeblocks.splice(indexToDelete, 1);
    //     }
    //     break;
    case CodeblocksActionType.EmptyStore:
      newState.codeblocks = action.payload;
      break;
  }

  return newState;
}

export const codeblocksStore = createStore(codeblocksReducer);
