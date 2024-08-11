import React from "react";
import {CodeBlock} from "react-code-blocks";
import {topLevelHookInCustomHook, topLevelHookInFC} from "../../code/hooksCode";

export default function HooksDescription() {
  return (
      <div style={{textAlign: "left", margin: 20}}>
        <h2>Hooks</h2>
        <ul>
          <li style={{listStyle: "none"}}>
            <h4>Was sind Hooks</h4>
          </li>
          <ul>
            <li>Hooks sind Javascript Funktionen für wiederverwendbare UI Logik.</li>
            <li>Funktionen, deren Namen mit use beginnen, werden in React Hooks genannt.</li>
          </ul>
          <li style={{listStyle: "none"}}>
            <h4>Was ist zu beachten</h4>
          </li>
          <ul>
            <li>
              Hooks dürfen nur an bestimmten Stellen aufgerufen werden.<br/>
              ✅ Auf der obersten Ebene, im Body einer Function Component.<br/>
              <CodeBlock language={'tsx'} text={topLevelHookInFC}/>
              ✅ Auf der obersten Ebene, im Body eines Custom Hook.
              <CodeBlock language={'tsx'} text={topLevelHookInCustomHook}/>
            </li>
            <li>
              Hooks sollten in den folgenden Fällen NICHT verwendet werden.<br/>
              🔴 Innerhalb von Bedingungen und Schleifen.<br/>
              🔴 Nach einem return Statement einer Bedingung.<br/>
              🔴 Nicht im Event Handler.<br/>
              🔴 In einer Klassenbasierten Komponente.<br/>
              🔴 Innerhalb von Funktionen, die an useMemo, useReducer oder useEffect übergeben werden<br/>
              🔴 Nicht innerhalb von try/catch/finally Blocks.<br/>
              🔴 Hooks sollten nicht als Property an eine Komponente übergeben werden.
            </li>
          </ul>
          <li style={{listStyle: "none"}}>
            <h4>Welche Hooks gibt es</h4>
          </li>
          <ul>
            <li style={{listStyle: "none"}}><h5>useState()</h5></li>
            <ul>
              <li>Dient der lokalen Verwaltung von States.</li>
            </ul>
          </ul>
          <ul>
            <li style={{listStyle: "none"}}><h5>useEffect()</h5></li>
            <ul>
              <li>Ermöglicht Seiteneffekte und zum Beispiel das Laden von Daten beim Erstellen der Komponente.</li>
              <li>Der useEffect Hook ist für die Functional-Components das was die Lifecycle-Methoden
                (componentDidMount,
                componentDidUpdate, componentWillUnmount) für die Klassenkomponenten sind.
              </li>
            </ul>
          </ul>
          <ul>
            <li style={{listStyle: "none"}}><h5>useReducer()</h5></li>
            <ul>
              <li>Behandlung von States</li>
              <li>Bietet die Möglichkeit eine komplexere Statelogik zu verwalten.</li>
            </ul>
          </ul>
          <ul>
            <li style={{listStyle: "none"}}><h5>useCallback()</h5></li>
            <ul>
              <li>Zur Geschwindigkeitsoptimierung, die dabei hilft, Callback-Methoden zu memoisieren, damit sie nicht bei jedem Rendering generiert werden müssen.</li>
            </ul>
          </ul>
          <ul><h5>...</h5></ul>
        </ul>
      </div>
  )
}
