import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons';
import { EditorView } from "@codemirror/view";

export default function Editor(props) {
  const [open, toggleOpen] = useState(true);
  const { language, label, value, onChange } = props;

  let myTheme = EditorView.theme(
    {
      "&": {
        color: "white",
        backgroundColor: "#034",
      },
      ".cm-content": {
        caretColor: "#0e9",
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9",
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074",
      },
      ".cm-gutters": {
        backgroundColor: "#045",
        color: "#ddd",
        border: "none",
      },
    },
    { dark: true }
  );

  function handleChange() {
    onChange();
  }

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {label}
        <button className="expand-collapse-btn">
          <FontAwesomeIcon icon={open ? faExpandAlt : faCompressAlt}/>
        </button>
      </div>


      <CodeMirror
        value={value}
        className="code-mirror-wrapper"
        width="29rem"
        height="100%"
        language={language}
        onChange={onChange}
        theme={myTheme}
        options={{
          mode: "xml",
          lineWrapping: true,
          lint: true,
        }}
      />
    </div>
  );
}
