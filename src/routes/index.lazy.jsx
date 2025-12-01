import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="index">
      <div className="index-brand">
        <p>Pizzas savoyardes et savoureuses</p>
        <h1>Chez Padre Gino</h1>
      </div>
      <ul>
        <li>
          <Link to="/order">Commander</Link>
        </li>
        <li>
          <Link to="/past">Commandes précédentes</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
