class CodeBlockModel {
  public codeblockId: number;
  public name: string;
  public language: string;
  public code: string;

  public constructor(codeblock: CodeBlockModel) {
    this.codeblockId = codeblock.codeblockId;
    this.name = codeblock.name;
    this.language = codeblock.language;
    this.code = codeblock.code;
  }
}

export default CodeBlockModel;
