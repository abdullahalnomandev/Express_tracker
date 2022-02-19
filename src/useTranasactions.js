import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from "./constants/categories";
import { useContextProvider } from "./context/context";

const useTransition = (title) => {
  resetCategories();
  const { transition } = useContextProvider();

  const transitionPerType = transition.filter((t) => t.type === title);
  console.log("tran", transitionPerType);
  const total = transitionPerType.reduce(
    (pre, curr) => (pre += curr.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;
  console.log({ transitionPerType, total, categories });

  transitionPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount += t.amount;
  });

  //for chart
  const filteredCategories = categories.filter((c) => c.amount > 0);
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return {
    total,
    chartData,
  };
};

export default useTransition;
