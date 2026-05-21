import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    fullName: "",

    email: "",

    password: "",

  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });
  };

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      setSuccess("");

      await API.post(
        "/auth/register",
        formData
      );

      setSuccess("Account created successfully");

      setTimeout(() => {

        navigate("/login");

      }, 1500);

    } catch (err) {

      setError("Registration failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#060B16",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >

      <div
        className="panel"
        style={{
          width: "100%",
          maxWidth: "430px",
          padding: "32px",
        }}
      >

        <div
          style={{
            textAlign: "center",
            marginBottom: "28px",
          }}
        >

          <h1
            style={{
              fontSize: "34px",
              fontWeight: "800",
              color: "white",
            }}
          >
            TradeOS
          </h1>

          <p
            className="secondary-text"
            style={{
              marginTop: "8px",
              fontSize: "13px",
            }}
          >
            Create your trading account
          </p>
        </div>

        <form onSubmit={handleRegister}>

          <div
            style={{
              marginBottom: "16px",
            }}
          >

            <label
              className="secondary-text"
              style={{
                fontSize: "12px",
              }}
            >
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{
                width: "100%",
                marginTop: "8px",
                height: "48px",
                background: "#0F172A",
                border:
                  "1px solid rgba(255,255,255,0.04)",
                borderRadius: "12px",
                padding: "0 14px",
                color: "white",
                outline: "none",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "16px",
            }}
          >

            <label
              className="secondary-text"
              style={{
                fontSize: "12px",
              }}
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{
                width: "100%",
                marginTop: "8px",
                height: "48px",
                background: "#0F172A",
                border:
                  "1px solid rgba(255,255,255,0.04)",
                borderRadius: "12px",
                padding: "0 14px",
                color: "white",
                outline: "none",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "20px",
            }}
          >

            <label
              className="secondary-text"
              style={{
                fontSize: "12px",
              }}
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              style={{
                width: "100%",
                marginTop: "8px",
                height: "48px",
                background: "#0F172A",
                border:
                  "1px solid rgba(255,255,255,0.04)",
                borderRadius: "12px",
                padding: "0 14px",
                color: "white",
                outline: "none",
              }}
            />
          </div>

          {error && (

            <p
              style={{
                color: "#EF4444",
                marginBottom: "14px",
                fontSize: "12px",
              }}
            >
              {error}
            </p>
          )}

          {success && (

            <p
              style={{
                color: "#22C55E",
                marginBottom: "14px",
                fontSize: "12px",
              }}
            >
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              height: "48px",
              border: "none",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg,#2563EB,#3B82F6)",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          <p
            className="secondary-text"
            style={{
              marginTop: "18px",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            Already have an account?{" "}

            <Link
              to="/login"
              style={{
                color: "#3B82F6",
              }}
            >
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}