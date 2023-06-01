import React from "react";
import ListItem from "./ListItem";
import ThemeSwitch, { ThemeProvider } from "./ThemeSwitch";

class App extends React.Component {
  state = {
    selectedItems: [],
  };

  listItemChangeHandler = (item) => {
    //
    let newSelectedItems = [...this.state.selectedItems];

    if (newSelectedItems.includes(item)) {
      newSelectedItems = this.state.selectedItems.filter(
        (theItem) => item !== theItem
      );
    } else {
      newSelectedItems.push(item);
    }

    this.setState({
      selectedItems: newSelectedItems,
    });
  };

  render() {
    return (
      <ThemeProvider>
        <div className="min-h-screen flex justify-center items-center bg-slate-200">
          <ThemeSwitch className="absolute top-10 right-10" />
          <div className="flex max-w-3xl mx-auto w-full gap-x-8">
            <div className="w-1/2">
              <h2 className="text-2xl font-bold">Apple Products</h2>
              <ul className="mt-4 flex flex-col gap-y-3">
                {["iPhone", "iPad", "MacBook", "Apple TV", "HomePod"].map(
                  (item) => {
                    return (
                      <ListItem
                        key={item}
                        active={this.state.selectedItems.includes(item)}
                        onChange={this.listItemChangeHandler}
                      >
                        {item}
                      </ListItem>
                    );
                  }
                )}
              </ul>
              <p className="mt-3 text-slate-400 text-sm">
                {this.state.selectedItems.length} item(s) selected
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-bold text-slate-400">
                Selected Products
              </h2>
              <p className="mt-4 text-slate-800 text-lg">
                {this.state.selectedItems.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
