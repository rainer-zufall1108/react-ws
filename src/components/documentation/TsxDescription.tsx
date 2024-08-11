import React from "react";
import {CodeBlock} from "react-code-blocks";
import {tsx} from "../../code/tsx";

export default function TsxDescription() {
  return (
      <div style={{margin: 10, textAlign: "left"}}>
        <h2>JSX/TSX</h2>
        <div style={{margin: 10}}>
          <h4>Was ist JSX/TSX</h4>
          <p>JSX (JavaScriptXml) oder TSX (TypeScriptXml) ist eine Syntaxerweiterung für Javascript die React verwendet
            um HTML Strukturen direkt in Javascript zu schreiben.</p>
          <p>Der JSX-Code wird von einem Transpiler wie Babel in reguläres JavaScript umgewandelt.</p>
          <CodeBlock text={tsx} language={'tsx'}/>
        </div>
      </div>
  )
}
