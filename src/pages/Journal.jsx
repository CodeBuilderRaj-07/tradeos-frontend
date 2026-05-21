const journalEntries = [
  {
    pair: "BTCUSD",
    strategy: "Breakout",
    result: "+$875",
    emotion: "Calm",
    date: "15 May 2026",
  },

  {
    pair: "XAUUSD",
    strategy: "Scalping",
    result: "-$120",
    emotion: "FOMO",
    date: "14 May 2026",
  },

  {
    pair: "EURUSD",
    strategy: "Reversal",
    result: "+$222",
    emotion: "Focused",
    date: "13 May 2026",
  },

  {
    pair: "ETHUSD",
    strategy: "Trend Follow",
    result: "+$420",
    emotion: "Confident",
    date: "12 May 2026",
  },
];

export default function Journal() {
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
            Trading Journal
          </h1>

          <p className="page-subtitle">
            Review trades and trading psychology
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
          + Add Journal
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1.4fr 0.8fr",
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
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "18px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Recent Journal Entries
              </h3>

              <p
                className="secondary-text"
                style={{
                  marginTop: "3px",
                  fontSize: "11px",
                }}
              >
                Latest trading reviews
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {journalEntries.map(
              (entry, index) => (
                <div
                  key={index}
                  style={{
                    background: "#0F172A",
                    borderRadius: "14px",
                    padding: "16px",
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
                    <div>
                      <h3
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        {entry.pair}
                      </h3>

                      <p
                        className="secondary-text"
                        style={{
                          marginTop: "4px",
                          fontSize: "11px",
                        }}
                      >
                        {entry.strategy}
                      </p>
                    </div>

                    <div
                      style={{
                        color:
                          entry.result.includes(
                            "-"
                          )
                            ? "#EF4444"
                            : "#22C55E",
                        fontWeight: "600",
                        fontSize: "13px",
                      }}
                    >
                      {entry.result}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      marginTop: "16px",
                    }}
                  >
                    <div>
                      <p
                        className="secondary-text"
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        EMOTION
                      </p>

                      <p
                        style={{
                          marginTop: "4px",
                          fontSize: "12px",
                        }}
                      >
                        {entry.emotion}
                      </p>
                    </div>

                    <div
                      style={{
                        textAlign: "right",
                      }}
                    >
                      <p
                        className="secondary-text"
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        DATE
                      </p>

                      <p
                        style={{
                          marginTop: "4px",
                          fontSize: "12px",
                        }}
                      >
                        {entry.date}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
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
              padding: "18px",
            }}
          >
            <p className="metric-title">
              TOTAL ENTRIES
            </p>

            <h2
              style={{
                marginTop: "12px",
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              148
            </h2>
          </div>

          <div
            className="panel"
            style={{
              padding: "18px",
            }}
          >
            <p className="metric-title">
              BEST STRATEGY
            </p>

            <h2
              style={{
                marginTop: "12px",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              Breakout
            </h2>

            <p
              className="success"
              style={{
                marginTop: "6px",
                fontSize: "12px",
              }}
            >
              78% Win Rate
            </p>
          </div>

          <div
            className="panel"
            style={{
              padding: "18px",
            }}
          >
            <p className="metric-title">
              MOST COMMON EMOTION
            </p>

            <h2
              style={{
                marginTop: "12px",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              Focused
            </h2>

            <p
              className="secondary-text"
              style={{
                marginTop: "6px",
                fontSize: "12px",
              }}
            >
              Stable decision making
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}