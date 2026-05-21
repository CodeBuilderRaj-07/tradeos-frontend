import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

export default function MainLayout({ children }) {
  return (
    <div className="main-bg">
      <Sidebar />

      <div
        style={{
          marginLeft: "220px",
          minHeight: "100vh",
          padding: "12px 16px",
        }}
      >
        <Topbar />

        <div
          style={{
            marginTop: "8px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}