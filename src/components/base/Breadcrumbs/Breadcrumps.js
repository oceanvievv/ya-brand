import "./css/breadcrumps.scss"

export default function Breadcrumps({ title, path }) {
  return (
    <div className="breadcrumbs-wrapper sm:breadcrumbs-wrapper_sm">
      <div className="breadcrumbs sm:breadcrumbs_sm md:breadcrumbs_md xl:breadcrumbs_xl">
        <div className="breadcrumbs__title">{title}</div>
        {path && (
          <div className="breadcrumbs__path">
            <span className="breadcrumbs__path_prev">{path.prev}</span>
            &nbsp;
            <span className="breadcrumbs__path_curr">{path.curr}</span>
          </div>
        )}
      </div>
    </div>
  )
}
