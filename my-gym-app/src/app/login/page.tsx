"use client";

import { useEffect, useState } from "react";
import redirectToGoogle from "@/api/auth";

const businessTypes = [
  "Fitness Centre",
  "Yoga Studio",
  "Wellness Center",
  "MMA & Boxing Hub",
  "Dance Studio",
  "Physiotherapy",
];

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % businessTypes.length);
        setVisible(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  if (showLogin) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1a1a2e",
        fontFamily: "sans-serif"
      }}>
        <div style={{
          width: "360px",
          borderRadius: "24px",
          overflow: "hidden",
          backgroundColor: "#1a1a2e",
          border: "1px solid #333"
        }}>

          <div style={{
            width: "100%",
            height: "380px",
            overflow: "hidden",
            
            }}>
            <img
              src="https://img.freepik.com/premium-photo/fitness-smile-portrait-friends-gym-teamwork-support-workout-motivation-coaching-health-with-people-training-sports-center-cardio-endurance-wellness-challenge_590464-130787.jpg"
              alt="Gym"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div style={{
            padding: "28px 24px",
            backgroundColor: "rgba(26, 26, 46, 1",
            }}>
            <h2 style={{
              textAlign: "center",
              color: "#ffffff",
              fontSize: "28px",
              fontWeight: "700",
              margin: "0 0 6px 0"
            }}>
              Hi there!
            </h2>
            <p style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#aaaaaa",
              fontSize: "16px",
              margin: "0 0 24px 0"
            }}>
              Sign in to keep things running smoothly.
            </p>

            <hr></hr>

            <button
              onClick={redirectToGoogle}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                padding: "13px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#2d2d44",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                marginBottom: "12px"
              }}
            >
              <img
                src="https://www.google.com/favicon.ico"
                width="18"
                height="18"
                alt="Google"
              />
              Continue with Google
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                padding: "13px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#2d2d44",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                marginBottom: "12px"
              }}
            >
              <span style={{
                backgroundColor: "#0077b5",
                borderRadius: "4px",
                padding: "2px 5px",
                fontSize: "12px",
                fontWeight: "700",
                color: "white"
              }}>in</span>
              Continue with LinkedIn
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                padding: "13px",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#2d2d44",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              <span style={{
                backgroundColor: "#1877f2",
                borderRadius: "50%",
                width: "18px",
                height: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "700",
                color: "white"
              }}>f</span>
              Continue with Facebook
            </button>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#1a1a2e",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        width: "360px",
        borderRadius: "24px",
        overflow: "hidden",
        backgroundColor: "#111122",
        border: "1px solid #333",
        position: "relative"
      }}>

        <div style={{
          width: "100%",
          height: "420px",
          overflow: "hidden",
          position: "relative"
        }}>
          <img
            src="https://img.freepik.com/premium-photo/fitness-smile-portrait-friends-gym-teamwork-support-workout-motivation-coaching-health-with-people-training-sports-center-cardio-endurance-wellness-challenge_590464-130787.jpg"
            alt="Gym"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60%",
            background: "linear-gradient(to top, #111122, transparent)"
          }} />
        </div>

        <div style={{
          padding: "0 24px 32px 24px",
          marginTop: "-60px",
          position: "relative"
        }}>
          <p style={{
            color: "#ffffff",
            fontSize: "22px",
            fontWeight: "700",
            margin: "0 0 4px 0"
          }}>
            Manage Your
          </p>
          <p style={{
            color: "#c8ff00",
            fontSize: "28px",
            fontWeight: "700",
            fontStyle: "italic",
            margin: "0 0 4px 0",          
          }}>
            {businessTypes[currentIndex]}
          </p>
          <p style={{
            color: "#ffffff",
            fontSize: "22px",
            fontWeight: "700",
            margin: "0 0 12px 0"
          }}>
            with us!
          </p>

          <p style={{
            color: "#cccccc",
            fontSize: "13px",
            margin: "0 0 24px 0",
            lineHeight: "1.5"
          }}>
            All your business operations in one place,
            ready for you to take charge.
          </p>

          <button
            onClick={() => setShowLogin(true)}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#c8ff00",
              color: "#111111",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer"
            }}
          >
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import redirectToGoogle from "@/api/auth";

// const businessTypes = [
//   "Fitness Centre",
//   "Yoga Studio",
//   "Wellness Center",
//   "MMA & Boxing Hub",
//   "Dance Studio",
//   "Physiotherapy",
// ];

// export default function LoginPage() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setVisible(false);
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % businessTypes.length);
//         setVisible(true);
//       }, 400);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   const phoneFrame: React.CSSProperties = {
//     width: "390px",
//     height: "844px",
//     borderRadius: "40px",
//     overflow: "hidden",
//     position: "relative",
//     border: "1px solid #333",
//     boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
//     flexShrink: 0,
//   };

//   if (showLogin) {
//     return (
//       <div style={{
//         width: "100%",
//         height: "100vh",
//         backgroundColor: "#0a0a0a",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily: "sans-serif",
//       }}>
//         <div style={phoneFrame}>

//           <img
//             src="https://img.freepik.com/premium-photo/fitness-smile-portrait-friends-gym-teamwork-support-workout-motivation-coaching-health-with-people-training-sports-center-cardio-endurance-wellness-challenge_590464-130787.jpg"
//             alt="Gym"
//             style={{
//               width: "100%",
//               height: "55%",
//               objectFit: "cover",
//               objectPosition: "top",
//               display: "block",
//             }}
//           />

