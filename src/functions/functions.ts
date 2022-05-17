import fs from "fs"
import path from "path";
export const lerJson = (pathFile: string) => {
  // @ts-ignore
  return JSON.parse(fs.readFileSync(pathFile));   
}

export const writeJSON = (pathFile: string, data: any) => {
    fs.writeFileSync(pathFile, JSON.stringify(data));
};


