import { Promo } from "../components/MainPage/Promo/Promo";
import { Categories } from "../components/MainPage/Categories/Categories";
import Featured from "../components/MainPage/Featured/Featured";
import Advantages from "../components/base/Advantages/Advantages";
import Subscribe from "../components/base/Subscribe/Subscribe";

export function MainPage() {
  return (
    <>
      <Promo />
      <Categories />
      <Featured />
      <Advantages />
      <Subscribe />
    </>
  );
}
