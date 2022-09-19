import { Navigate } from "react-router-dom"

export function ProfilePage() {
  const isRegistered = true

  return (
    <div className="page-wrapper">
      {!isRegistered && <Navigate to="/register" />}
      <p>Profile Page</p>
    </div>
  )
}
