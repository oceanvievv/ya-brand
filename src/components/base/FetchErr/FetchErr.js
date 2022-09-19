import "./css/fetch-err.scss"

export default function FetchErr({ fetchType, fetchErr }) {
  return (
    <div className="fetch-err-wrapper">
      <span className="fetch-err__type md:fetch-err__type_md">
        FAILED TO FETCH {fetchType}
      </span>
      <span className="fetch-err__err md:fetch-err__err_md">
        ⚠ &nbsp; {fetchErr ? fetchErr : null} &nbsp; ⚠
      </span>
    </div>
  )
}
