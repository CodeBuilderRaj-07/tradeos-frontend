import { useState } from "react";

import API from "../services/api";

export default function NewTrade() {

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({

    symbol: "",

    tradeType: "Long",

    entryPrice: "",

    stopLoss: "",

    takeProfit: "",

    positionSize: "",

    notes: "",

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });
  };

  const handleSubmit = async () => {

    try {

      setLoading(true);

      setMessage("");

      await API.post(
        "/trades/create",
        {
          ...formData,

          entryPrice:
            Number(formData.entryPrice),

          stopLoss:
            Number(formData.stopLoss),

          takeProfit:
            Number(formData.takeProfit),

          positionSize:
            Number(formData.positionSize),
        }
      );

      setMessage("Trade Created Successfully");

      setFormData({

        symbol: "",

        tradeType: "Long",

        entryPrice: "",

        stopLoss: "",

        takeProfit: "",

        positionSize: "",

        notes: "",
      });

    } catch (error) {

      console.log(error);

      setMessage("Failed To Create Trade");

    } finally {

      setLoading(false);
    }
  };

  const riskAmount =

    formData.entryPrice &&
    formData.stopLoss &&
    formData.positionSize

      ? (
          Math.abs(
            formData.entryPrice -
              formData.stopLoss
          ) * formData.positionSize
        ).toFixed(2)

      : 0;

  const rewardAmount =

    formData.entryPrice &&
    formData.takeProfit &&
    formData.positionSize

      ? (
          Math.abs(
            formData.takeProfit -
              formData.entryPrice
          ) * formData.positionSize
        ).toFixed(2)

      : 0;

  const rrRatio =

    riskAmount > 0

      ? (
          rewardAmount / riskAmount
        ).toFixed(2)

      : 0;

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
            New Trade
          </h1>

          <p className="page-subtitle">
            Create and execute trading positions
          </p>

        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
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
          {
            loading
              ? "Creating..."
              : "Execute Trade"
          }
        </button>

      </div>

      {
        message && (

          <div
            style={{
              marginTop: "14px",
              padding: "12px",
              borderRadius: "10px",
              background:
                message.includes("Successfully")

                  ? "rgba(34,197,94,0.12)"

                  : "rgba(239,68,68,0.12)",

              color:
                message.includes("Successfully")

                  ? "#22C55E"

                  : "#EF4444",

              fontSize: "13px",
            }}
          >
            {message}
          </div>
        )
      }

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1.2fr 0.8fr",
          gap: "12px",
          marginTop: "18px",
        }}
      >

        <div
          className="panel"
          style={{
            padding: "20px",
          }}
        >

          <h3
            style={{
              fontSize: "15px",
              fontWeight: "600",
            }}
          >
            Trade Details
          </h3>

          <div
            style={{
              marginTop: "20px",
              display: "grid",
              gridTemplateColumns:
                "1fr 1fr",
              gap: "14px",
            }}
          >

            <div>

              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Trading Pair
              </label>

              <input
                name="symbol"
                value={formData.symbol}
                onChange={handleChange}
                placeholder="BTCUSD"
                style={inputStyle}
              />

            </div>

            <div>

              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Trade Type
              </label>

              <select
                name="tradeType"
                value={formData.tradeType}
                onChange={handleChange}
                style={inputStyle}
              >
                <option>
                  Long
                </option>

                <option>
                  Short
                </option>

                <option>
                  Scalping
                </option>
              </select>

            </div>

            <div>

              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Entry Price
              </label>

              <input
                name="entryPrice"
                value={formData.entryPrice}
                onChange={handleChange}
                placeholder="0.00"
                style={inputStyle}
              />

            </div>

            <div>

              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Position Size
              </label>

              <input
                name="positionSize"
                value={formData.positionSize}
                onChange={handleChange}
                placeholder="0.10"
                style={inputStyle}
              />

            </div>

            <div>

              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Stop Loss
              </label>

              <input
                name="stopLoss"
                value={formData.stopLoss}
                onChange={handleChange}
                placeholder="0.00"
                style={inputStyle}
              />

            </div>

            <div>

              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Take Profit
              </label>

              <input
                name="takeProfit"
                value={formData.takeProfit}
                onChange={handleChange}
                placeholder="0.00"
                style={inputStyle}
              />

            </div>

          </div>

          <div
            style={{
              marginTop: "18px",
            }}
          >

            <label
              className="secondary-text"
              style={{
                fontSize: "11px",
              }}
            >
              Trade Notes
            </label>

            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Trade setup, psychology, market reasoning..."
              style={{
                width: "100%",
                marginTop: "8px",
                minHeight: "140px",
                background: "#0F172A",
                border:
                  "1px solid rgba(255,255,255,0.04)",
                borderRadius: "14px",
                padding: "14px",
                color: "white",
                outline: "none",
                fontSize: "13px",
                resize: "none",
              }}
            />

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
              padding: "20px",
            }}
          >

            <h3
              style={{
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Risk Summary
            </h3>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >

              <div>

                <p className="metric-title">
                  ESTIMATED RISK
                </p>

                <h2
                  style={{
                    marginTop: "8px",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  ${riskAmount}
                </h2>

              </div>

              <div>

                <p className="metric-title">
                  R:R RATIO
                </p>

                <h2
                  className="success"
                  style={{
                    marginTop: "8px",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  1:{rrRatio}
                </h2>

              </div>

              <div>

                <p className="metric-title">
                  ESTIMATED PROFIT
                </p>

                <h2
                  className="success"
                  style={{
                    marginTop: "8px",
                    fontSize: "28px",
                    fontWeight: "700",
                  }}
                >
                  +${rewardAmount}
                </h2>

              </div>

            </div>

          </div>

          <div
            className="panel"
            style={{
              padding: "20px",
            }}
          >

            <h3
              style={{
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              AI Trade Analysis
            </h3>

            <div
              style={{
                marginTop: "18px",
                background: "#0F172A",
                borderRadius: "14px",
                padding: "16px",
                lineHeight: "1.8",
                fontSize: "13px",
                color: "#CBD5E1",
              }}
            >
              TradeOS AI estimates this setup has a strong risk-reward profile based on your entered parameters.
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

const inputStyle = {

  width: "100%",

  marginTop: "8px",

  height: "46px",

  background: "#0F172A",

  border:
    "1px solid rgba(255,255,255,0.04)",

  borderRadius: "12px",

  padding: "0 14px",

  color: "white",

  outline: "none",

  fontSize: "13px",
};