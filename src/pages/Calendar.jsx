import {
  Flame,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

export default function Calendar() {

  const [calendarData, setCalendarData] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchCalendar();

  }, []);

  const fetchCalendar =
    async () => {

      try {

        const response =
          await API.get(
            "/calendar"
          );

        setCalendarData(
          response.data
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
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
        Loading Calendar...
      </div>
    );
  }

  const totalPnl =
    calendarData.reduce(
      (total, item) =>
        total + item.pnl,
      0
    );

  const winningDays =
    calendarData.filter(
      (item) => item.pnl > 0
    ).length;

  const losingDays =
    calendarData.filter(
      (item) => item.pnl < 0
    ).length;

  const bestDay =
    Math.max(
      ...calendarData.map(
        (item) => item.pnl
      ),
      0
    );

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
            Trading Calendar
          </h1>

          <p className="page-subtitle">
            Real daily trading performance
          </p>

        </div>

      </div>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(4,1fr)",

          gap: "14px",

          marginTop: "20px",
        }}
      >

        <TopCard
          title="TOTAL PNL"
          value={`$${totalPnl.toFixed(
            2
          )}`}
          green={totalPnl > 0}
        />

        <TopCard
          title="WINNING DAYS"
          value={winningDays}
        />

        <TopCard
          title="LOSS DAYS"
          value={losingDays}
        />

        <TopCard
          title="BEST DAY"
          value={`$${bestDay.toFixed(
            2
          )}`}
          green
        />

      </div>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "1.4fr 0.8fr",

          gap: "14px",

          marginTop: "14px",
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

              marginBottom: "22px",
            }}
          >

            <div>

              <h3
                style={{
                  fontSize: "16px",

                  fontWeight: "700",
                }}
              >
                Trading Activity
              </h3>

              <p
                className="secondary-text"
                style={{
                  marginTop: "4px",

                  fontSize: "12px",
                }}
              >
                Real trade history grouped by date
              </p>

            </div>

            <div
              style={{
                padding: "8px 12px",

                borderRadius: "12px",

                background:
                  "rgba(37,99,235,0.10)",

                border:
                  "1px solid rgba(59,130,246,0.10)",

                color: "#3B82F6",

                fontSize: "12px",

                fontWeight: "600",
              }}
            >
              Live Backend Data
            </div>

          </div>

          {
            calendarData.length === 0 && (

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
                  No Trading Activity
                </h2>

                <p
                  className="secondary-text"
                  style={{
                    marginTop: "10px",
                  }}
                >
                  Your daily pnl history will appear here.
                </p>

              </div>
            )
          }

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(3,1fr)",

              gap: "12px",
            }}
          >

            {
              calendarData.map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}

                    className="panel"

                    style={{
                      minHeight: "120px",

                      padding: "16px",

                      background:
                        item.pnl < 0

                          ? "rgba(239,68,68,0.05)"

                          : "rgba(34,197,94,0.05)",
                    }}
                  >

                    <p
                      className="secondary-text"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      {
                        item.date
                      }
                    </p>

                    <h2
                      style={{
                        marginTop: "18px",

                        fontSize: "26px",

                        fontWeight: "700",

                        color:
                          item.pnl < 0

                            ? "#EF4444"

                            : "#22C55E",
                      }}
                    >
                      ${item.pnl.toFixed(
                        2
                      )}
                    </h2>

                    <p
                      style={{
                        marginTop: "10px",

                        fontSize: "11px",

                        color:
                          item.pnl < 0

                            ? "#EF4444"

                            : "#22C55E",
                      }}
                    >
                      {
                        item.pnl < 0

                          ? "Loss Day"

                          : "Winning Day"
                      }
                    </p>

                  </div>
                )
              )
            }

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
                color="#22C55E"
              />

              <h3
                style={{
                  fontSize: "16px",

                  fontWeight: "700",
                }}
              >
                Performance Insights
              </h3>

            </div>

            <div
              style={{
                marginTop: "24px",

                display: "flex",

                flexDirection: "column",

                gap: "18px",
              }}
            >

              <InsightItem
                title="Best Trading Day"
                value={`$${bestDay.toFixed(
                  2
                )}`}
                green
              />

              <InsightItem
                title="Winning Days"
                value={winningDays}
              />

              <InsightItem
                title="Losing Days"
                value={losingDays}
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

              <AlertTriangle
                size={18}
                color="#EF4444"
              />

              <h3
                style={{
                  fontSize: "16px",

                  fontWeight: "700",
                }}
              >
                Risk Notice
              </h3>

            </div>

            <div
              style={{
                marginTop: "20px",

                padding: "16px",

                borderRadius: "16px",

                background:
                  "rgba(239,68,68,0.08)",

                border:
                  "1px solid rgba(239,68,68,0.10)",

                color: "#CBD5E1",

                fontSize: "13px",

                lineHeight: "24px",
              }}
            >

              Calendar analytics are now powered by real backend trading data and live account performance.

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
                  fontSize: "16px",

                  fontWeight: "700",
                }}
              >
                Trading Activity
              </h3>

            </div>

            <h1
              style={{
                marginTop: "20px",

                fontSize: "40px",

                fontWeight: "800",

                color: "#22C55E",
              }}
            >
              {
                calendarData.length
              }
            </h1>

            <p
              className="secondary-text"
              style={{
                marginTop: "10px",

                lineHeight: "24px",

                fontSize: "13px",
              }}
            >
              Total active trading days recorded in your account history.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

function TopCard({
  title,
  value,
  green,
}) {

  return (

    <div
      className="panel"
      style={{
        padding: "20px",
      }}
    >

      <p className="metric-title">
        {title}
      </p>

      <h2
        style={{
          marginTop: "14px",

          fontSize: "30px",

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

function InsightItem({
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

          fontSize: "24px",

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