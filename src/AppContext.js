import React from "react";

const ThemeContext = React.createContext();
const SettingContext = React.createContext();

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <SettingContext.Provider
          value={{ updateFrequency: 3600, update: () => {} }}
        >
          <Greeting />
        </SettingContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

class Greeting extends React.Component {
  render() {
    return (
      <SettingContext.Consumer>
        {(setting) => (
          <>
            <h1 className="text-6xl text-center p-20 font-bold font-mono">
              {JSON.stringify(setting)}
            </h1>
          </>
        )}
      </SettingContext.Consumer>
    );
  }
}

export default App;
