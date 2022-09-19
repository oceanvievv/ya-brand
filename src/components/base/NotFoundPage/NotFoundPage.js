import "./css/not-found-page.scss"

export default function NotFoundPage() {
  return (
    <div className="not-found-page md:not-found-page_md">
      <span className="not-found-page__title md:not-found-page__title_md">
        Page not found
      </span>
      <span className="not-found-page__err md:not-found-page__err_md">404</span>
    </div>
  )
}
