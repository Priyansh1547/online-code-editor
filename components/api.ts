import axios from "axios";
import { LANGUAGE } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (
  language: keyof typeof LANGUAGE,
  sourceCode: any
) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
