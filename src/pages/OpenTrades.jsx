import {
  TrendingUp,
  ShieldAlert,
  Activity,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  XCircle,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

export default function OpenTrades() {

  const [trades, setTrades] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchOpenTrades();

  }, []);

  const fetchOpenTrades =
    async () => {

      try {

        const response =
          await API.get(
            "/trades/open"
          );

        setTrades(response.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

  const closeTrade =
    async (tradeId) => {

      try {

        await API.put(
          `/trades/${tradeId}/close`,
          {
            closePrice: 0,
          }
        );

        fetchOpenTrades();

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
        Loading Open Trades...
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
            Open Trades
          </h1>

          <p className="page-subtitle">
            Live market execution and active positions
          </p>

        </div>

      </div>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(3,1fr)",

          gap: "14px",

          marginTop: "20px",
        }}
      >

        <TopCard
          title="TOTAL EXPOSURE"
          value={`$${trades.reduce(
            (total, trade) =>
              total +
              (
                trade.entryPrice || 0
              ),
            0
          )}`}
          icon={
            <Wallet
              size={18}
              color="#3B82F6"
            />
          }
        />

        <TopCard
          title="ACTIVE POSITIONS"
          value={trades.length}
          icon={
            <Activity
              size={18}
              color="#22C55E"
            />
          }
        />

        <TopCard
          title="UNREALIZED PNL"
          value={`+$${trades.reduce(
            (total, trade) =>
              total +
              (
                trade.pnl || 0
              ),
            0
          )}`}
          green
          icon={
            <TrendingUp
              size={18}
              color="#22C55E"
            />
          }
        />

      </div>

      {
        trades.length === 0 && (

          <div
            className="panel"
            style={{
              marginTop: "18px",

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
              No Open Trades
            </h2>

            <p
              className="secondary-text"
              style={{
                marginTop: "10px",
              }}
            >
              Your active positions will appear here.
            </p>

          </div>
        )
      }

      <div
        style={{
          marginTop: "14px",

          display: "flex",

          flexDirection: "column",

          gap: "14px",
        }}
      >

        {trades.map(
          (trade, index) => (

            <div
              key={index}

              className="panel"

              style={{
                padding: "22px",

                display: "grid",

                gridTemplateColumns:
                  "1.2fr 1fr 1fr 1fr 1fr auto",

                gap: "14px",

                alignItems: "center",
              }}
            >

              <div>

                <div
                  style={{
                    display: "flex",

                    alignItems: "center",

                    gap: "12px",
                  }}
                >

                  <div
                    style={{
                      width: "46px",
                      height: "46px",

                      borderRadius: "14px",

                      background:
                        trade.tradeType ===
                        "SELL"

                          ? "rgba(239,68,68,0.12)"

                          : "rgba(34,197,94,0.12)",

                      display: "flex",

                      alignItems: "center",

                      justifyContent: "center",
                    }}
                  >

                    {
                      trade.tradeType ===
                      "SELL"

                        ? (
                          <ArrowDownRight
                            size={20}
                            color="#EF4444"
                          />
                        )

                        : (
                          <ArrowUpRight
                            size={20}
                            color="#22C55E"
                          />
                        )
                    }

                  </div>

                  <div>

                    <h3
                      style={{
                        fontSize: "16px",

                        fontWeight: "700",
                      }}
                    >
                      {trade.symbol}
                    </h3>

                    <p
                      className="secondary-text"
                      style={{
                        marginTop: "5px",

                        fontSize: "12px",
                      }}
                    >
                      {trade.tradeType}
                    </p>

                  </div>

                </div>

              </div>

              <TradeStat
                title="ENTRY"
                value={trade.entryPrice}
              />

              <TradeStat
                title="STOP LOSS"
                value={trade.stopLoss}
              />

              <TradeStat
                title="TAKE PROFIT"
                value={trade.takeProfit}
                blue
              />

              <div>

                <h2
                  style={{
                    color:
                      trade.pnl < 0

                        ? "#EF4444"

                        : "#22C55E",

                    fontWeight: "700",

                    fontSize: "28px",
                  }}
                >
                  ${trade.pnl || 0}
                </h2>

                <div
                  style={{
                    marginTop: "10px",
                  }}
                >

                  <span
                    style={{
                      padding:
                        "6px 12px",

                      borderRadius:
                        "999px",

                      fontSize: "11px",

                      fontWeight: "600",

                      background:
                        "rgba(34,197,94,0.12)",

                      color:
                        "#22C55E",
                    }}
                  >
                    OPEN
                  </span>

                </div>

              </div>

              <button
                onClick={() =>
                  closeTrade(
                    trade.id
                  )
                }

                style={{
                  width: "42px",

                  height: "42px",

                  borderRadius: "12px",

                  border: "none",

                  background:
                    "rgba(239,68,68,0.12)",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  cursor: "pointer",
                }}
              >

                <XCircle
                  size={18}
                  color="#EF4444"
                />

              </button>

            </div>
          )
        )}

      </div>

    </div>
  );
}

function TopCard({
  title,
  value,
  icon,
  green,
}) {

  return (

    <div
      className="panel"
      style={{
        padding: "20px",
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

function TradeStat({
  title,
  value,
  blue,
}) {

  return (

    <div>

      <p
        className="metric-title"
        style={{
          marginBottom: "8px",
        }}
      >
        {title}
      </p>

      <h3
        style={{
          fontSize: "18px",

          fontWeight: "700",

          color:
            blue
              ? "#3B82F6"
              : "white",
        }}
      >
        {value}
      </h3>

    </div>
  );
}