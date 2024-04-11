import { currencyFormatter } from "../utils/formatting";
export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
      {/* meal.image is relative path so we added backend hard-coded part */}
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} /> 
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
            <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
}
