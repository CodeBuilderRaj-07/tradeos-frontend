import {
  Search,
  Flame,
  Brain,
  TrendingUp,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

export default function Journal() {

  const [journals, setJournals] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [formData, setFormData] =
    useState({

      symbol: "",

      strategy: "",

      emotion: "",

      pnl: "",

      notes: "",
    });

  useEffect(() => {

    fetchJournals();

  }, []);

  const fetchJournals =
    async () => {

      try {

        const response =
          await API.get(
            "/journal"
          );

        setJournals(response.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const createJournal =
    async () => {

      try {

        await API.post(
          "/journal",
          {
            ...formData,

            pnl:
              Number(
                formData.pnl
              ),
          }
        );

        setFormData({

          symbol: "",

          strategy: "",

          emotion: "",

          pnl: "",

          notes: "",
        });

        fetchJournals();

      } catch (error) {

        console.log(error);
      }
    };

  if (loading) {

    return (

      <div
        style={{
          color: "white",
          padding: "40px",
        }}
      >
        Loading Journal...
      </div>
    );
  }

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
            Review trades, psychology and execution
          </p>

        </div>

      </div>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "1.4fr 0.8fr",

          gap: "14px",

          marginTop: "20px",
        }}
      >

        <div
          className="panel"
          style={{
            padding: "22px",
          }}
        >

          <div
            style={{
              display: "flex",

              justifyContent:
                "space-between",

              alignItems: "center",

              marginBottom: "20px",
            }}
          >

            <div>

              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Your Journal Entries
              </h3>

              <p
                className="secondary-text"
                style={{
                  marginTop: "4px",
                  fontSize: "12px",
                }}
              >
                Real trading psychology tracking
              </p>

            </div>

            <div
              className="top-search"
              style={{
                width: "220px",
                height: "42px",
              }}
            >

              <Search
                size={15}
                color="#7B849A"
              />

              <input
                placeholder="Search..."
              />

            </div>

          </div>

          {
            journals.length === 0 && (

              <div
                className="panel"
                style={{
                  padding: "40px",

                  textAlign: "center",
                }}
              >

                <h2
                  style={{
                    fontSize: "24px",

                    fontWeight: "700",
                  }}
                >
                  No Journal Entries
                </h2>

                <p
                  className="secondary-text"
                  style={{
                    marginTop: "10px",
                  }}
                >
                  Start documenting your trades and psychology.
                </p>

              </div>
            )
          }

          <div
            style={{
              display: "flex",

              flexDirection: "column",

              gap: "12px",
            }}
          >

            {journals.map(
              (entry, index) => (

                <div
                  key={index}

                  className="panel"

                  style={{
                    padding: "18px",

                    background:
                      "rgba(15,23,42,0.75)",
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

                      <div
                        style={{
                          display: "flex",

                          alignItems: "center",

                          gap: "10px",
                        }}
                      >

                        <h3
                          style={{
                            fontSize: "16px",

                            fontWeight: "700",
                          }}
                        >
                          {entry.symbol}
                        </h3>

                        <div
                          style={{
                            padding:
                              "4px 10px",

                            borderRadius:
                              "20px",

                            background:
                              "rgba(37,99,235,0.10)",

                            border:
                              "1px solid rgba(59,130,246,0.10)",

                            fontSize: "11px",

                            color: "#3B82F6",

                            fontWeight: "600",
                          }}
                        >
                          {entry.strategy}
                        </div>

                      </div>

                      <p
                        className="secondary-text"
                        style={{
                          marginTop: "8px",

                          fontSize: "12px",
                        }}
                      >
                        Emotion:
                        {" "}
                        {entry.emotion}
                      </p>

                      <p
                        style={{
                          marginTop: "12px",

                          lineHeight: "22px",

                          fontSize: "13px",

                          color: "#CBD5E1",
                        }}
                      >
                        {entry.notes}
                      </p>

                    </div>

                    <div
                      style={{
                        textAlign: "right",
                      }}
                    >

                      <h2
                        style={{
                          color:
                            entry.pnl < 0

                              ? "#EF4444"

                              : "#22C55E",

                          fontWeight: "700",

                          fontSize: "24px",
                        }}
                      >
                        ${entry.pnl}
                      </h2>

                      <p
                        className="secondary-text"
                        style={{
                          marginTop: "6px",

                          fontSize: "11px",
                        }}
                      >
                        {
                          entry.createdAt?.substring(
                            0,
                            10
                          )
                        }
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

            gap: "14px",
          }}
        >

          <div
            className="panel glow-blue"
            style={{
              padding: "22px",
            }}
          >

            <div
              style={{
                display: "flex",

                alignItems: "center",

                gap: "10px",
              }}
            >

              <TrendingUp
                size={18}
                color="#3B82F6"
              />

              <h3
                style={{
                  fontSize: "15px",

                  fontWeight: "700",
                }}
              >
                Journal Stats
              </h3>

            </div>

            <div
              style={{
                marginTop: "22px",

                display: "flex",

                flexDirection: "column",

                gap: "18px",
              }}
            >

              <StatItem
                title="Total Entries"
                value={
                  journals.length
                }
              />

              <StatItem
                title="Winning Journals"
                value={
                  journals.filter(
                    (
                      j
                    ) => j.pnl > 0
                  ).length
                }
                green
              />

              <StatItem
                title="Losing Journals"
                value={
                  journals.filter(
                    (
                      j
                    ) => j.pnl < 0
                  ).length
                }
              />

            </div>

          </div>

          <div
            className="panel"
            style={{
              padding: "22px",
            }}
          >

            <div
              style={{
                display: "flex",

                alignItems: "center",

                gap: "10px",
              }}
            >

              <Flame
                size={18}
                color="#F97316"
              />

              <h3
                style={{
                  fontSize: "15px",

                  fontWeight: "700",
                }}
              >
                Create Journal
              </h3>

            </div>

            <div
              style={{
                marginTop: "20px",

                display: "flex",

                flexDirection: "column",

                gap: "12px",
              }}
            >

              <input
                name="symbol"

                value={formData.symbol}

                onChange={handleChange}

                placeholder="Symbol"

                style={inputStyle}
              />

              <input
                name="strategy"

                value={formData.strategy}

                onChange={handleChange}

                placeholder="Strategy"

                style={inputStyle}
              />

              <input
                name="emotion"

                value={formData.emotion}

                onChange={handleChange}

                placeholder="Emotion"

                style={inputStyle}
              />

              <input
                name="pnl"

                value={formData.pnl}

                onChange={handleChange}

                placeholder="PNL"

                style={inputStyle}
              />

              <textarea
                name="notes"

                value={formData.notes}

                onChange={handleChange}

                placeholder="Trade notes..."

                style={{
                  ...inputStyle,

                  minHeight: "140px",

                  paddingTop: "14px",

                  resize: "none",
                }}
              />

              <button
                onClick={createJournal}

                style={{
                  height: "48px",

                  border: "none",

                  borderRadius: "14px",

                  background:
                    "linear-gradient(135deg,#2563EB,#3B82F6)",

                  color: "white",

                  fontWeight: "600",

                  cursor: "pointer",

                  marginTop: "6px",
                }}
              >
                Save Journal
              </button>

            </div>

          </div>

          <div
            className="panel"
            style={{
              padding: "22px",
            }}
          >

            <div
              style={{
                display: "flex",

                alignItems: "center",

                gap: "10px",
              }}
            >

              <Brain
                size={18}
                color="#8B5CF6"
              />

              <h3
                style={{
                  fontSize: "15px",

                  fontWeight: "700",
                }}
              >
                AI Journal Coach
              </h3>

            </div>

            <div
              style={{
                marginTop: "18px",

                padding: "16px",

                borderRadius: "16px",

                background:
                  "rgba(15,23,42,0.85)",

                border:
                  "1px solid rgba(255,255,255,0.04)",

                color: "#CBD5E1",

                fontSize: "13px",

                lineHeight: "24px",
              }}
            >

              Consistent journaling improves emotional discipline and long-term execution quality.

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function StatItem({
  title,
  value,
  green,
}) {

  return (

    <div>

      <p className="metric-title">
        {title}
      </p>

      <h2
        style={{
          marginTop: "8px",

          fontSize: "28px",

          fontWeight: "700",

          color:
            green
              ? "#22C55E"
              : "white",
        }}
      >
        {value}
      </h2>

    </div>
  );
}

const inputStyle = {

  width: "100%",

  height: "48px",

  border: "none",

  outline: "none",

  borderRadius: "14px",

  background: "#0F172A",

  padding: "0 14px",

  color: "white",

  fontSize: "13px",
};