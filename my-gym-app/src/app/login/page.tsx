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
//   const [ isHovered, setIsHovered ] = useState(false);

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

//   if (showLogin) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//           backgroundColor: "#1a1a2e",
//           fontFamily: "sans-serif",
//         }}
//       >
//         <div
//           style={{
//             width: "360px",
//             borderRadius: "24px",
//             overflow: "hidden",
//             backgroundColor: "#1a1a2e",
//             border: "1px solid #333",
//           }}
//         >
//           <div
//             style={{
//               width: "100%",
//               height: "380px",
//               overflow: "hidden",
//             }}
//           >
//             <img
//               src="https://img.freepik.com/premium-photo/fitness-smile-portrait-friends-gym-teamwork-support-workout-motivation-coaching-health-with-people-training-sports-center-cardio-endurance-wellness-challenge_590464-130787.jpg"
//               alt="Gym"
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 backgroundPosition: "top center",
//                 backgroundSize: "cover",
//               }}
//             />
//           </div>

//           <div
//             style={{
//               backdropFilter: "blur(12px)",
//               borderRadius: "20px",
//               padding: "28px 24px",
//               color: "#fff",
//               textAlign: "center",
//               boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
//               background:
//                 "linear-gradient(to bottom, rgba(20,60,70,0.9), rgba(20,60,70,0.8))",
//             }}
//           >
//             <h2
//               style={{
//                 textAlign: "center",
//                 color: "#ffffff",
//                 fontSize: "28px",
//                 fontWeight: "700",
//                 margin: "0 0 6px 0",
//               }}
//             >
//               Hi there!
//             </h2>
//             <p
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 color: "#aaaaaa",
//                 fontSize: "16px",
//                 margin: "0 0 24px 0",
//               }}
//             >
//               Sign in to keep things running smoothly.
//             </p>

//             <hr style={{
//             border: "none",
//             borderTop: "1px solid rgba(255,255,255,0.2)",
//             marginBottom: "16px"
//           }} />

//             <button
//               onClick={redirectToGoogle}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "10px",
//                 width: "100%",
//                 padding: "13px",
//                 borderRadius: "10px",
//                 border: "none",
//                 backgroundColor: "#3A6E7A",
//                 color: "#fff",
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 cursor: "pointer",
//                 marginBottom: "12px",
//                 // backgroundColor: isHovered ? '#3A6E7A' : 'gray'
//               }}
//             >
//               <img
//                 src="https://www.google.com/favicon.ico"
//                 width="18"
//                 height="18"
//                 alt="Google"
//               />
//               Continue with Google
//             </button>

//             <button
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "10px",
//                 width: "100%",
//                 padding: "13px",
//                 borderRadius: "10px",
//                 border: "none",
//                 backgroundColor: "#3A6E7A",
//                 color: "#ffffff",
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 cursor: "pointer",
//                 marginBottom: "12px",
//               }}
//             >
//               <span
//                 style={{
//                   backgroundColor: "#0077b5",
//                   borderRadius: "4px",
//                   padding: "2px 6px",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   color: "white",
//                 }}
//               >
//                 in
//               </span>
//               Continue with LinkedIn
//             </button>

//             <button
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: "10px",
//                 width: "100%",
//                 padding: "13px",
//                 borderRadius: "12px",
//                 border: "none",
//                 backgroundColor: "#3A6E7A",
//                 color: "#fff",
//                 fontSize: "14px",
//                 fontWeight: "500",
//                 cursor: "pointer",
//               }}
//             >
//               <span
//                 style={{
//                   backgroundColor: "#1877f2",
//                   borderRadius: "50%",
//                   width: "18px",
//                   height: "18px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "12px",
//                   fontWeight: "700",
//                   color: "white",
//                 }}
//               >
//                 f
//               </span>
//               Continue with Facebook
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }


//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundColor: "#1a1a2e",
//         fontFamily: "sans-serif",
//       }}
//     >
//       <div
//         style={{
//           width: "360px",
//           borderRadius: "24px",
//           overflow: "hidden",
//           backgroundColor: "#111122",
//           border: "1px solid #333",
//           position: "relative",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             height: "420px",
//             overflow: "hidden",
//             position: "relative",
//           }}
//         >
//           <img
//             src="https://img.freepik.com/premium-photo/fitness-smile-portrait-friends-gym-teamwork-support-workout-motivation-coaching-health-with-people-training-sports-center-cardio-endurance-wellness-challenge_590464-130787.jpg"
//             alt="Gym"
//             style={{
//               width: "100%",
//               height: "100%",
//               backgroundPosition: "top center",
//               backgroundSize: "cover",
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               bottom: 0,
//               left: 0,
//               right: 0,
//               height: "60%",
//               background: "linear-gradient(to top, #111122, transparent)",
//             }}
//           />
//         </div>

//         <div
//           style={{
//             padding: "0 24px 32px 24px",
//             marginTop: "-60px",
//             position: "relative",
//           }}
//         >
//           <p
//             style={{
//               color: "#ffffff",
//               fontSize: "22px",
//               fontWeight: "700",
//               margin: "0 0 4px 0",
//             }}
//           >
//             Manage Your
//           </p>
//           <p
//             style={{
//               color: "#c8ff00",
//               fontSize: "28px",
//               fontWeight: "700",
//               fontStyle: "italic",
//               margin: "0 0 4px 0",
//             }}
//           >
//             {businessTypes[currentIndex]}
//           </p>
//           <p
//             style={{
//               color: "#ffffff",
//               fontSize: "22px",
//               fontWeight: "700",
//               margin: "0 0 12px 0",
//             }}
//           >
//             with us!
//           </p>

