import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <header>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem> <a href="/" legacyBehavior passHref>
                        <NavigationMenuLink> HOME </NavigationMenuLink> </a>
                    </NavigationMenuItem>
                    <NavigationMenuItem> <a href="/dashboard" legacyBehavior passHref>
                        <NavigationMenuLink> DASHBOARD </NavigationMenuLink> </a>
                    </NavigationMenuItem>
                    <NavigationMenuItem> <a href="/partners" legacyBehavior passHref>
                        <NavigationMenuLink> PARTNERS </NavigationMenuLink> </a>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
        <App/>
        <footer></footer>
    </React.StrictMode>
);
