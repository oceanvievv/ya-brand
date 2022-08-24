import { Promo } from "../components/MainPage/Promo/Promo";
import { Categories } from "../components/MainPage/Categories/Categories";
import Featured from "../components/MainPage/Featured/Featured";
import Advantages from "../components/MainPage/Advantages/Advantages";

export function MainPage() {
  return (
    <div>
      <Promo />
      <Categories />
      <Featured />
      <Advantages />
    </div>
  );
}
