import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name),
    React.createElement("p", null, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Bienvenue chez Claudissimo Pizza!"),
    React.createElement(Pizza, {
      name: "Pizza Quattro Formaggi",
      description: "Beaufort, Abondance, Reblochon et Tome des Bauges",
    }),
    React.createElement(Pizza, {
      name: "Pizza Racletta",
      description:
        "mozzarella, raclette fondue, charcuterie savoyarde (jambon cru, coppa), cornichons.",
    }),
    React.createElement(Pizza, {
      name: "Pizza Montagnardina",
      description:
        "tomme de Savoie, champignons, saucisse fumée, herbes de montagne.",
    }),
    React.createElement(Pizza, {
      name: "Diots e formaggio",
      description:
        "Diots (saucisses savoyardes), fromage fondu, oignons rouges.",
    }),
    React.createElement(Pizza, {
      name: "Pizza Margherita",
      description: "Base tomate, mozzarella, basilic frais.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
