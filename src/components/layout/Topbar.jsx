import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

export default function Topbar() {
  return (
    <div
      style={{
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "18px",
      }}
    >
      <div className="top-search">
        <Search
          size={15}
          color="#7B849A"
        />

        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          className="panel"
          style={{
            width: "34px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            background: "#0B1220",
          }}
        >
          <Bell
            size={15}
            color="#7B849A"
          />
        </div>

        <div
          className="panel"
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#2563EB,#3B82F6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "700",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          A
        </div>

        <ChevronDown
          size={14}
          color="#7B849A"
          style={{
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}