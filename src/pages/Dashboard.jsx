import {
  DollarSign,
  TrendingUp,
  Target,
  Activity,
  Flame,
  Brain,
  ShieldCheck,
  Newspaper,
} from "lucide-react";

import {
  useEffect,
  useState,
  useRef,
} from "react";

import {
  createChart,
} from "lightweight-charts";

import API from "../services/api";

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

  const [news, setNews] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const chartContainerRef =
    useRef(null);

  useEffect(() => {

    fetchDashboardData();

    const interval =
      setInterval(() => {

        fetchDashboardData();

      }, 30000);

    return () =>
      clearInterval(interval);

  }, []);

  useEffect(() => {

    if (!chartContainerRef.current)
      return;

    const chart =
      createChart(
        chartContainerRef.current,
        {
          width:
            chartContainerRef.current
              .clientWidth,

          height: 320,

          layout: {

            background: {
              color: "transparent",
            },

            textColor: "#7B849A",
          },

          grid: {

            vertLines: {
              color:
                "rgba(255,255,255,0.03)",
            },

            horzLines: {
              color:
                "rgba(255,255,255,0.03)",
            },
          },

          rightPriceScale: {

            borderColor:
              "rgba(255,255,255,0.08)",
          },

          timeScale: {

            borderColor:
              "rgba(255,255,255,0.08)",
          },
        }
      );

    const candleSeries =
      chart.addCandlestickSeries({

        upColor: "#22C55E",

        downColor: "#EF4444",

        borderVisible: false,

        wickUpColor: "#22C55E",

        wickDownColor: "#EF4444",
      });

    candleSeries.setData([

      {
        time: 1735689600,
        open: 96000,
        high: 96800,
        low: 95500,
        close: 96500,
      },

      {
        time: 1735776000,
        open: 96500,
        high: 97800,
        low: 96000,
        close: 97500,
      },

      {
        time: 1735862400,
        open: 97500,
        high: 99000,
        low: 97000,
        close: 98800,
      },

      {
        time: 1735948800,
        open: 98800,
        high: 100800,
        low: 98200,
        close: 100200,
      },
    ]);

    return () => {

      chart.remove();
    };

  }, []);

  const fetchDashboardData =
    async () => {

      try {

        const [
          dashboardResponse,
          newsResponse,
        ] = await Promise.all([

          API.get(
            "/dashboard/summary"
          ),

          API.get("/news"),
        ]);

        setSummary(
          dashboardResponse.data
        );

        setNews(
          newsResponse.data.articles
            ?.slice(0, 5) || []
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
            minHeight: "420px",
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
                }}
              >
                BTCUSDT Market Chart
              </h3>

              <p
                className="secondary-text"
                style={{
                  marginTop: "6px",
                  fontSize: "12px",
                }}
              >
                Professional candlestick market visualization
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
              ACTIVE
            </div>

          </div>

          <div
            ref={chartContainerRef}
            style={{
              width: "100%",
              height: "320px",
              marginTop: "24px",
            }}
          />

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
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Discipline Score
              </h3>

            </div>

            <h1
              style={{
                fontSize: "42px",
                marginTop: "16px",
                fontWeight: "800",
                color: "#22C55E",
              }}
            >
              92%
            </h1>

          </div>

          <div
            className="panel glow-blue"
            style={{
              padding: "20px",
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
                Winning Streak
              </h3>

            </div>

            <h2
              style={{
                marginTop: "16px",
                fontSize: "28px",
                fontWeight: "700",
              }}
            >
              7 Days
            </h2>

          </div>

          <div
            className="panel glow-blue"
            style={{
              padding: "20px",
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
                color="#3B82F6"
              />

              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                AI Market Insight
              </h3>

            </div>

            <p
              className="secondary-text"
              style={{
                marginTop: "16px",
                lineHeight: "24px",
                fontSize: "12px",
              }}
            >
              BTC momentum remains bullish with increasing volatility and strong buyer pressure.
            </p>

          </div>

          <div
            className="panel"
            style={{
              padding: "18px",
              minHeight: "320px",
            }}
          >

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "18px",
              }}
            >

              <Newspaper
                size={18}
                color="#3B82F6"
              />

              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Market News
              </h3>

            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >

              {news.map((item, index) => (

                <div
                  key={index}
                  style={{
                    paddingBottom: "14px",
                    borderBottom:
                      "1px solid rgba(255,255,255,0.06)",
                  }}
                >

                  <h4
                    style={{
                      fontSize: "12px",
                      lineHeight: "18px",
                      fontWeight: "600",
                      color: "#E5E7EB",
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      marginTop: "6px",
                      fontSize: "11px",
                      color: "#7B849A",
                    }}
                  >
                    {item.source?.name}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}