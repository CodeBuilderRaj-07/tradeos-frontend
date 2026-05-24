import { useState } from "react";

import {
  ArrowUpRight,
  ArrowDownRight,
  Brain,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import API from "../services/api";

export default function NewTrade() {

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [formData, setFormData] =
    useState({

      symbol: "",

      tradeType: "BUY",

      entryPrice: "",

      stopLoss: "",

      takeProfit: "",

      positionSize: "",

      notes: "",
    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
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
            Number(
              formData.entryPrice
            ),

          stopLoss:
            Number(
              formData.stopLoss
            ),

          takeProfit:
            Number(
              formData.takeProfit
            ),

          positionSize:
            Number(
              formData.positionSize
            ),
        }
      );

      setMessage(
        "Trade Executed Successfully"
      );

      setFormData({

        symbol: "",

        tradeType: "BUY",

        entryPrice: "",

        stopLoss: "",

        takeProfit: "",

        positionSize: "",

        notes: "",
      });

    } catch (error) {

      console.log(error);

      setMessage(
        "Failed To Create Trade"
      );

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
          ) *
          formData.positionSize
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
          ) *
          formData.positionSize
        ).toFixed(2)

      : 0;

  const rrRatio =

    riskAmount > 0

      ? (
          rewardAmount /
          riskAmount
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
            Advanced execution terminal
          </p>

        </div>

        <button
          onClick={handleSubmit}

          disabled={loading}

          style={{
            height: "46px",

            padding: "0 22px",

            borderRadius: "14px",

            border: "none",

            background:
              "linear-gradient(135deg,#2563EB,#3B82F6)",

            color: "white",

            fontWeight: "600",

            cursor: "pointer",

            fontSize: "13px",

            boxShadow:
              "0 0 30px rgba(37,99,235,0.25)",
          }}
        >
          {
            loading
              ? "Executing..."
              : "Execute Trade"
          }
        </button>

      </div>

      {
        message && (

          <div
            style={{
              marginTop: "16px",

              padding: "14px",

              borderRadius: "14px",

              background:
                message.includes(
                  "Successfully"
                )

                  ? "rgba(34,197,94,0.12)"

                  : "rgba(239,68,68,0.12)",

              color:
                message.includes(
                  "Successfully"
                )

                  ? "#22C55E"

                  : "#EF4444",

              fontSize: "13px",

              fontWeight: "600",
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
            "1.3fr 0.8fr",

          gap: "14px",

          marginTop: "20px",
        }}
      >

        <div
          className="panel"
          style={{
            padding: "24px",
          }}
        >

          <div
            style={{
              display: "flex",
              gap: "12px",
              marginBottom: "24px",
            }}
          >

            <button
              onClick={() =>
                setFormData({
                  ...formData,
                  tradeType: "BUY",
                })
              }

              style={{
                flex: 1,

                height: "48px",

                borderRadius: "14px",

                border: "none",

                background:
                  formData.tradeType ===
                  "BUY"

                    ? "linear-gradient(135deg,#22C55E,#16A34A)"

                    : "#0F172A",

                color: "white",

                fontWeight: "600",

                cursor: "pointer",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                gap: "8px",
              }}
            >

              <ArrowUpRight
                size={18}
              />

              Long Position

            </button>

            <button
              onClick={() =>
                setFormData({
                  ...formData,
                  tradeType: "SELL",
                })
              }

              style={{
                flex: 1,

                height: "48px",

                borderRadius: "14px",

                border: "none",

                background:
                  formData.tradeType ===
                  "SELL"

                    ? "linear-gradient(135deg,#EF4444,#DC2626)"

                    : "#0F172A",

                color: "white",

                fontWeight: "600",

                cursor: "pointer",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                gap: "8px",
              }}
            >

              <ArrowDownRight
                size={18}
              />

              Short Position

            </button>

          </div>

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "1fr 1fr",

              gap: "16px",
            }}
          >

            <InputField
              label="Trading Pair"
              name="symbol"
              value={formData.symbol}
              onChange={handleChange}
              placeholder="BTCUSD"
            />

            <InputField
              label="Position Size"
              name="positionSize"
              value={
                formData.positionSize
              }
              onChange={handleChange}
              placeholder="0.10"
            />

            <InputField
              label="Entry Price"
              name="entryPrice"
              value={
                formData.entryPrice
              }
              onChange={handleChange}
              placeholder="0.00"
            />

            <InputField
              label="Stop Loss"
              name="stopLoss"
              value={
                formData.stopLoss
              }
              onChange={handleChange}
              placeholder="0.00"
            />

            <InputField
              label="Take Profit"
              name="takeProfit"
              value={
                formData.takeProfit
              }
              onChange={handleChange}
              placeholder="0.00"
            />

            <div>

              <label
                className="secondary-text"
                style={{
                  fontSize: "11px",
                }}
              >
                Confidence Level
              </label>

              <div
                className="panel"
                style={{
                  marginTop: "8px",

                  height: "48px",

                  padding:
                    "0 14px",

                  display: "flex",

                  alignItems: "center",

                  justifyContent:
                    "space-between",
                }}
              >

                <span>
                  84%
                </span>

                <span
                  className="blue-text"
                  style={{
                    fontSize: "12px",
                  }}
                >
                  High Confidence
                </span>

              </div>

            </div>

          </div>

          <div
            style={{
              marginTop: "22px",
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

              placeholder="Market structure, liquidity, psychology, setup confirmation..."

              style={{
                width: "100%",

                marginTop: "8px",

                minHeight: "180px",

                background:
                  "#0F172A",

                border:
                  "1px solid rgba(255,255,255,0.04)",

                borderRadius:
                  "16px",

                padding: "16px",

                color: "white",

                outline: "none",

                fontSize: "13px",

                resize: "none",

                lineHeight: "24px",
              }}
            />

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

              <ShieldCheck
                size={18}
                color="#3B82F6"
              />

              <h3
                style={{
                  fontSize: "16px",

                  fontWeight: "700",
                }}
              >
                Risk Summary
              </h3>

            </div>

            <div
              style={{
                marginTop: "24px",

                display: "flex",

                flexDirection: "column",

                gap: "20px",
              }}
            >

              <RiskItem
                title="Estimated Risk"
                value={`$${riskAmount}`}
              />

              <RiskItem
                title="Risk Reward Ratio"
                value={`1:${rrRatio}`}
                green
              />

              <RiskItem
                title="Potential Profit"
                value={`+$${rewardAmount}`}
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
                AI Trade Analysis
              </h3>

            </div>

            <div
              style={{
                marginTop: "20px",

                background:
                  "rgba(15,23,42,0.92)",

                borderRadius: "16px",

                padding: "18px",

                lineHeight: "24px",

                fontSize: "13px",

                color: "#CBD5E1",

                border:
                  "1px solid rgba(255,255,255,0.04)",
              }}
            >

              TradeOS AI detects strong RR conditions and healthy risk exposure.

              Current setup aligns with your highest-performing execution patterns.

            </div>

            <div
              style={{
                marginTop: "18px",

                display: "flex",

                alignItems: "center",

                gap: "10px",
              }}
            >

              <Sparkles
                size={16}
                color="#3B82F6"
              />

              <p
                style={{
                  fontSize: "12px",

                  color: "#3B82F6",

                  fontWeight: "600",
                }}
              >
                AI Confidence:
                89%
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
}) {

  return (

    <div>

      <label
        className="secondary-text"
        style={{
          fontSize: "11px",
        }}
      >
        {label}
      </label>

      <input
        name={name}

        value={value}

        onChange={onChange}

        placeholder={placeholder}

        style={inputStyle}
      />

    </div>
  );
}

function RiskItem({
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

  marginTop: "8px",

  height: "50px",

  background: "#0F172A",

  border:
    "1px solid rgba(255,255,255,0.04)",

  borderRadius: "14px",

  padding: "0 14px",

  color: "white",

  outline: "none",

  fontSize: "13px",
};