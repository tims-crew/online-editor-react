import React, { useEffect, useState } from 'react';
import './App.css';
import Editor from './components/Editor';

function App() {
  const [srcDoc, setSrcDoc] = useState()
  const [html, setHtml] = useState();
  const [css, setCss] = useState();
  const [js, setJs] = useState();


  useEffect(() => {
    setSrcDoc(`
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    `
    )
  })

  return (
    <div className="App">
      <div className="pane top-pane">
        <Editor />
        <Editor />
        <Editor />
      </div>
      <div className="bottom-pane">
        <iframe
          srcDoc={srcDoc}
          frameBorder={'0'}
          width={'100%'}
          height={'50%'}
        />
      </div>
    </div>
  );
}

export default App;
