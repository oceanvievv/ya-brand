import "./css/categories.scss"
import categoriesData from "./js/categoriesData"
import Category from "./Category"

export function Categories() {
  return (
    <div className="categories-wrapper lg:categories-wrapper_lg">
      <div className="categories-wrapper_personalized md:categories-wrapper_personalized--md">
        {categoriesData.personalized.map((data, i) => (
          <Category key={i} data={data} imgClass={"category__img"} />
        ))}
      </div>
      <div className="categories-wrapper_common">
        {categoriesData.common.map((data, i) => (
          <Category
            key={i}
            data={data}
            imgClass={"category__img category__img_common"}
          />
        ))}
      </div>
    </div>
  )
}
