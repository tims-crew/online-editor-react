import React, { useEffect, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] =  useLocalStorage('javascript', '');
  const [srcDoc, setSrcDoc] = useState()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        `
      )
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className="App">
      <div className="pane top-pane">
        <Editor 
          // label="HTML"
          language="xml"
          label="html"
          value={html}
          onChange={setHtml}
        />

        <Editor 
          language="css"
          label="css"
          value={css}
          onChange={setCss}
        />

        <Editor 
          language="javascript"
          label="js"
          value={js}
          onChange={setJs}
        />
        {/* <Editor />
        <Editor /> */}
      </div>
      <div className="bottom-pane">
        <iframe
          srcDoc={srcDoc}
          frameBorder={'0'}
          width={'100%'}
          height={'100%'}
        />
      </div>
    </div>
  );
}

export default App;
