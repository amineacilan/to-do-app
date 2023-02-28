import React from "react";
import ContentFooter from "../ContentFooter";
import List from "./List";

function Content() {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

    <List></List>

      <ContentFooter></ContentFooter>
    </section>
  );
}

export default Content;
