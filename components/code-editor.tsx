"use client";
import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";
import { LanguageSelector } from "./languageSelector";
import { Output } from "./output";
import { Button } from "@/components/ui/button";
export default function CodeEditor() {
  const editorRef = useRef();
  const [language, setLanguage] = useState("javascript");

  const onSelect = (language: any) => {
    setLanguage(language);
  };

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <main className="bg-gray-900 text-gray-200 font-sans leading-normal tracking-normal h-70  flex flex-col md:flex-row w-full">
      <div className="flex flex-1 overflow-hidden flex-row">
        <aside className="bg-gray-800  w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r border-gray-700">
          <h2 className="text-xl font-bold mb-4">Code Editor</h2>
          <div className="dark mb-2 border-gray-900 flex flex-row items-center">
            <LanguageSelector language={language} onSelect={onSelect} />
          </div>
          <Editor
            height="90vh"
            language={language}
            defaultValue="// write your code here"
            theme="vs-dark"
            onMount={onMount}
            className="w-full md:h-full h-64 p-2 border rounded font-mono text-sm bg-gray-900 text-gray-200 border-gray-700"
          />
        </aside>
        <Output editorRef={editorRef} language={language} />
      </div>
    </main>
  );
}
