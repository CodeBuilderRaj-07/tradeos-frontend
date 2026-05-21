import { useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "../services/api.js";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: "",

    password: "",

  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });
  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      const response = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data
      );

      navigate("/");

    } catch (err) {

      setError("Invalid email or password");

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
          maxWidth: "420px",
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
            AI Powered Trading Journal
          </p>
        </div>

        <form onSubmit={handleLogin}>

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
                fontSize: "13px",
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
              placeholder="Enter your password"
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
                fontSize: "13px",
              }}
            />
          </div>

          {error && (

            <p
              style={{
                color: "#EF4444",
                marginBottom: "16px",
                fontSize: "12px",
              }}
            >
              {error}
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
              fontSize: "14px",
            }}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>
      </div>
    </div>
  );
}