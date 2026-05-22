import {
  DollarSign,
  TrendingUp,
  Target,
  Activity,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import { useEffect, useState } from "react";

import API from "../services/api";

const chartData = [
  { day: "Mon", value: 4200 },
  { day: "Tue", value: 5100 },
  { day: "Wed", value: 4800 },
  { day: "Thu", value: 6200 },
  { day: "Fri", value: 7600 },
  { day: "Sat", value: 7100 },
  { day: "Sun", value: 8600 },
];

function MetricCard({
  title,
  value,
  change,
  icon,
}) {

  return (

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
        }}
      >

        <p className="metric-title">
          {title}
        </p>

        <div className="card-icon">
          {icon}
        </div>

      </div>

      <h2 className="metric-value">
        {value}
      </h2>

      <p
        className="success"
        style={{
          marginTop: "6px",
          fontWeight: "600",
          fontSize: "11px",
        }}
      >
        {change}
      </p>

    </div>
  );
}

export default function Dashboard() {

  const [summary, setSummary] =
    useState({

      totalPnl: 0,

      totalTrades: 0,

      winRate: 0,

      openTrades: 0,
    });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData =
    async () => {

      try {

        const response =
          await API.get(
            "/dashboard/summary"
          );

        setSummary(response.data);

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
        Loading Dashboard...
      </div>
    );
  }

  return (

    <div>

      <div>

        <h1 className="page-title">
          Dashboard
        </h1>

        <p className="page-subtitle">
          Welcome back, Trader
        </p>

      </div>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(4,1fr)",

          gap: "14px",

          marginTop: "22px",
        }}
      >

        <MetricCard
          title="TOTAL PNL"
          value={`$${summary.totalPnl}`}
          change="+12.8% this week"
          icon={
            <DollarSign
              size={16}
              color="#3B82F6"
            />
          }
        />

        <MetricCard
          title="TOTAL TRADES"
          value={summary.totalTrades}
          change="Trading Analytics"
          icon={
            <TrendingUp
              size={16}
              color="#3B82F6"
            />
          }
        />

        <MetricCard
          title="WIN RATE"
          value={`${summary.winRate}%`}
          change="Performance Growth"
          icon={
            <Target
              size={16}
              color="#3B82F6"
            />
          }
        />

        <MetricCard
          title="OPEN TRADES"
          value={summary.openTrades}
          change="Currently Active"
          icon={
            <Activity
              size={16}
              color="#3B82F6"
            />
          }
        />

      </div>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "2.2fr 1fr",

          gap: "14px",

          marginTop: "14px",
        }}
      >

        <div
          className="panel glow-green"
          style={{
            padding: "22px",

            minHeight: "390px",

            position: "relative",

            overflow: "hidden",
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
                  fontSize: "18px",

                  fontWeight: "700",

                  letterSpacing: "-0.5px",
                }}
              >
                Portfolio Analytics
              </h3>

              <p
                className="secondary-text"
                style={{
                  marginTop: "6px",

                  fontSize: "12px",
                }}
              >
                Real-time portfolio growth and equity tracking
              </p>

            </div>

            <div
              style={{
                padding: "8px 12px",

                borderRadius: "12px",

                background:
                  "rgba(34,197,94,0.10)",

                border:
                  "1px solid rgba(34,197,94,0.12)",

                color: "#22C55E",

                fontWeight: "600",

                fontSize: "12px",
              }}
            >
              Live Analytics
            </div>

          </div>

          <div
            style={{
              width: "100%",

              height: "280px",

              marginTop: "26px",
            }}
          >

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart
                data={chartData}
              >

                <defs>

                  <linearGradient
                    id="color"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="#22C55E"
                      stopOpacity={0.45}
                    />

                    <stop
                      offset="100%"
                      stopColor="#22C55E"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>

                <XAxis
                  dataKey="day"

                  tick={{
                    fill: "#7B849A",
                    fontSize: 11,
                  }}

                  axisLine={false}

                  tickLine={false}
                />

                <Tooltip />

                <Area
                  type="monotone"

                  dataKey="value"

                  stroke="#22C55E"

                  strokeWidth={3}

                  fill="url(#color)"
                />

              </AreaChart>

            </ResponsiveContainer>

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
            className="panel"
            style={{
              padding: "20px",

              minHeight: "190px",
            }}
          >

            <h3
              style={{
                fontSize: "15px",

                fontWeight: "700",
              }}
            >
              Account Stats
            </h3>

            <div
              style={{
                marginTop: "20px",

                display: "flex",

                flexDirection: "column",

                gap: "16px",
              }}
            >

              <div
                style={{
                  display: "flex",

                  justifyContent:
                    "space-between",
                }}
              >

                <span className="secondary-text">
                  Winning Trades
                </span>

                <span className="success">
                  {summary.winningTrades}
                </span>

              </div>

              <div
                style={{
                  display: "flex",

                  justifyContent:
                    "space-between",
                }}
              >

                <span className="secondary-text">
                  Closed Trades
                </span>

                <span>
                  {summary.closedTrades}
                </span>

              </div>

              <div
                style={{
                  display: "flex",

                  justifyContent:
                    "space-between",
                }}
              >

                <span className="secondary-text">
                  Discipline Score
                </span>

                <span className="blue-text">
                  92%
                </span>

              </div>

            </div>

          </div>

          <div
            className="panel glow-blue"
            style={{
              padding: "20px",

              minHeight: "190px",
            }}
          >

            <h3
              style={{
                fontSize: "15px",

                fontWeight: "700",
              }}
            >
              AI Insights
            </h3>

            <p
              className="secondary-text"
              style={{
                marginTop: "14px",

                lineHeight: "24px",

                fontSize: "13px",
              }}
            >
              Your trading discipline improved by 18% this week.
              AI analytics detected stronger risk management
              consistency across your recent trades.
            </p>

            <div
              style={{
                marginTop: "18px",

                padding: "10px 12px",

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
              AI Engine Active
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}