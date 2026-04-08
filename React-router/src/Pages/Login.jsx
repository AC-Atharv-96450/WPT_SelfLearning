import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Login Page</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/home"); // dynamic navigation
        }}
      >
        signin
      </button>
    </div>
  );
}
