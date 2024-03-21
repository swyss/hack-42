import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <NavigationMenu>
          <NavigationMenuList>
              <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <NavigationMenuLink>Link1</NavigationMenuLink>
                  </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                  <NavigationMenuContent>
                      <NavigationMenuLink>Link2</NavigationMenuLink>
                  </NavigationMenuContent>
              </NavigationMenuItem>
          </NavigationMenuList>
      </NavigationMenu>
      <App />
  </React.StrictMode>
);
