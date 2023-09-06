import axios from "axios";
import CodeBlockModel from "../Models/CodeBlockModel";
import {
  CodeblocksActionType,
  codeblocksStore,
} from "../Redux/CodeblocksState";
import appConfig from "../Utils/Config";

class DataService {
  public async getAllCodeblocks(): Promise<CodeBlockModel[]> {
    let codeblocks = codeblocksStore.getState().codeblocks;
    if (codeblocks.length === 0) {
      const response = await axios.get<CodeBlockModel[]>(
        appConfig.codeblocksUrl
      ); // AJAX
      codeblocks = response.data;
      codeblocksStore.dispatch({
        type: CodeblocksActionType.FetchCodeblocks,
        payload: codeblocks,
      });
    }
    return codeblocks;
  }

  public async getOneCodeblock(codeblockId: number): Promise<CodeBlockModel> {
    const response = await axios.get<CodeBlockModel>(
      appConfig.codeblocksUrl + codeblockId
    );
    const codeblock = response.data;

    return codeblock;
  }

  public async updateCodeblock(codeblock: CodeBlockModel): Promise<void> {
    const response = await axios.put<CodeBlockModel>(
      appConfig.codeblocksUrl + codeblock.codeblockId,
      codeblock
    );
    const updatedCodeblock = response.data;
    codeblocksStore.dispatch({
      type: CodeblocksActionType.UpdateCodeblock,
      payload: updatedCodeblock,
    });
  }
}

const dataService = new DataService();

export default dataService;
