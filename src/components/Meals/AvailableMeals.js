import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.scss';
import MealItem from './MealItem/MealItem';

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetvhingMeals = async () => {
      const response = await axios.get(
        'https://food-order-http-6aa89-default-rtdb.firebaseio.com/meals.json'
      );
      const { data } = response;

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetvhingMeals().catch((error) => {
      setIsLoading(false);
      setHasError(error.message);
    });
  });

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Is loading...</p>
      </section>
    );
  }

  if (hasError) {
    return (
      <section className={classes.MealsError}>
        <p>{hasError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
