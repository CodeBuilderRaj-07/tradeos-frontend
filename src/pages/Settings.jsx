export default function Settings() {
  return (
    <div>
      <div>
        <h1 className="page-title">
          Settings
        </h1>

        <p className="page-subtitle">
          Manage your workspace preferences
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          gap: "12px",
          marginTop: "18px",
        }}
      >
        <div
          className="panel"
          style={{
            padding: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Profile Settings
          </h3>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <div>
              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Full Name
              </label>

              <input
                defaultValue="Ashutosh Pattnaik"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  height: "46px",
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

            <div>
              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Email
              </label>

              <input
                defaultValue="ashutosh@tradeos.ai"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  height: "46px",
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

            <div>
              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Trading Style
              </label>

              <select
                style={{
                  width: "100%",
                  marginTop: "8px",
                  height: "46px",
                  background: "#0F172A",
                  border:
                    "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "12px",
                  padding: "0 14px",
                  color: "white",
                  outline: "none",
                  fontSize: "13px",
                }}
              >
                <option>
                  Scalping
                </option>

                <option>
                  Swing Trading
                </option>

                <option>
                  Intraday
                </option>
              </select>
            </div>

            <button
              style={{
                marginTop: "8px",
                height: "44px",
                border: "none",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg,#2563EB,#3B82F6)",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              Save Changes
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            className="panel"
            style={{
              padding: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Workspace Controls
            </h3>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  background: "#0F172A",
                  borderRadius: "12px",
                  padding: "14px",
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    Trading Mode
                  </h4>

                  <p
                    className="secondary-text"
                    style={{
                      marginTop: "4px",
                      fontSize: "11px",
                    }}
                  >
                    Switch between paper and live trading
                  </p>
                </div>

                <button
                  style={{
                    height: "36px",
                    padding: "0 14px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#2563EB",
                    color: "white",
                    fontSize: "12px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Paper
                </button>
              </div>

              <div
                style={{
                  background: "#0F172A",
                  borderRadius: "12px",
                  padding: "14px",
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    AI Assistant
                  </h4>

                  <p
                    className="secondary-text"
                    style={{
                      marginTop: "4px",
                      fontSize: "11px",
                    }}
                  >
                    Smart AI trade analysis enabled
                  </p>
                </div>

                <div
                  className="success"
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Enabled
                </div>
              </div>

              <div
                style={{
                  background: "#0F172A",
                  borderRadius: "12px",
                  padding: "14px",
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "13px",
                    }}
                  >
                    Auto Journal Sync
                  </h4>

                  <p
                    className="secondary-text"
                    style={{
                      marginTop: "4px",
                      fontSize: "11px",
                    }}
                  >
                    Automatically save completed trades
                  </p>
                </div>

                <div
                  className="success"
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  Active
                </div>
              </div>
            </div>
          </div>

          <div
            className="panel"
            style={{
              padding: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Notifications
            </h3>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                  }}
                >
                  Trade Alerts
                </span>

                <div
                  style={{
                    width: "42px",
                    height: "24px",
                    borderRadius: "999px",
                    background: "#2563EB",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "white",
                      position: "absolute",
                      top: "3px",
                      right: "3px",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                  }}
                >
                  AI Reports
                </span>

                <div
                  style={{
                    width: "42px",
                    height: "24px",
                    borderRadius: "999px",
                    background: "#2563EB",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "white",
                      position: "absolute",
                      top: "3px",
                      right: "3px",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                  }}
                >
                  Market News
                </span>

                <div
                  style={{
                    width: "42px",
                    height: "24px",
                    borderRadius: "999px",
                    background: "#1E293B",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "white",
                      position: "absolute",
                      top: "3px",
                      left: "3px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="panel"
            style={{
              padding: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Admin Access
            </h3>

            <p
              className="secondary-text"
              style={{
                marginTop: "6px",
                fontSize: "11px",
              }}
            >
              Visible only for authenticated admin users
            </p>

            <div
              style={{
                marginTop: "16px",
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr",
                gap: "10px",
              }}
            >
              <button
                style={{
                  height: "42px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#0F172A",
                  color: "white",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                Manage APIs
              </button>

              <button
                style={{
                  height: "42px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#0F172A",
                  color: "white",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                Broker Access
              </button>

              <button
                style={{
                  height: "42px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#0F172A",
                  color: "white",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                AI Config
              </button>

              <button
                style={{
                  height: "42px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#0F172A",
                  color: "white",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                User Roles
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}