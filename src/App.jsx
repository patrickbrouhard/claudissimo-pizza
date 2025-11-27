import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Bienvenue chez Claudissimo Pizza!</h1>
      <Pizza
        name="Pizza Quattro Formaggi"
        description="Beaufort, Abondance, Reblochon et Tome des Bauges"
      />
      <Pizza
        name="Pizza Racletta"
        description="mozzarella, raclette fondue, charcuterie savoyarde (jambon cru, coppa), cornichons."
      />
      <Pizza
        name="Pizza Montagnardina"
        description="tomme de Savoie, champignons, saucisse fumée, herbes de montagne."
      />
      <Pizza
        name="Diots e formaggio"
        description="Diots (saucisses savoyardes), fromage fondu, oignons rouges."
      />
      <Pizza
        name="Pizza Margherita"
        description="Base tomate, mozzarella, basilic frais."
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
