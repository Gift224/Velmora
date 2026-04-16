import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function Signin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Save user (simple localStorage demo)
    localStorage.setItem("velmoraUser", JSON.stringify(formData));

    setError("");
    alert("Account created successfully!");

    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Join Velmora</h2>
        <p>Create your account</p>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="bottom-text">
          Already have an account? <span onClick={() => navigate("/signin")}>Sign In</span>
        </p>
      </div>
    </div>
  );
}


/*import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    localStorage.setItem("velmoraUser", JSON.stringify(formData));
    setError("");
    alert("Account created successfully!");
    navigate("/signin");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="header">Create Account</h2>

          <div className="Field">
            <label>
              Full Name <sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="Field">
            <label>
              Email Address <sup>*</sup>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="Field">
            <label>
              Confirm Password <sup>*</sup>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {error && <p className="FieldError">{error}</p>}

          <div className="Field-btn">
            <button type="submit">Sign Up</button>
          </div>

          <p>
            Already have an account?{" "}
            <span
              style={{ color: "#0167B1", cursor: "pointer" }}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </span>
          </p>
        </fieldset>
      </form>
    </div>
  );
}*/

