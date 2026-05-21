import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const performanceData = [
  {
    month: "Jan",
    pnl: 1200,
  },

  {
    month: "Feb",
    pnl: 2100,
  },

  {
    month: "Mar",
    pnl: 1800,
  },

  {
    month: "Apr",
    pnl: 3200,
  },

  {
    month: "May",
    pnl: 2800,
  },

  {
    month: "Jun",
    pnl: 4100,
  },
];

const pieData = [
  {
    name: "Winning",
    value: 72,
  },

  {
    name: "Losing",
    value: 28,
  },
];

const COLORS = [
  "#22C55E",
  "#EF4444",
];

export default function Analytics() {
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
            Analytics
          </h1>

          <p className="page-subtitle">
            Trading performance breakdown
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
          Export Report
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(4,1fr)",
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
            TOTAL PNL
          </p>

          <h2
            className="success"
            style={{
              marginTop: "12px",
              fontSize: "28px",
            }}
          >
            +$12,480
          </h2>
        </div>

        <div
          className="panel"
          style={{
            padding: "18px",
          }}
        >
          <p className="metric-title">
            WIN RATE
          </p>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "28px",
            }}
          >
            72%
          </h2>
        </div>

        <div
          className="panel"
          style={{
            padding: "18px",
          }}
        >
          <p className="metric-title">
            PROFIT FACTOR
          </p>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "28px",
            }}
          >
            2.8
          </h2>
        </div>

        <div
          className="panel"
          style={{
            padding: "18px",
          }}
        >
          <p className="metric-title">
            AVG R:R
          </p>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "28px",
            }}
          >
            1:2.4
          </h2>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1.4fr 0.8fr",
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
              Monthly Performance
            </h3>

            <p
              className="secondary-text"
              style={{
                marginTop: "3px",
                fontSize: "11px",
              }}
            >
              Profit and loss analysis
            </p>
          </div>

          <div
            style={{
              width: "100%",
              height: "300px",
            }}
          >
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={performanceData}
              >
                <XAxis
                  dataKey="month"
                  tick={{
                    fill: "#7B849A",
                    fontSize: 11,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Bar
                  dataKey="pnl"
                  fill="#3B82F6"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div
          className="panel"
          style={{
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
              Win Ratio
            </h3>

            <p
              className="secondary-text"
              style={{
                marginTop: "3px",
                fontSize: "11px",
              }}
            >
              Trade distribution
            </p>
          </div>

          <div
            style={{
              width: "100%",
              height: "260px",
            }}
          >
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={70}
                  outerRadius={95}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {pieData.map(
                    (entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    )
                  )}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent:
                "center",
              gap: "18px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#22C55E",
                }}
              />

              Winning
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#EF4444",
                }}
              />

              Losing
            </div>
          </div>
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
            Strategy Breakdown
          </h3>

          <p
            className="secondary-text"
            style={{
              marginTop: "3px",
              fontSize: "11px",
            }}
          >
            Performance by trading style
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3,1fr)",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "#0F172A",
              borderRadius: "14px",
              padding: "16px",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Scalping
            </h3>

            <h2
              className="success"
              style={{
                marginTop: "12px",
                fontSize: "24px",
              }}
            >
              +$4,280
            </h2>

            <p
              className="secondary-text"
              style={{
                marginTop: "6px",
                fontSize: "11px",
              }}
            >
              68% Win Rate
            </p>
          </div>

          <div
            style={{
              background: "#0F172A",
              borderRadius: "14px",
              padding: "16px",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Swing Trading
            </h3>

            <h2
              className="success"
              style={{
                marginTop: "12px",
                fontSize: "24px",
              }}
            >
              +$5,620
            </h2>

            <p
              className="secondary-text"
              style={{
                marginTop: "6px",
                fontSize: "11px",
              }}
            >
              74% Win Rate
            </p>
          </div>

          <div
            style={{
              background: "#0F172A",
              borderRadius: "14px",
              padding: "16px",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Breakout
            </h3>

            <h2
              className="success"
              style={{
                marginTop: "12px",
                fontSize: "24px",
              }}
            >
              +$2,580
            </h2>

            <p
              className="secondary-text"
              style={{
                marginTop: "6px",
                fontSize: "11px",
              }}
            >
              79% Win Rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}