//           <div style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             height: "48%",
//             background: "linear-gradient(to bottom, rgba(30,40,60,0.85), rgba(20,30,50,0.98))",
//             backdropFilter: "blur(16px)",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "32px 28px 40px 28px",
//           }}>

//             <h2 style={{
//               color: "#ffffff",
//               fontSize: "30px",
//               fontWeight: "800",
//               fontStyle: "italic",
//               margin: "0 0 6px 0",
//               textAlign: "center",
//             }}>
//               Hi there!
//             </h2>

//             <p style={{
//               color: "#bbbbcc",
//               fontSize: "14px",
//               margin: "0 0 6px 0",
//               textAlign: "center",
//             }}>
//               Sign in to keep things running smoothly.
//             </p>

//             <div style={{
//               width: "60px",
//               height: "1px",
//               backgroundColor: "#ffffff33",
//               margin: "0 0 24px 0",
//             }} />

//             <div style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "12px",
//               width: "100%",
//             }}>

//               <button
//                 onClick={redirectToGoogle}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: "12px",
//                   width: "100%",
//                   padding: "15px",
//                   borderRadius: "12px",
//                   border: "none",
//                   backgroundColor: "#2a3a5c",
//                   color: "#ffffff",
//                   fontSize: "15px",
//                   fontWeight: "600",
//                   cursor: "pointer",
//                 }}
//               >
//                 <svg width="20" height="20" viewBox="0 0 24 24">
//                   <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                   <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                 </svg>
//                 Continue with Google
//               </button>

//               {/* <button
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: "12px",
//                   width: "100%",
//                   padding: "15px",
//                   borderRadius: "12px",
//                   border: "none",
//                   backgroundColor: "#2a3a5c",
//                   color: "#ffffff",
//                   fontSize: "15px",
//                   fontWeight: "600",
//                   cursor: "pointer",
//                 }}
//               >
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077b5">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//                 Continue with LinkedIn
//               </button>

//               <button
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: "12px",
//                   width: "100%",
//                   padding: "15px",
//                   borderRadius: "12px",
//                   border: "none",
//                   backgroundColor: "#2a3a5c",
//                   color: "#ffffff",
//                   fontSize: "15px",
//                   fontWeight: "600",
//                   cursor: "pointer",
//                 }}
//               >
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877f2">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                 </svg>
//                 Continue with Facebook
//               </button> */}

//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div style={{
//       width: "100%",
//       height: "100vh",
//       backgroundColor: "#0a0a0a",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       fontFamily: "sans-serif",
//     }}>
//       <div style={phoneFrame}>

//         <img
//           src="https://img.freepik.com/premium-photo/fitness-smile-portrait-friends-gym-teamwork-support-workout-motivation-coaching-health-with-people-training-sports-center-cardio-endurance-wellness-challenge_590464-130787.jpg"
//           alt="Gym"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             objectPosition: "top",
//             position: "absolute",
//             top: 0,
//             left: 0,
//           }}
//         />

//         <div style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: "55%",
//           background: "linear-gradient(to top, #111122 70%, transparent)",
//         }} />

//         <div style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           padding: "28px 28px 48px 28px",
//         }}>

//           <p style={{
//             color: "#ffffff",
//             fontSize: "26px",
//             fontWeight: "800",
//             fontStyle: "italic",
//             margin: "0 0 2px 0",
//             lineHeight: "1.2",
//           }}>
//             Manage Your
//           </p>

//           <div style={{ height: "36px", overflow: "hidden", marginBottom: "2px" }}>
//             <p style={{
//               color: "#c8ff00",
//               fontSize: "26px",
//               fontWeight: "800",
//               fontStyle: "italic",
//               margin: 0,
//               lineHeight: "1.35",
//               transition: "opacity 0.4s ease, transform 0.4s ease",
//               opacity: visible ? 1 : 0,
//               transform: visible ? "translateY(0px)" : "translateY(-8px)",
//             }}>
//               {businessTypes[currentIndex]}
//             </p>
//           </div>

//           <p style={{
//             color: "#ffffff",
//             fontSize: "26px",
//             fontWeight: "800",
//             fontStyle: "italic",
//             margin: "0 0 14px 0",
//             lineHeight: "1.2",
//           }}>
//             with us!
//           </p>

//           <p style={{
//             color: "#cccccc",
//             fontSize: "13px",
//             margin: "0 0 28px 0",
//             lineHeight: "1.6",
//           }}>
//             All your business operations in one place,
//             ready for you to take charge.
//           </p>

//           <div style={{
//             width: "100%",
//             height: "1px",
//             backgroundColor: "#ffffff22",
//             marginBottom: "20px",
//           }} />

//           <button
//             onClick={() => setShowLogin(true)}
//             style={{
//               width: "100%",
//               padding: "16px",
//               borderRadius: "12px",
//               border: "none",
//               backgroundColor: "#c8ff00",
//               color: "#111111",
//               fontSize: "16px",
//               fontWeight: "700",
//               cursor: "pointer",
//               letterSpacing: "0.3px",
//             }}
//           >
//             Get Started
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }