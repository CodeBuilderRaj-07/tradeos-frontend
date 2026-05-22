import {
  LayoutDashboard,
  Activity,
  NotebookPen,
  CandlestickChart,
  BarChart3,
  Calendar,
  Brain,
  Layers3,
  Settings,
  ChevronLeft,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [

  {
    title: "Dashboard",
    icon:
      <LayoutDashboard
        size={18}
        strokeWidth={1.8}
      />,
    path: "/",
  },

  {
    title: "Open Trades",
    icon:
      <Activity
        size={18}
        strokeWidth={1.8}
      />,
    path: "/open-trades",
  },

  {
    title: "Journal",
    icon:
      <NotebookPen
        size={18}
        strokeWidth={1.8}
      />,
    path: "/journal",
  },

  {
    title: "New Trade",
    icon:
      <CandlestickChart
        size={18}
        strokeWidth={1.8}
      />,
    path: "/new-trade",
  },

  {
    title: "Analytics",
    icon:
      <BarChart3
        size={18}
        strokeWidth={1.8}
      />,
    path: "/analytics",
  },

  {
    title: "Calendar",
    icon:
      <Calendar
        size={18}
        strokeWidth={1.8}
      />,
    path: "/calendar",
  },

  {
    title: "AI Insights",
    icon:
      <Brain
        size={18}
        strokeWidth={1.8}
      />,
    path: "/ai-insights",
  },

  {
    title: "Strategies",
    icon:
      <Layers3
        size={18}
        strokeWidth={1.8}
      />,
    path: "/strategies",
  },

  {
    title: "Settings",
    icon:
      <Settings
        size={18}
        strokeWidth={1.8}
      />,
    path: "/settings",
  },
];

export default function Sidebar() {

  return (

    <div
      style={{
        width: "235px",
        height: "100vh",
        background:
          "rgba(5,8,22,0.94)",

        borderRight:
          "1px solid rgba(255,255,255,0.04)",

        padding: "16px 12px",

        position: "fixed",

        left: 0,

        top: 0,

        display: "flex",

        flexDirection: "column",

        justifyContent: "space-between",

        backdropFilter: "blur(12px)",

        zIndex: 100,
      }}
    >

      <div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:
              "space-between",

            marginBottom: "24px",

            padding: "0 6px",
          }}
        >

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >

            <div
              className="glow-blue"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "14px",

                background:
                  "linear-gradient(135deg,#2563EB,#3B82F6)",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                color: "white",

                fontWeight: "700",

                fontSize: "18px",

                boxShadow:
                  "0 0 30px rgba(37,99,235,0.35)",
              }}
            >
              ↗
            </div>

            <div>

              <h1
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  letterSpacing: "-0.5px",
                }}
              >
                TradeOS
              </h1>

              <p
                style={{
                  fontSize: "11px",
                  color: "#3B82F6",
                  marginTop: "2px",
                }}
              >
                Trading Workspace
              </p>

            </div>

          </div>

          <div
            className="panel"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "10px",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              cursor: "pointer",
            }}
          >

            <ChevronLeft
              size={15}
              color="#7B849A"
            />

          </div>

        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >

          {menuItems.map((item) => (

            <NavLink
              key={item.title}
              to={item.path}

              style={({ isActive }) => ({

                display: "flex",

                alignItems: "center",

                gap: "14px",

                padding: "13px 14px",

                borderRadius: "14px",

                textDecoration: "none",

                transition: "0.22s ease",

                background: isActive

                  ? "linear-gradient(90deg, rgba(37,99,235,0.22), rgba(37,99,235,0.06))"

                  : "transparent",

                color: isActive
                  ? "#FFFFFF"
                  : "#8B95A7",

                border: isActive

                  ? "1px solid rgba(59,130,246,0.10)"

                  : "1px solid transparent",

                fontSize: "13px",

                fontWeight:
                  isActive
                    ? "600"
                    : "500",

                boxShadow:
                  isActive
                    ? "0 0 25px rgba(37,99,235,0.08)"
                    : "none",
              })}
            >

              {item.icon}

              <span>
                {item.title}
              </span>

            </NavLink>
          ))}

        </div>

      </div>

      <div
        className="panel"
        style={{
          padding: "14px",
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >

          <div
            className="glow-blue"
            style={{
              width: "42px",
              height: "42px",

              borderRadius: "50%",

              background:
                "linear-gradient(135deg,#2563EB,#3B82F6)",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              color: "white",

              fontWeight: "700",

              fontSize: "14px",
            }}
          >
            A
          </div>

          <div>

            <h4
              style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "white",
              }}
            >
              Ashutosh
            </h4>

            <p
              style={{
                fontSize: "11px",
                color: "#3B82F6",
                marginTop: "2px",
              }}
            >
              Professional Trader
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}