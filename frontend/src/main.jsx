import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header className="flex items-center justify-center mt-3 p-5">
      <NavigationMenu className="flex justify-center items-center w-full">
        <NavigationMenuList className="gap-3">
          <NavigationMenuItem>
            {" "}
            <a href="/" legacyBehavior passHref>
              <NavigationMenuLink> HOME </NavigationMenuLink>{" "}
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {" "}
            <a href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink> DASHBOARD </NavigationMenuLink>{" "}
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {" "}
            <a href="/partners" legacyBehavior passHref>
              <NavigationMenuLink> PARTNERS </NavigationMenuLink>{" "}
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {" "}
            <a href="/coach" legacyBehavior passHref>
              <NavigationMenuLink> COACHES </NavigationMenuLink>{" "}
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {" "}
            <a href="/startup/overview" legacyBehavior passHref>
              <NavigationMenuLink> STARTUPS </NavigationMenuLink>{" "}
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {" "}
            <a href="/login" legacyBehavior passHref>
              <NavigationMenuLink> LOGIN </NavigationMenuLink>{" "}
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
    <App />
    <footer></footer>
  </React.StrictMode>
);
