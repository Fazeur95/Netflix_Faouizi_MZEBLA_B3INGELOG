import React from "react";
import Select from "react-select";
import styled from "styled-components";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          <select name="languages">
            <option value="Fr">Français</option>
            <option value="Ang">Anglais</option>
          </select>
        </form>
      </div>
    );
  }
}

export default App;
