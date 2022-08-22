import { Promo } from "../components/MainPage/Promo/Promo";
import { Categories } from "../components/MainPage/Categories/Categories";
import Featured from "../components/MainPage/Featured/Featured";

export function MainPage() {
  return (
    <div>
      <Promo />
      <Categories />
      <Featured />
    </div>
  );
}
