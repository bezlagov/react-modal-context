import React from "react";

const lightThemeData = {
  themeTitle: "This is light theme title!!!",
  themeDescription: "Light theme Light theme Light theme Light theme Light theme Light theme Light theme Light theme Light theme Light theme Light theme Light theme Light theme ",
  colorTheme: "modalLight"
};

const darkThemeData = {
  themeTitle: "This is dark theme title!!!",
  themeDescription: "Dark theme Dark theme Dark theme Dark theme Dark theme Dark theme Dark theme Dark theme Dark theme Dark theme Dark theme Dark theme Dark theme Dark theme Dark theme ",
  colorTheme: "modalDark"
};
const MyContext = React.createContext(lightThemeData);

export { MyContext, darkThemeData, lightThemeData };