import React from "react";

export default function ReactDescriptionContent() {
  return (
      <div style={{display: "flex", flexDirection: "column", margin: 10}}>
        <ul>
          <h4>Was ist React</h4>
          <li>React ist eine Javascript Bibliothek für Web und native User-Interfaces.</li>
          <li>React schreibt nicht vor wie man routing oder Datenabrufe durchführen muss.</li>
          <li>Es gibt Frameworks wie Next.js oder Remix die für React verwendet werden können.</li>
          <li>Mit React-Native hat man die Möglichkeit native Apps für iOS und Android zu entwickeln. React und
            Rect-Native unterscheiden sich lediglich anhand der Komponenten Tags (z.B. <code lang={'html'}>div =
              View</code>).
          </li>
          <li>Es sind zahlreiche Komponenten Bibliotheken verfügbar.</li>

          <h4>Unter der Haube</h4>
          <li>Der Virtual DOM ist eine zentrale Komponente in React. Er ist eine in-memory-Repräsentation des
            tatsächlichen DOMs. Jedes Mal, wenn sich der Zustand einer Komponente ändert, erstellt React einen neuen
            VDOM-Baum, der die aktualisierte Benutzeroberfläche repräsentiert.
          </li>
          <li>Nachdem der neue VDOM-Baum erstellt wurde, vergleicht React ihn mit dem vorherigen VDOM-Baum. Dieser
            Prozess wird als "Reconciliation" bezeichnet. React ermittelt die Unterschiede (diffs) und aktualisiert
            nur die tatsächlichen DOM-Elemente, die geändert wurden, was zu einer höheren Performance führt.
          </li>
          <li>Funktionale und Klassenkomponenten</li>
        </ul>
      </div>
  )
}
