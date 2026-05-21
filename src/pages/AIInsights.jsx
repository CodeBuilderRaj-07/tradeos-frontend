const insights = [
  {
    title: "Overtrading Detected",
    description:
      "You opened 42% more trades this week compared to your average behavior.",
    type: "Warning",
  },

  {
    title: "Best Performance Hours",
    description:
      "Your highest win rate occurs between 9 AM and 12 PM market session.",
    type: "Positive",
  },

  {
    title: "Risk Management Improved",
    description:
      "Average stop loss discipline improved by 18% this month.",
    type: "Positive",
  },

  {
    title: "Emotional Trading Spike",
    description:
      "Losses increased after revenge-trading behavior on losing streaks.",
    type: "Risk",
  },
];

export default function AIInsights() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1 className="page-title">
            AI Insights
          </h1>

          <p className="page-subtitle">
            AI-powered trading behavior analysis
          </p>
        </div>

        <button
          style={{
            height: "42px",
            padding: "0 18px",
            borderRadius: "12px",
            border: "none",
            background:
              "linear-gradient(135deg,#2563EB,#3B82F6)",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Generate Report
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(3,1fr)",
          gap: "12px",
          marginTop: "18px",
        }}
      >
        <div
          className="panel"
          style={{
            padding: "18px",
          }}
        >
          <p className="metric-title">
            AI CONFIDENCE
          </p>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "32px",
              fontWeight: "700",
            }}
          >
            92%
          </h2>

          <p
            className="success"
            style={{
              marginTop: "6px",
              fontSize: "12px",
            }}
          >
            High prediction accuracy
          </p>
        </div>

        <div
          className="panel"
          style={{
            padding: "18px",
          }}
        >
          <p className="metric-title">
            DISCIPLINE SCORE
          </p>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "32px",
              fontWeight: "700",
            }}
          >
            75
          </h2>

          <p
            className="secondary-text"
            style={{
              marginTop: "6px",
              fontSize: "12px",
            }}
          >
            Stable execution behavior
          </p>
        </div>

        <div
          className="panel"
          style={{
            padding: "18px",
          }}
        >
          <p className="metric-title">
            RISK LEVEL
          </p>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "32px",
              fontWeight: "700",
              color: "#FACC15",
            }}
          >
            Medium
          </h2>

          <p
            className="secondary-text"
            style={{
              marginTop: "6px",
              fontSize: "12px",
            }}
          >
            Monitor emotional entries
          </p>
        </div>
      </div>

      <div
        className="panel"
        style={{
          marginTop: "12px",
          padding: "18px",
        }}
      >
        <div
          style={{
            marginBottom: "18px",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            AI Trading Analysis
          </h3>

          <p
            className="secondary-text"
            style={{
              marginTop: "3px",
              fontSize: "11px",
            }}
          >
            Machine learning behavioral insights
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {insights.map(
            (insight, index) => (
              <div
                key={index}
                style={{
                  background: "#0F172A",
                  borderRadius: "14px",
                  padding: "18px",
                  border:
                    "1px solid rgba(255,255,255,0.02)",
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
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {insight.title}
                  </h3>

                  <span
                    style={{
                      padding:
                        "6px 10px",
                      borderRadius:
                        "999px",
                      fontSize: "11px",
                      fontWeight: "600",
                      background:
                        insight.type ===
                        "Positive"
                          ? "rgba(34,197,94,0.12)"
                          : insight.type ===
                            "Warning"
                          ? "rgba(250,204,21,0.12)"
                          : "rgba(239,68,68,0.12)",
                      color:
                        insight.type ===
                        "Positive"
                          ? "#22C55E"
                          : insight.type ===
                            "Warning"
                          ? "#FACC15"
                          : "#EF4444",
                    }}
                  >
                    {insight.type}
                  </span>
                </div>

                <p
                  className="secondary-text"
                  style={{
                    marginTop: "12px",
                    lineHeight: "1.7",
                    fontSize: "12px",
                  }}
                >
                  {insight.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          gap: "12px",
          marginTop: "12px",
        }}
      >
        <div
          className="panel"
          style={{
            padding: "18px",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Suggested Improvements
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
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                Reduce overtrading after 3 consecutive wins.
              </p>
            </div>

            <div
              style={{
                background: "#0F172A",
                borderRadius: "12px",
                padding: "14px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                Focus more on breakout setups during London session.
              </p>
            </div>

            <div
              style={{
                background: "#0F172A",
                borderRadius: "12px",
                padding: "14px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                }}
              >
                Avoid revenge entries after 2 losses in a row.
              </p>
            </div>
          </div>
        </div>

        <div
          className="panel"
          style={{
            padding: "18px",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            AI Summary
          </h3>

          <div
            style={{
              marginTop: "18px",
              background: "#0F172A",
              borderRadius: "14px",
              padding: "18px",
              lineHeight: "1.9",
              color: "#CBD5E1",
              fontSize: "13px",
            }}
          >
            Your trading behavior shows strong consistency during structured market sessions.
            Performance decreases significantly during emotional re-entries and high-frequency trading periods.
            Current data suggests maintaining lower exposure after consecutive losses can improve long-term profitability.
          </div>
        </div>
      </div>
    </div>
  );
}