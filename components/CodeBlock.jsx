import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ code, language }) => {
  return (
    <div className="rounded-3xl shadow h-fit overflow-hidden">
      <div className="flex__center h-[50px] !justify-start py-0 px-5 bg-[--bg-secondary-rgb] bg-opacity-60">
        <span className="size-[0.7rem] min-w-[0.7rem] max-w-[0.7rem] min-h-[0.7rem] max-h-[0.7rem] rounded-full bg-[#33c648]"></span>
        <span className="size-[0.7rem] min-w-[0.7rem] max-w-[0.7rem] min-h-[0.7rem] max-h-[0.7rem] rounded-full bg-[#ffa500]"></span>
        <span className="size-[0.7rem] min-w-[0.7rem] max-w-[0.7rem] min-h-[0.7rem] max-h-[0.7rem] rounded-full bg-[#fc605b]"></span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={a11yLight}
        customStyle={{
          background: "rgba(var(--bg-base-rgb),0.6)",
          color: "var(--color-primary-light)",
          padding: "20px",
          borderTopWidth: "0.5px",
          borderTop: "solid",
          borderTopColor: "#595858a1",
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
