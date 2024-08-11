import React from "react";
import {CodeBlock} from "react-code-blocks";
import {classComponentCode, functionComponentCode} from "../../code/componentCode";

export default function ComponentDescription() {
  return (
      <div style={{textAlign: "left", margin: 20}}>
        <h2>Components</h2>
        <li style={{listStyle: "none"}}>React-Komponenten sind normale JavaScript-Funktionen, der Name einer Komponente muss mit einem
          Großbuchstaben beginnen, sonst funktionieren sie nicht.
        </li>
        <h4>Was gibt es für Komponenten</h4>
        <ul>
          <li style={{listStyle: "none"}}>
            <h4>Class Components</h4>
            <ul>
              <CodeBlock language={'tsx'} text={classComponentCode}/>
            </ul>
          </li>
          <li style={{listStyle: "none"}}>
            <h4>Function Components</h4>
            <ul>
              <CodeBlock language={'tsx'} text={functionComponentCode}/>
            </ul>
          </li>
        </ul>
        <h4>Controlled und Uncontrolled</h4>
        <ul>
          <li style={{listStyle: "none"}}><h4>Controlled</h4></li>
          <li>Der Zustand wird durch einen React-State (z.B. useState) verwaltet.</li>
        </ul>
        <ul>
          <li style={{listStyle: "none"}}><h4>Uncontrolled</h4></li>
          <li>Zustände werden direkt im DOM gespeichert und bei Bedarf über refs (useRef) abgerufen.</li>
        </ul>
      </div>
  )
}
