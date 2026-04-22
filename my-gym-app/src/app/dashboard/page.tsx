"use client";

import { clearAll, getItem } from "@/utils/storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
  }, []);

  function handleLogout() {
    clearAll();
    router.replace("/login");
  }

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#111122",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#aaaaaa",
          fontFamily: "sans-serif",
          fontSize: "16px",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#111122",
        fontFamily: "sans-serif",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #2a2a44",
          backgroundColor: "#1a1a2e",
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
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "#c8ff00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#111111",
                fontSize: "16px",
                fontWeight: "800",
              }}
            >
              G
            </span>
          </div>
          <span
            style={{
              color: "ffffff",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            GymManager
          </span>
        </div>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 24px",
            borderRadius: "10px",
            border: "1px solid #ff4444",
            backgroundColor: "transparent",
            color: "#ff4444",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          padding: "40px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: "36px",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: "700",
              margin: "0 0 6px 0",
            }}
          >
            Welcome back!
          </h1>
          <p
            style={{
              color: "#888800",
              fontSize: "15px",
              margin: 0,
            }}
          >
            Here is your account overview.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              backgroundColor: "#1a1a2e",
              border: "1px solid #2a2a44",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <p
              style={{
                color: "#888899",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "1px",
                textTransform: "uppercase",
                margin: "0 0 10px 0",
              }}
            >
              User ID
            </p>
            <p
              style={{
                color: "#c8ff00",
                fontSize: "13px",
                fontWeight: "600",
                margin: 0,
                wordBreak: "break-all",
              }}
            >
              {userID}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#1a1a2e",
              border: "1px solid #2a2a44",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <p
              style={{
                color: "#888899",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "1px",
                textTransform: "uppercase",
                margin: "0 0 10px 0",
              }}
            >
              Role
            </p>
            <p
              style={{
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "700",
                margin: 0,
              }}
            >
              Manager
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#1a1a2e",
              border: "1px solid #2a2a44",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <p
              style={{
                color: "#888899",
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "1px",
                textTransform: "uppercase",
                margin: "0 0 10px 0",
              }}
            >
              Account Status
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#c8ff00",
                }}
              />
              <p
                style={{
                  color: "#c8ff00",
                  fontSize: "16px",
                  fontWeight: "700",
                  margin: 0,
                }}
              >
                Active
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#1a1a2e",
            border: "1px solid #2a2a44",
            borderRadius: "16px",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "300px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#1a1a2e",
              border: "1px solid #2a2a44",
              borderRadius: "16px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "300px",
              textAlign: "center",
            }}
          >
            🏋️
          </div>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: "700",
              margin: "0 0 10px 0",
            }}
          >
            Your Dashboard is Ready
          </h2>
          <p
            style={{
              color: "#666688",
              fontSize: "14px",
              lineHeight: "1.6",
              maxWidth: "360px",
              margin: 0,
            }}
          >
            Membership management features will appear here. Your account is
            fully set up and active.
          </p>
        </div>
      </div>
    </div>
  );
}
