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
    icon: <LayoutDashboard size={18} strokeWidth={1.8} />,
    path: "/",
  },

  {
    title: "Open Trades",
    icon: <Activity size={18} strokeWidth={1.8} />,
    path: "/open-trades",
  },

  {
    title: "Journal",
    icon: <NotebookPen size={18} strokeWidth={1.8} />,
    path: "/journal",
  },

  {
    title: "New Trade",
    icon: <CandlestickChart size={18} strokeWidth={1.8} />,
    path: "/new-trade",
  },

  {
    title: "Analytics",
    icon: <BarChart3 size={18} strokeWidth={1.8} />,
    path: "/analytics",
  },

  {
    title: "Calendar",
    icon: <Calendar size={18} strokeWidth={1.8} />,
    path: "/calendar",
  },

  {
    title: "AI Insights",
    icon: <Brain size={18} strokeWidth={1.8} />,
    path: "/ai-insights",
  },

  {
    title: "Strategies",
    icon: <Layers3 size={18} strokeWidth={1.8} />,
    path: "/strategies",
  },

  {
    title: "Settings",
    icon: <Settings size={18} strokeWidth={1.8} />,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#050816",
        borderRight: "1px solid rgba(255,255,255,0.03)",
        padding: "14px 10px",
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "18px",
            padding: "0 4px",
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
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg,#2563EB,#3B82F6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "700",
                fontSize: "16px",
                boxShadow:
                  "0 0 20px rgba(37,99,235,0.35)",
              }}
            >
              ↗
            </div>

            <h1
              style={{
                fontSize: "15px",
                fontWeight: "700",
                color: "#FFFFFF",
              }}
            >
              TradeOS
            </h1>
          </div>

          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              background: "#0A1020",
              border: "1px solid rgba(255,255,255,0.03)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ChevronLeft
              size={14}
              color="#7B849A"
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            marginTop: "10px",
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
                transition: "0.2s ease",
                background: isActive
                  ? "linear-gradient(90deg, rgba(37,99,235,0.28), rgba(37,99,235,0.08))"
                  : "transparent",
                color: isActive
                  ? "#FFFFFF"
                  : "#8B95A7",
                fontSize: "14px",
                fontWeight: isActive ? "600" : "500",
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
        style={{
          padding: "14px",
          borderRadius: "16px",
          background: "#0A1020",
          border: "1px solid rgba(255,255,255,0.03)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
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
              Pro Plan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}