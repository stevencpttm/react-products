import React from "react";
import ListItemText from "./ListItemText";

import { ThemeContext } from "./ThemeSwitch";

class ListItem extends React.Component {
  listClass = (theme) => {
    let themeClasses = {
      light: {
        active: "bg-slate-800 text-white",
        inactive: "bg-white hover:bg-slate-100",
      },
      dark: {
        active: "bg-slate-600 text-white",
        inactive: "bg-slate-200 hover:bg-slate-400",
      },
    };

    return themeClasses[theme][this.props.active ? "active" : "inactive"];
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <li
            onClick={() => {
              this.props.onChange(this.props.children);
            }}
            className={`px-6 py-4 rounded-lg shadow hover:cursor-pointer transition ${this.listClass(
              theme
            )}`}
          >
            <ListItemText>{this.props.children}</ListItemText>
          </li>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ListItem;
