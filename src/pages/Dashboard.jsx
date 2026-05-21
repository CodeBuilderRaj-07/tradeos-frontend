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
        padding: "14px",
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
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
          marginTop: "4px",
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

  const [summary, setSummary] = useState({

    totalPnl: 0,

    totalTrades: 0,

    winRate: 0,

    openTrades: 0,

  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData = async () => {

    try {

      const response =
        await API.get("/dashboard/summary");

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
          gap: "10px",
          marginTop: "16px",
        }}
      >

        <MetricCard
          title="TOTAL PNL"
          value={`$${summary.totalPnl}`}
          change="Live Data"
          icon={
            <DollarSign
              size={15}
              color="#3B82F6"
            />
          }
        />

        <MetricCard
          title="TOTAL TRADES"
          value={summary.totalTrades}
          change="Analytics"
          icon={
            <TrendingUp
              size={15}
              color="#3B82F6"
            />
          }
        />

        <MetricCard
          title="WIN RATE"
          value={`${summary.winRate}%`}
          change="Performance"
          icon={
            <Target
              size={15}
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
              size={15}
              color="#3B82F6"
            />
          }
        />

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "2fr 1fr",
          gap: "10px",
          marginTop: "10px",
        }}
      >

        <div
          className="panel"
          style={{
            padding: "16px",
            minHeight: "340px",
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
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                Equity Curve
              </h3>

              <p
                className="secondary-text"
                style={{
                  marginTop: "4px",
                  fontSize: "11px",
                }}
              >
                Portfolio performance
              </p>

            </div>

            <div
              className="success"
              style={{
                fontWeight: "600",
                fontSize: "12px",
              }}
            >
              Live
            </div>

          </div>

          <div
            style={{
              width: "100%",
              height: "210px",
              marginTop: "18px",
            }}
          >

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart data={chartData}>

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
                      stopOpacity={0.4}
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
                  strokeWidth={2}
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
            gap: "10px",
          }}
        >

          <div
            className="panel"
            style={{
              padding: "16px",
              minHeight: "165px",
            }}
          >

            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Account Stats
            </h3>

            <div
              style={{
                marginTop: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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

            </div>

          </div>

          <div
            className="panel"
            style={{
              padding: "16px",
              minHeight: "165px",
            }}
          >

            <h3
              style={{
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              AI Status
            </h3>

            <p
              className="secondary-text"
              style={{
                marginTop: "12px",
                lineHeight: "22px",
                fontSize: "13px",
              }}
            >
              Your analytics engine is connected successfully with live backend data.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}