//           <p
//             style={{
//               color: "#cccccc",
//               fontSize: "13px",
//               margin: "0 0 24px 0",
//               lineHeight: "1.5",
//             }}
//           >
//             All your business operations in one place, ready for you to take
//             charge.
//           </p>

//           <button
//             onClick={() => setShowLogin(true)}
//             style={{
//               width: "100%",
//               padding: "14px",
//               borderRadius: "10px",
//               border: "none",
//               backgroundColor: "#c8ff00",
//               color: "#111111",
//               fontSize: "15px",
//               fontWeight: "700",
//               cursor: "pointer",
//             }}
//           >
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

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
      <>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { height: 100%; }

          .login-page {
            width: 100%;
            min-height: 100vh;
            position: relative;
            display: flex;
            flex-direction: column;
            font-family: sans-serif;
            overflow: hidden;
          }

          .login-bg-image {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            z-index: 0;
          }

          .login-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.2);
            z-index: 1;
          }

          .login-bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 2;
            display: flex;
            justify-content: center;
            padding: 10px;
          }

          .login-card {
            width: 100%;
            max-width: 100%;
            background: linear-gradient(to bottom, rgba(20,60,70,0.6), rgba(20,60,70,0.5));
            backdrop-filter: blur(12px);
            border-radius: 20px;
            padding: 26px 24px;
            text-align: center;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5)
          }

          .login-title {
            color: #ffffff;
            font-size: 32px;
            font-weight: 800;
            font-style: italic;
            margin-bottom: 8px;
          }

          .login-subtitle {
            color: #bbbbcc;
            font-size: 15px;
            margin-bottom: 20px;
            line-height: 1.5;
          }

          .login-divider {
            border: none;
            border-top: 1px solid rgba(255,255,255,0.2);
            margin-bottom: 20px;
          }

          .login-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
            max-width: 420px;
            margin: 0 auto;
          }

          .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            width: 100%;
            padding: 16px;
            border-radius: 12px;
            border: none;
            background-color: #2a4a5a;
            color: #ffffff;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
          }

          .social-btn:hover { background-color: #3a5f72; }

          @media (min-width: 768px) {
            .login-card {
              padding: 40px 48px 60px 48px;
            }
            .login-title { font-size: 36px; }
          }
        `}</style>

        <div className="login-page">
          <img
            src="https://img.freepik.com/premium-photo/fitness-smile-portrait-friends-gym-teamwork-support-workout-motivation-coaching-health-with-people-training-sports-center-cardio-endurance-wellness-challenge_590464-130787.jpg"
            alt="Gym"
            className="login-bg-image"
          />
          <div className="login-overlay" />

          <div className="login-bottom">
            <div className="login-card">
              <h2 className="login-title">Hi there!</h2>
              <p className="login-subtitle">
                Sign in to keep things running smoothly.
              </p>
              <hr className="login-divider" />

              <div className="login-buttons">
                <button onClick={redirectToGoogle} className="social-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>

                <button className="social-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077b5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Continue with LinkedIn
                </button>

                <button className="social-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877f2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Continue with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { height: 100%; }

        .welcome-page {
          width: 100%;
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          font-family: sans-serif;
          overflow: hidden;
        }

        .welcome-bg-image {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          z-index: 0;
        }

        .welcome-gradient {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 70%;
          background: linear-gradient(to top, #111111 40%, transparent);
          z-index: 1;
        }

        .welcome-content {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 0 28px 48px 28px;
          max-width: 600px;
        }

        .welcome-manage {
          color: #ffffff;
          font-size: 32px;
          font-weight: 800;
          font-style: italic;
          line-height: 1.15;
          margin-bottom: 2px;
        }

        .welcome-business {
          color: #c8ff00;
          font-size: 32px;
          font-weight: 800;
          font-style: italic;
          line-height: 1.15;
          margin-bottom: 2px;
          display: block;
          min-height: 40px;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .welcome-withus {
          color: #ffffff;
          font-size: 32px;
          font-weight: 800;
          font-style: italic;
          line-height: 1.15;
          margin-bottom: 14px;
        }

        .welcome-desc {
          color: #cccccc;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 10px;
          max-width: 400px;
        }

        .welcome-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.2);
          margin-bottom: 20px;
          max-width: 400px;
        }

        .get-started-btn {
          width: 100%;
          max-width: 400px;
          padding: 18px;
          border-radius: 12px;
          border: none;
          background-color: #c8ff00;
          color: #111111;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          display: block;
          transition: background 0.2s;
        }

        .get-started-btn:hover { background-color: #d4ff33; }

        @media (min-width: 768px) {
          .welcome-content {
            padding: 0 60px 60px 60px;
          }
          .welcome-manage,
          .welcome-business,
          .welcome-withus {
            font-size: 48px;
          }
          .welcome-business { min-height: 58px; }
          .welcome-desc { font-size: 16px; }
        }
      `}</style>

      <div className="welcome-page">
        <img
          src="https://img.freepik.com/premium-photo/fitness-smile-portrait-friends-gym-teamwork-support-workout-motivation-coaching-health-with-people-training-sports-center-cardio-endurance-wellness-challenge_590464-130787.jpg"
          alt="Gym"
          className="welcome-bg-image"
        />
        <div className="welcome-gradient" />

        <div className="welcome-content">
          <p className="welcome-manage">Manage Your</p>
          <span
            className="welcome-business"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            {businessTypes[currentIndex]}
          </span>
          <p className="welcome-withus">with us!</p>
          <p className="welcome-desc">
            All your business operations in one place,
            ready for you to take charge.
          </p>
          <hr className="welcome-divider" />
          <button
            className="get-started-btn"
            onClick={() => setShowLogin(true)}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}