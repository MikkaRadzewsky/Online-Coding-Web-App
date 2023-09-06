import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import CodeBlockModel from "../4-models/codeblock-model";
import { ResourceNotFoundErrorModel } from "../4-models/error-models";

// Get all codeblocks:
async function getAllCodeblocks(): Promise<CodeBlockModel[]> {
  const sql = ` SELECT *
                    FROM codeblocks`;

  const codeblocks = await dal.execute(sql, {});
  return codeblocks;
}

//Get one codeblock:
async function getOneCodeblock(codeblockId: number) {
  const sql = `
              SELECT codeblockId, name, language, code FROM codeblocks WHERE codeblockId = ?
          `;
  const codeblocks = await dal.execute(sql, [codeblockId]);
  const codeBlock = codeblocks[0];
  if (!codeBlock) throw new ResourceNotFoundErrorModel(codeBlock);
  return codeBlock;
}

//Edit one codeblock:
async function updateCodeblock(
  codeblock: CodeBlockModel
): Promise<CodeBlockModel> {
  const sql = `
    UPDATE codeblocks
    SET code = ?
    WHERE codeblockId = ?
  `;
  console.log(JSON.stringify(codeblock));

  const info: OkPacket = await dal.execute(sql, [
    // codeblock.name,
    // codeblock.language,
    codeblock.code,
    codeblock.codeblockId,
  ]);

  if (info.affectedRows === 0)
    throw new ResourceNotFoundErrorModel(codeblock.codeblockId);
  return codeblock;
}

export default {
  getAllCodeblocks,
  getOneCodeblock,
  updateCodeblock,
};
