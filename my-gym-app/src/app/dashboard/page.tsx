"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getItem, clearAll } from "@/utils/storage";

export default function DashboardPage() {
  const router = useRouter();
  const [userID, setUserID] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUserID = getItem("userID");
    const accCreated = getItem("accCreated");

    if (!storedUserID || accCreated !== "1") {
      router.replace("/login");
      return;
    }

    setUserID(storedUserID);
    setLoading(false);

    const interval = setInterval(() => {
      const id = getItem("userID");
      if (!id) {
        clearInterval(interval);
        router.replace("/login");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleLogout() {
    clearAll();
    router.replace("/login");
  }

  if (loading) {
    return (
      <div style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#111122",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#aaaaaa",
        fontFamily: "sans-serif",
        fontSize: "16px",
      }}>
        Loading...
      </div>
    );
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { height: 100%; background: #111122; }

        .dashboard {
          min-height: 100vh;
          background: #111122;
          font-family: sans-serif;
          color: #ffffff;
        }

        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: #1a1a2e;
          border-bottom: 1px solid #2a2a44;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #c8ff00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 800;
          color: #111111;
          flex-shrink: 0;
        }

        .logo-text {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
        }

        .logout-btn {
          padding: 10px 20px;
          border-radius: 10px;
          border: 1px solid #ff4444;
          background: transparent;
          color: #ff4444;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .logout-btn:hover {
          background: rgba(255,68,68,0.1);
        }

        /* CONTENT */
        .content {
          padding: 32px 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .welcome-section {
          margin-bottom: 32px;
        }

        .welcome-title {
          font-size: 26px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .welcome-sub {
          font-size: 14px;
          color: #888899;
        }

        /* CARDS GRID */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .info-card {
          background: #1a1a2e;
          border: 1px solid #2a2a44;
          border-radius: 16px;
          padding: 20px;
        }

        .card-label {
          color: #888899;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .card-value-green {
          color: #c8ff00;
          font-size: 13px;
          font-weight: 600;
          word-break: break-all;
        }

        .card-value-white {
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
        }

        .status-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #c8ff00;
          flex-shrink: 0;
        }

        .status-text {
          color: #c8ff00;
          font-size: 16px;
          font-weight: 700;
        }

        /* BOTTOM CARD */
        .bottom-card {
          background: #1a1a2e;
          border: 1px solid #2a2a44;
          border-radius: 16px;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 260px;
        }

        .bottom-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: rgba(200,255,0,0.1);
          border: 1px solid rgba(200,255,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          margin-bottom: 20px;
        }

        .bottom-title {
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .bottom-desc {
          color: #666688;
          font-size: 14px;
          line-height: 1.6;
          max-width: 340px;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .navbar {
            padding: 14px 16px;
          }

          .logo-text {
            font-size: 16px;
          }

          .logout-btn {
            padding: 8px 14px;
            font-size: 13px;
          }

          .content {
            padding: 24px 16px;
          }

          .welcome-title {
            font-size: 22px;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .info-card {
            padding: 16px;
          }

          .bottom-card {
            padding: 32px 16px;
            min-height: 200px;
          }

          .bottom-title {
            font-size: 18px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .content {
            padding: 28px 32px;
          }
        }

        @media (min-width: 1025px) {
          .content {
            padding: 40px 48px;
          }

          .welcome-title {
            font-size: 30px;
          }
        }
      `}</style>

      <div className="dashboard">

        <nav className="navbar">
          <div className="navbar-logo">
            <div className="logo-box">G</div>
            <span className="logo-text">GymManager</span>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>

        <div className="content">

          <div className="welcome-section">
            <h1 className="welcome-title">Welcome back!</h1>
            <p className="welcome-sub">Here is your account overview.</p>
          </div>

          <div className="cards-grid">

            <div className="info-card">
              <p className="card-label">User ID</p>
              <p className="card-value-green">{userID}</p>
            </div>

            <div className="info-card">
              <p className="card-label">Role</p>
              <p className="card-value-white">Manager</p>
            </div>

            <div className="info-card">
              <p className="card-label">Account Status</p>
              <div className="status-row">
                <div className="status-dot" />
                <p className="status-text">Active</p>
              </div>
            </div>

          </div>

          <div className="bottom-card">
            <div className="bottom-icon">🏋️</div>
            <h2 className="bottom-title">Your Dashboard is Ready</h2>
            <p className="bottom-desc">
              Membership management features will appear here.
              Your account is fully set up and active.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
