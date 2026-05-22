import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

import {
  requestNotificationPermission,
} from "../../services/oneSignal";

export default function Topbar() {

  return (

    <div
      style={{
        height: "58px",

        display: "flex",

        alignItems: "center",

        justifyContent: "space-between",

        marginBottom: "22px",
      }}
    >

      <div
        className="top-search"
        style={{
          boxShadow:
            "0 0 20px rgba(0,0,0,0.15)",
        }}
      >

        <Search
          size={16}
          color="#7B849A"
        />

        <input
          type="text"
          placeholder=
            "Search trades, analytics..."
        />

      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >

        <div
          className="panel"
          style={{
            padding: "8px 12px",

            display: "flex",

            alignItems: "center",

            gap: "8px",

            background:
              "rgba(15,23,42,0.88)",
          }}
        >

          <div
            className="glow-green"
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22C55E",
            }}
          />

          <span
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#E5E7EB",
            }}
          >
            Live Market
          </span>

        </div>

        <div
          onClick={
            requestNotificationPermission
          }
          className="panel"
          style={{
            width: "38px",
            height: "38px",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            cursor: "pointer",

            background:
              "rgba(15,23,42,0.92)",

            borderRadius: "12px",

            position: "relative",
          }}
        >

          <Bell
            size={16}
            color="#A1A1AA"
          />

          <div
            style={{
              width: "8px",
              height: "8px",

              borderRadius: "50%",

              background: "#3B82F6",

              position: "absolute",

              top: "10px",

              right: "10px",

              boxShadow:
                "0 0 10px rgba(59,130,246,0.8)",
            }}
          />

        </div>

        <div
          className="panel"
          style={{
            padding: "6px 10px",

            display: "flex",

            alignItems: "center",

            gap: "10px",

            background:
              "rgba(15,23,42,0.92)",

            cursor: "pointer",
          }}
        >

          <div
            className="glow-blue"
            style={{
              width: "36px",
              height: "36px",

              borderRadius: "50%",

              background:
                "linear-gradient(135deg,#2563EB,#3B82F6)",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              color: "white",

              fontWeight: "700",

              fontSize: "13px",
            }}
          >
            A
          </div>

          <div>

            <h4
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Ashutosh
            </h4>

            <p
              style={{
                fontSize: "11px",
                color: "#7B849A",
                marginTop: "2px",
              }}
            >
              Professional
            </p>

          </div>

          <ChevronDown
            size={15}
            color="#7B849A"
          />

        </div>

      </div>

    </div>
  );
}