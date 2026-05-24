import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

import {
  Brain,
  TrendingUp,
  ShieldCheck,
  Activity,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const COLORS = [
  "#22C55E",
  "#EF4444",
];

export default function Analytics() {

  const [summary, setSummary] =
    useState({});

  const [monthlyPnl, setMonthlyPnl] =
    useState([]);

  const [streaks, setStreaks] =
    useState({});

  const [riskReward, setRiskReward] =
    useState({});

  const [drawdown, setDrawdown] =
    useState({});

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchAnalytics();

  }, []);

  const fetchAnalytics =
    async () => {

      try {

        const [
          summaryRes,
          monthlyRes,
          streakRes,
          rrRes,
          drawdownRes,
        ] = await Promise.all([

          API.get(
            "/dashboard/summary"
          ),

          API.get(
            "/analytics/monthly-pnl"
          ),

          API.get(
            "/analytics/streaks"
          ),

          API.get(
            "/analytics/risk-reward"
          ),

          API.get(
            "/analytics/drawdown"
          ),
        ]);

        setSummary(
          summaryRes.data
        );

        const monthlyData =
          Object.entries(
            monthlyRes.data
          ).map(
            ([month, pnl]) => ({
              month:
                month.substring(
                  0,
                  3
                ),

              pnl,
            })
          );

        setMonthlyPnl(
          monthlyData
        );

        setStreaks(
          streakRes.data
        );

        setRiskReward(
          rrRes.data
        );

        setDrawdown(
          drawdownRes.data
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
        Loading Analytics...
      </div>
    );
  }

  const pieData = [

    {
      name: "Winning",

      value:
        summary.winningTrades || 0,
    },

    {
      name: "Losing",

      value:
        (
          summary.totalTrades || 0
        ) -
        (
          summary.winningTrades || 0
        ),
    },
  ];

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
            Advanced trading performance breakdown
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

        <MetricCard
          title="TOTAL PNL"
          value={`$${(
            summary.totalPnl || 0
          ).toFixed(2)}`}
          success
        />

        <MetricCard
          title="WIN RATE"
          value={`${(
            summary.winRate || 0
          ).toFixed(1)}%`}
        />

        <MetricCard
          title="BEST STREAK"
          value={
            streaks.bestWinStreak || 0
          }
        />

        <MetricCard
          title="AVG R:R"
          value={`1 : ${(
            riskReward.averageRiskReward || 0
          ).toFixed(2)}`}
        />

      </div>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "1.5fr 0.8fr",

          gap: "14px",

          marginTop: "14px",
        }}
      >

        <div
          className="panel glow-green"
          style={{
            padding: "22px",
          }}
        >

          <div
            style={{
              marginBottom: "24px",
            }}
          >

            <h3
              style={{
                fontSize: "16px",

                fontWeight: "700",
              }}
            >
              Monthly Performance
            </h3>

            <p
              className="secondary-text"
              style={{
                marginTop: "4px",

                fontSize: "12px",
              }}
            >
              Real backend trading analytics
            </p>

          </div>

          <div
            style={{
              width: "100%",

              height: "320px",
            }}
          >

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart
                data={monthlyPnl}
              >

                <defs>

                  <linearGradient
                    id="growth"
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
                  dataKey="month"

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

                  dataKey="pnl"

                  stroke="#22C55E"

                  strokeWidth={3}

                  fill="url(#growth)"
                />

              </AreaChart>

            </ResponsiveContainer>

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
              marginBottom: "22px",
            }}
          >

            <h3
              style={{
                fontSize: "16px",

                fontWeight: "700",
              }}
            >
              Win Ratio
            </h3>

            <p
              className="secondary-text"
              style={{
                marginTop: "4px",

                fontSize: "12px",
              }}
            >
              Real trade distribution
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

                  outerRadius={100}

                  paddingAngle={4}

                  dataKey="value"
                >

                  {pieData.map(
                    (
                      entry,
                      index
                    ) => (

                      <Cell
                        key={index}

                        fill={
                          COLORS[index]
                        }
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

              gap: "20px",

              marginTop: "10px",
            }}
          >

            <LegendItem
              color="#22C55E"
              title="Winning"
            />

            <LegendItem
              color="#EF4444"
              title="Losing"
            />

          </div>

        </div>

      </div>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "1fr 1fr",

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
                fontSize: "16px",

                fontWeight: "700",
              }}
            >
              Drawdown Analytics
            </h3>

          </div>

          <h1
            style={{
              marginTop: "24px",

              fontSize: "42px",

              fontWeight: "800",

              color: "#EF4444",
            }}
          >
            ${(
              drawdown.maxDrawdown || 0
            ).toFixed(2)}
          </h1>

          <p
            className="secondary-text"
            style={{
              marginTop: "10px",

              lineHeight: "24px",

              fontSize: "13px",
            }}
          >
            Maximum historical account drawdown based on closed trades.
          </p>

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

              <ShieldCheck
                size={18}
                color="#22C55E"
              />

              <h3
                style={{
                  fontSize: "16px",

                  fontWeight: "700",
                }}
              >
                Streak Analytics
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

              <InsightItem
                title="Current Win Streak"
                value={
                  streaks.currentWinStreak || 0
                }
              />

              <InsightItem
                title="Current Loss Streak"
                value={
                  streaks.currentLossStreak || 0
                }
              />

              <InsightItem
                title="Best Win Streak"
                value={
                  streaks.bestWinStreak || 0
                }
                green
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

              <Brain
                size={18}
                color="#8B5CF6"
              />

              <h3
                style={{
                  fontSize: "16px",

                  fontWeight: "700",
                }}
              >
                AI Analytics Coach
              </h3>

            </div>

            <div
              style={{
                marginTop: "20px",

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

              Your analytics are now powered by real backend trading data and live account statistics.

            </div>

          </div>

        </div>

      </div>

      <div
        className="panel"
        style={{
          marginTop: "14px",

          padding: "22px",
        }}
      >

        <div
          style={{
            display: "flex",

            alignItems: "center",

            gap: "10px",

            marginBottom: "22px",
          }}
        >

          <Activity
            size={18}
            color="#3B82F6"
          />

          <h3
            style={{
              fontSize: "16px",

              fontWeight: "700",
            }}
          >
            Account Statistics
          </h3>

        </div>

        <div
          style={{
            display: "grid",

            gridTemplateColumns:
              "repeat(3,1fr)",

            gap: "14px",
          }}
        >

          <StrategyCard
            title="Winning Trades"
            profit={
              summary.winningTrades || 0
            }
            winRate="Successful trades"
          />

          <StrategyCard
            title="Closed Trades"
            profit={
              summary.closedTrades || 0
            }
            winRate="Completed positions"
          />

          <StrategyCard
            title="Open Trades"
            profit={
              summary.openTrades || 0
            }
            winRate="Currently active"
          />

        </div>

      </div>

    </div>
  );
}

function MetricCard({
  title,
  value,
  success,
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
            success
              ? "#22C55E"
              : "white",
        }}
      >
        {value}
      </h2>

    </div>
  );
}

function LegendItem({
  color,
  title,
}) {

  return (

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

          background: color,
        }}
      />

      {title}

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

function StrategyCard({
  title,
  profit,
  winRate,
}) {

  return (

    <div
      style={{
        background:
          "rgba(15,23,42,0.85)",

        borderRadius: "16px",

        padding: "18px",

        border:
          "1px solid rgba(255,255,255,0.03)",
      }}
    >

      <h3
        style={{
          fontSize: "15px",

          fontWeight: "700",
        }}
      >
        {title}
      </h3>

      <h2
        className="success"
        style={{
          marginTop: "14px",

          fontSize: "28px",

          fontWeight: "700",
        }}
      >
        {profit}
      </h2>

      <p
        className="secondary-text"
        style={{
          marginTop: "8px",

          fontSize: "12px",
        }}
      >
        {winRate}
      </p>

    </div>
  );
}