import { executeCode } from "./api";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Output({ editorRef, language }: any) {
  const [output, setOutput] = useState("");
  const [res, setRes] = useState(false);
  const [loader, setLoader] = useState(false);

  if (res) {
    setLoader(false);
    setRes(false);
  }
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    setTimeout(() => setRes(true), 2000);
    setLoader(true);
    try {
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
    } catch (error) {}
  };
  return (
    <>
      <main className="flex-1 p-4 ">
        <h2 className="text-xl font-bold mb-4">Output Display</h2>
        <Button
          className="mb-3 h-9 w-24 text-center dark"
          onClick={runCode}
          variant="outline"
        >
          {!loader && <>run code</>}
          {loader && (
            <div className="flex w-full items-center justify-center  h-64">
              <div className="animate-spin rounded-full border-2 border-gray-300 border-t-gray-900 h-6 w-6" />
            </div>
          )}
        </Button>
        <div className="bg-gray-800 p-4 border rounded h-full  border-gray-700">
          <div className="w-full h-full border-none bg-gray-900">
            <div>{output}</div>
          </div>
        </div>
      </main>
    </>
  );
}
