const trades = [
  {
    pair: "BTCUSD",
    type: "Long",
    entry: "67,245",
    current: "68,120",
    pnl: "+$875",
    leverage: "10x",
    status: "Running",
  },

  {
    pair: "ETHUSD",
    type: "Short",
    entry: "3,420",
    current: "3,280",
    pnl: "+$420",
    leverage: "5x",
    status: "Running",
  },

  {
    pair: "XAUUSD",
    type: "Long",
    entry: "2,338",
    current: "2,320",
    pnl: "-$120",
    leverage: "8x",
    status: "Risk",
  },

  {
    pair: "EURUSD",
    type: "Scalp",
    entry: "1.0854",
    current: "1.0832",
    pnl: "+$222",
    leverage: "15x",
    status: "Running",
  },
];

export default function OpenTrades() {
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
            Monitor active market positions
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
          + New Trade
        </button>
      </div>

      <div
        className="panel"
        style={{
          marginTop: "18px",
          padding: "18px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1.2fr 1fr 1fr 1fr 1fr 1fr 1fr",
            paddingBottom: "14px",
            borderBottom:
              "1px solid rgba(255,255,255,0.03)",
            color: "#7B849A",
            fontSize: "11px",
            fontWeight: "600",
            letterSpacing: "0.5px",
          }}
        >
          <div>PAIR</div>
          <div>TYPE</div>
          <div>ENTRY</div>
          <div>CURRENT</div>
          <div>PNL</div>
          <div>LEVERAGE</div>
          <div>STATUS</div>
        </div>

        <div
          style={{
            marginTop: "4px",
          }}
        >
          {trades.map((trade, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1.2fr 1fr 1fr 1fr 1fr 1fr 1fr",
                alignItems: "center",
                padding: "16px 0",
                borderBottom:
                  "1px solid rgba(255,255,255,0.02)",
                fontSize: "13px",
              }}
            >
              <div
                style={{
                  fontWeight: "600",
                }}
              >
                {trade.pair}
              </div>

              <div
                style={{
                  color: "#94A3B8",
                }}
              >
                {trade.type}
              </div>

              <div>
                {trade.entry}
              </div>

              <div>
                {trade.current}
              </div>

              <div
                style={{
                  color:
                    trade.pnl.includes("-")
                      ? "#EF4444"
                      : "#22C55E",
                  fontWeight: "600",
                }}
              >
                {trade.pnl}
              </div>

              <div
                style={{
                  color: "#3B82F6",
                  fontWeight: "600",
                }}
              >
                {trade.leverage}
              </div>

              <div>
                <span
                  style={{
                    padding: "6px 10px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: "600",
                    background:
                      trade.status === "Risk"
                        ? "rgba(239,68,68,0.12)"
                        : "rgba(34,197,94,0.12)",
                    color:
                      trade.status === "Risk"
                        ? "#EF4444"
                        : "#22C55E",
                  }}
                >
                  {trade.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr 1fr",
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
          <p className="metric-title">
            TOTAL EXPOSURE
          </p>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            $84,240
          </h2>
        </div>

        <div
          className="panel"
          style={{
            padding: "18px",
          }}
        >
          <p className="metric-title">
            ACTIVE POSITIONS
          </p>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            4
          </h2>
        </div>

        <div
          className="panel"
          style={{
            padding: "18px",
          }}
        >
          <p className="metric-title">
            UNREALIZED PNL
          </p>

          <h2
            style={{
              marginTop: "12px",
              fontSize: "28px",
              fontWeight: "700",
              color: "#22C55E",
            }}
          >
            +$1,397
          </h2>
        </div>
      </div>
    </div>
  );
}