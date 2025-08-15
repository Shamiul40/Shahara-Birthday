// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import confetti from "canvas-confetti";
// import { Howl } from "howler";
// // import bgMusicFile from "./happy-birthday.mp3"; // তোমার mp3 ফাইল src ফোল্ডারে রাখো

// export default function App() {
//   useEffect(() => {
//     // কনফেটি লুপ
//     const duration = 5 * 1000;
//     const end = Date.now() + duration;

//     (function frame() {
//       confetti({
//         particleCount: 3,
//         angle: 60,
//         spread: 55,
//         origin: { x: 0 },
//       });
//       confetti({
//         particleCount: 3,
//         angle: 120,
//         spread: 55,
//         origin: { x: 1 },
//       });

//       if (Date.now() < end) {
//         requestAnimationFrame(frame);
//       }
//     })();
//   }, []);

//   const playMusic = () => {
//     const sound = new Howl({
//       src: [bgMusicFile],
//       autoplay: true,
//       loop: false,
//       volume: 0.5,
//     });
//     sound.play();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100 flex flex-col items-center justify-center p-4 text-center">
//       <motion.h1
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="text-5xl font-bold text-pink-600 drop-shadow-lg"
//       >
//         🎉 Happy Birthday, শাহারা 🎂
//       </motion.h1>

//       <motion.p
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         className="mt-4 text-lg text-gray-700"
//       >
//         তোমার জন্য রইলো অফুরন্ত ভালোবাসা, হাসি আর সুন্দর স্মৃতির শুভেচ্ছা ❤️
//       </motion.p>

//       <motion.img
//         src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
//         alt="Birthday Cake"
//         initial={{ y: 200, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="mt-6 rounded-xl shadow-xl w-60"
//       />

//       <motion.button
//         onClick={playMusic}
//         whileHover={{ scale: 1.1 }}
//         className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600"
//       >
//         ▶ Play Birthday Song
//       </motion.button>
//     </div>
//   );
// }


// 2

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import confetti from "canvas-confetti";
// import { Howl } from "howler";

// export default function App() {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     if (clicked) return; // একাধিক ক্লিক আটকানো
//     setClicked(true);

//     // কনফেটি আনিমেশন
//     const duration = 5 * 1000;
//     const end = Date.now() + duration;
//     (function frame() {
//       confetti({
//         particleCount: 5,
//         angle: 60 + Math.random() * 20,
//         spread: 55 + Math.random() * 20,
//         origin: { x: Math.random(), y: Math.random() * 0.6 }
//       });
//       if (Date.now() < end) {
//         requestAnimationFrame(frame);
//       }
//     })();

//     // গান প্লে করা
//     const sound = new Howl({
//       src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"], // উদাহরণী CC-লিঙ্ক
//       autoplay: true,
//       loop: false,
//       volume: 0.6,
//     });
//     sound.play();
//   };

//   return (
//     <div className={`min-h-screen flex items-center justify-center ${clicked ? "bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400" : "bg-gradient-to-tr from-blue-200 via-green-200 to-pink-200"} transition-colors duration-1000`}>
//       <div className="max-w-md w-full bg-white bg-opacity-80 rounded-2xl p-8 text-center shadow-xl">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl font-extrabold text-purple-700"
//         >
//           {clicked ? "শুভ জন্মদিন, শাহারা!" : ""}
//         </motion.h1>

//         {clicked && (
//           <>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="mt-4 text-lg text-gray-800"
//             >
//               তোমার জন্য অনেক ভালোবাসা, হাসি আর মিষ্টি মুহূর্ত রইল আজকের দিনটায় ❤️
//             </motion.p>

//             <motion.img
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ delay: 1, duration: 0.8 }}
//               src="https://i.imgur.com/0DElr0H.jpg" // উদাহরণি ছবি—তুমি পছন্দমত ছবি বসাতে পারো
//               alt="তার ছবি"
//               className="mt-6 mx-auto w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
//             />
//           </>
//         )}

//         {!clicked && (
//           <motion.button
//             onClick={handleClick}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-6 px-8 py-3 bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:bg-purple-600"
//           >
//             ক্লিক করো সাহারা!
//           </motion.button>
//         )}
//       </div>
//     </div>
//   );
// }



// 3


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import confetti from "canvas-confetti";
// import { Howl } from "howler";

// export default function App() {
//   const [stage, setStage] = useState(0); // 0 = শুরু, 1 = প্রথম ছবি+মেসেজ, 2 = ফাইনাল ৪টি
//   const [showNextPrompt, setShowNextPrompt] = useState(false);

//   const playConfetti = () => {
//     const duration = 4 * 1000;
//     const end = Date.now() + duration;
//     (function frame() {
//       confetti({
//         particleCount: 5,
//         angle: 60 + Math.random() * 20,
//         spread: 55 + Math.random() * 20,
//         origin: { x: Math.random(), y: Math.random() * 0.6 },
//       });
//       if (Date.now() < end) {
//         requestAnimationFrame(frame);
//       }
//     })();
//   };

//   const playMusic = () => {
//     const sound = new Howl({
//       src: ["https://www.fesliyanstudios.com/play-mp3/387"], // Free Birthday Song
//       autoplay: true,
//       loop: false,
//       volume: 0.6,
//     });
//     sound.play();
//   };

//   const handleFirstClick = () => {
//     if (stage !== 0) return;
//     setStage(1);
//     playConfetti();
//     playMusic();

//     // ৩ সেকেন্ড পর পরবর্তী প্রম্পট দেখাবে
//     setTimeout(() => {
//       setShowNextPrompt(true);
//     }, 3000);
//   };

//   const handleFinalClick = () => {
//     setStage(2);
//     playConfetti();
//   };

//   return (
//     <div
//       className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-1000 ${
//         stage === 0
//           ? "bg-gradient-to-tr from-pink-200 via-yellow-200 to-blue-200"
//           : "bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400"
//       }`}
//     >
//       <div className="max-w-xl w-full bg-white bg-opacity-80 rounded-2xl p-8 text-center shadow-xl">
//         {stage === 0 && (
//           <>
//             <motion.h1
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               className="text-3xl md:text-4xl font-bold text-purple-700 mb-6"
//             >
//               সাহারা, তোমার জন্য একটা চমক আছে 🎁
//             </motion.h1>
//             <motion.button
//               onClick={handleFirstClick}
//               whileHover={{
//                 scale: 1.05,
//                 backgroundColor: "#ec4899",
//                 boxShadow: "0 0 15px rgba(236,72,153,0.8)",
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg transition"
//             >
//               ক্লিক করো 💖
//             </motion.button>
//           </>
//         )}

//         {stage === 1 && (
//           <>
//             <motion.h1
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="text-4xl font-extrabold text-purple-800"
//             >
//               শুভ জন্মদিন, সাহারা! 🎂
//             </motion.h1>
//             <motion.img
//               initial={{ y: 50, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               src="https://i.imgur.com/0DElr0H.jpg"
//               alt="Sahara"
//               className="mt-6 mx-auto w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
//             />
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1, duration: 1 }}
//               className="mt-4 text-lg text-gray-800"
//             >
//               তোমার জন্য রইলো অফুরন্ত ভালোবাসা, হাসি আর সুন্দর মুহূর্ত ❤️
//             </motion.p>

//             {showNextPrompt && (
//               <motion.button
//                 onClick={handleFinalClick}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//                 className="mt-6 px-6 py-2 bg-yellow-400 text-purple-900 font-semibold rounded-full shadow hover:bg-yellow-500"
//               >
//                 আরেকটা চমক দেখতে ক্লিক করো ✨
//               </motion.button>
//             )}
//           </>
//         )}

//         {stage === 2 && (
//           <div className="space-y-6">
//             {[
//               {
//                 img: "https://i.imgur.com/v5P6zZ2.jpg",
//                 text: "তুমি সবসময় হাসি নিয়ে থাকো 🌸",
//               },
//               {
//                 img: "https://i.imgur.com/Vm9l3n1.jpg",
//                 text: "তুমি আমাদের পরিবারের আনন্দ 💕",
//               },
//               {
//                 img: "https://i.imgur.com/jQ6b2TT.jpg",
//                 text: "তোমার স্বপ্নগুলো পূর্ণ হোক 🌟",
//               },
//               {
//                 img: "https://i.imgur.com/yR1r9hD.jpg",
//                 text: "তুমি একেবারে স্পেশাল! 💖",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.5, duration: 0.8 }}
//                 className="p-4 rounded-xl bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 shadow-lg"
//               >
//                 <img
//                   src={item.img}
//                   alt=""
//                   className="mx-auto w-40 h-40 object-cover rounded-full border-4 border-white shadow"
//                 />
//                 <p className="mt-3 text-white font-semibold">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// 4

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import confetti from "canvas-confetti";
// import { Howl } from "howler";

// export default function App() {
//   const [stage, setStage] = useState(0);

//   const playConfetti = () => {
//     const end = Date.now() + 3 * 1000;
//     (function frame() {
//       confetti({
//         particleCount: 5,
//         spread: 70,
//         origin: { y: 0.6 },
//       });
//       if (Date.now() < end) requestAnimationFrame(frame);
//     })();
//   };

//   const playMusic = () => {
//     const sound = new Howl({
//       src: ["https://www.fesliyanstudios.com/play-mp3/387"], // Free birthday song
//       autoplay: true,
//       volume: 0.6,
//     });
//     sound.play();
//   };

//   const startSurprise = () => {
//     setStage(1);
//     playConfetti();
//     playMusic();
//   };

//   const continueStory = () => {
//     setStage(2);
//     playConfetti();
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-200 via-yellow-100 to-purple-200 p-4">
//       <div className="w-full max-w-2xl text-center">
//         <AnimatePresence>
//           {stage === 0 && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0 }}
//               className="bg-white rounded-2xl p-8 shadow-xl"
//             >
//               <h1 className="text-3xl font-bold text-purple-700 mb-6">
//                 🎁 A Special Surprise for You
//               </h1>
//               <motion.button
//                 onClick={startSurprise}
//                 className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg animate-pulse"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Open Surprise
//               </motion.button>
//             </motion.div>
//           )}

//           {stage === 1 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="space-y-6"
//             >
//               <motion.h1
//                 initial={{ scale: 0.5, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-4xl font-extrabold text-pink-600 drop-shadow-lg"
//               >
//                 🎉 Happy Birthday, শাহারা! 🎂
//               </motion.h1>
//               <motion.img
//                 src="https://i.imgur.com/0DElr0H.jpg"
//                 alt="Sahara"
//                 className="mx-auto w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8, duration: 0.8 }}
//               />
//               <motion.p
//                 className="text-lg text-gray-800"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.2, duration: 0.8 }}
//               >
//                 তোমার জন্য রইলো অফুরন্ত ভালোবাসা, হাসি আর সুন্দর মুহূর্ত ❤️
//               </motion.p>
//               <motion.button
//                 onClick={continueStory}
//                 className="mt-4 px-6 py-2 bg-yellow-400 text-purple-900 font-semibold rounded-full shadow hover:bg-yellow-500"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 2, duration: 0.8 }}
//               >
//                 Continue →
//               </motion.button>
//             </motion.div>
//           )}

//           {stage === 2 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="grid gap-6"
//             >
//               {[
//                 {
//                   img: "https://i.imgur.com/v5P6zZ2.jpg",
//                   text: "তুমি সবসময় হাসি নিয়ে থাকো 🌸",
//                 },
//                 {
//                   img: "https://i.imgur.com/Vm9l3n1.jpg",
//                   text: "তুমি আমাদের পরিবারের আনন্দ 💕",
//                 },
//                 {
//                   img: "https://i.imgur.com/jQ6b2TT.jpg",
//                   text: "তোমার স্বপ্নগুলো পূর্ণ হোক 🌟",
//                 },
//                 {
//                   img: "https://i.imgur.com/yR1r9hD.jpg",
//                   text: "তুমি একেবারে স্পেশাল! 💖",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className="p-4 rounded-xl bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 shadow-lg"
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.5, duration: 0.8 }}
//                 >
//                   <img
//                     src={item.img}
//                     alt=""
//                     className="mx-auto w-40 h-40 object-cover rounded-full border-4 border-white shadow"
//                   />
//                   <p className="mt-3 text-white font-semibold">{item.text}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }



// 5
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import confetti from "canvas-confetti";
// import { Howl } from "howler";

// /*
// Birthday Quest Game
// - Stage 0: Start screen
// - Stage 1: Catch the heart (tap moving heart 3 times)
// - Stage 2: Pop 3 balloons
// - Stage 3: Choose correct emoji (only 💖 is correct)
// - Stage 4: Final reveal (music + confetti + photo + message)
// */

// const BIRTHDAY_SONG = "https://www.fesliyanstudios.com/play-mp3/387"; // free birthday tune
// const POP_SOUND = "https://www.soundjay.com/misc/sounds/pop-1.mp3";
// const SUCCESS_SOUND = "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";

// export default function App() {
//   const [stage, setStage] = useState(0);
//   const [heartHits, setHeartHits] = useState(0);
//   const [balloonsLeft, setBalloonsLeft] = useState(3);
//   const [hint, setHint] = useState("");
//   const [selected, setSelected] = useState(null);
//   const musicRef = useRef(null);

//   // prepare Howl instances lazily
//   const playSound = (src, opts = {}) => {
//     try {
//       const s = new Howl({ src: [src], volume: opts.volume ?? 0.7 });
//       s.play();
//       return s;
//     } catch (e) {
//       // ignore if blocked
//       return null;
//     }
//   };

//   const startConfetti = (duration = 3000) => {
//     const end = Date.now() + duration;
//     (function frame() {
//       confetti({
//         particleCount: 7,
//         angle: 60,
//         spread: 60,
//         origin: { x: Math.random(), y: 0.2 + Math.random() * 0.6 },
//       });
//       if (Date.now() < end) requestAnimationFrame(frame);
//     })();
//   };

//   const startMusic = () => {
//     if (musicRef.current) return;
//     try {
//       musicRef.current = new Howl({ src: [BIRTHDAY_SONG], volume: 0.6 });
//       musicRef.current.play();
//     } catch (e) {}
//   };

//   // Stage flows
//   const beginAdventure = () => {
//     setStage(1);
//     setHint("হৃদয় ধরো! তাড়াতাড়ি তিনবার ধরে ফেলো 💓");
//     // subtle confetti to celebrate start
//     startConfetti(1000);
//   };

//   // Heart logic: heart moves randomly; clicking increases hits
//   const handleHeartClick = () => {
//     playSound(POP_SOUND, { volume: 0.6 });
//     setHeartHits((h) => {
//       const nh = h + 1;
//       if (nh >= 3) {
//         // next stage after small delay
//         setTimeout(() => {
//           setStage(2);
//           setHint("আনন্দে বেলুন পপ করো 🎈 (৩টা পপ করলেই হবে)");
//           startConfetti(1200);
//         }, 500);
//       }
//       return nh;
//     });
//   };

//   // Balloons
//   const popBalloon = (idx) => {
//     playSound(POP_SOUND, { volume: 0.6 });
//     setBalloonsLeft((n) => {
//       const nn = n - 1;
//       if (nn <= 0) {
//         setTimeout(() => {
//           setStage(3);
//           setHint("সঠিক ইমোজি বেছে নাও 💖");
//           startConfetti(1200);
//         }, 400);
//       }
//       return nn;
//     });
//   };

//   // Emoji challenge
//   const chooseEmoji = (emo) => {
//     setSelected(emo);
//     if (emo === "💖") {
//       playSound(SUCCESS_SOUND, { volume: 0.7 });
//       setTimeout(() => {
//         // final reveal
//         setStage(4);
//         setHint("");
//         // start music and confetti
//         startMusic();
//         startConfetti(3500);
//       }, 700);
//     } else {
//       // wrong pick: small shake + hint
//       playSound(POP_SOUND, { volume: 0.4 });
//       setHint("ঠিক না — আবার চেষ্টা করো 🙂");
//       setTimeout(() => setHint("সঠিক ইমোজি বেছে নাও 💖"), 1200);
//     }
//   };

//   // Restart option after final
//   const restart = () => {
//     // stop music if playing
//     if (musicRef.current) {
//       try { musicRef.current.stop(); } catch {}
//       musicRef.current = null;
//     }
//     setStage(0);
//     setHeartHits(0);
//     setBalloonsLeft(3);
//     setSelected(null);
//     setHint("");
//   };

//   // Small helper random position for heart
//   const randomPos = () => {
//     const top = 10 + Math.random() * 60; // vh
//     const left = 10 + Math.random() * 70; // %
//     return { top: `${top}vh`, left: `${left}%` };
//   };

//   // For heart position refresh when hits increase
//   const [heartPos, setHeartPos] = useState(randomPos());
//   useEffect(() => {
//     // move heart each click (or every 1.2s while in stage 1)
//     if (stage === 1) {
//       const t = setInterval(() => setHeartPos(randomPos()), 1200);
//       return () => clearInterval(t);
//     }
//   }, [stage]);

//   useEffect(() => {
//     if (heartHits > 0) setHeartPos(randomPos());
//   }, [heartHits]);

//   // small accessibility: keyboard "Enter" to start
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Enter") {
//         if (stage === 0) beginAdventure();
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [stage]);

//   // ---------- UI ----------
//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50">
//       <div className="w-full max-w-3xl">
//         <div className="bg-white/85 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl md:text-2xl font-bold text-pink-600">Birthday Quest 🎯 — শাহারা</h2>
//             <div className="text-sm text-gray-500">মোবাইল-ফ্রেন্ডলি • ছোট মজার খেলা</div>
//           </div>

//           {/* Hint */}
//           <div className="mb-4 text-center">
//             <p className="text-sm text-gray-600 min-h-[1.5rem]">{hint}</p>
//           </div>

//           <div className="min-h-[340px] relative">
//             <AnimatePresence>
//               {stage === 0 && (
//                 <motion.div
//                   key="start"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="flex flex-col items-center justify-center py-8"
//                 >
//                   <motion.div
//                     className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 text-white rounded-2xl p-6 w-full md:w-2/3 lg:w-1/2 shadow-xl"
//                     initial={{ y: -10 }}
//                     animate={{ y: [0, -6, 0] }}
//                     transition={{ duration: 2, loop: Infinity }}
//                   >
//                     <h3 className="text-2xl font-extrabold">Ready for an adventure?</h3>
//                     <p className="mt-2 text-sm opacity-90">এক সিরিজ চ্যালেঞ্জ পার করো, শেষেই থাকবে উপহার 🎁</p>
//                   </motion.div>

//                   <motion.button
//                     onClick={beginAdventure}
//                     whileHover={{ scale: 1.06 }}
//                     whileTap={{ scale: 0.96 }}
//                     className="mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg ring-4 ring-purple-100"
//                   >
//                     Start Adventure
//                   </motion.button>
//                 </motion.div>
//               )}

//               {/* Stage 1: Heart chase */}
//               {stage === 1 && (
//                 <motion.div
//                   key="heart"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="relative h-72 md:h-80"
//                 >
//                   <div className="absolute left-4 top-4 text-sm text-gray-600">
//                     ধরেছো: <span className="font-semibold text-pink-600">{heartHits}/3</span>
//                   </div>

//                   {/* moving heart */}
//                   <motion.button
//                     onClick={handleHeartClick}
//                     aria-label="catch heart"
//                     style={{ position: "absolute", ...heartPos }}
//                     initial={{ scale: 0.9 }}
//                     animate={{ scale: [1, 1.12, 1], rotate: [0, -8, 0] }}
//                     transition={{ duration: 1.1, repeat: Infinity }}
//                     className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-pink-100 shadow-lg"
//                   >
//                     <motion.div
//                       whileTap={{ scale: 0.9 }}
//                       className="text-3xl md:text-4xl"
//                       style={{ textShadow: "0 2px 6px rgba(0,0,0,0.12)" }}
//                     >
//                       ❤️
//                     </motion.div>
//                   </motion.button>
//                 </motion.div>
//               )}

//               {/* Stage 2: Balloons */}
//               {stage === 2 && (
//                 <motion.div
//                   key="balloons"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="flex flex-col items-center gap-4 py-6"
//                 >
//                   <div className="flex gap-4 items-end justify-center flex-wrap">
//                     {Array.from({ length: balloonsLeft }).map((_, i) => (
//                       <motion.button
//                         key={i}
//                         onClick={() => popBalloon(i)}
//                         whileTap={{ scale: 0.9 }}
//                         className="w-20 h-28 md:w-24 md:h-32 rounded-b-full bg-gradient-to-br from-red-400 to-pink-500 shadow-lg flex items-end justify-center"
//                         aria-label={`Balloon ${i + 1}`}
//                       >
//                         <span className="mb-4 text-white text-2xl">🎈</span>
//                       </motion.button>
//                     ))}
//                     {/* if none left show a placeholder */}
//                     {balloonsLeft <= 0 && <div className="text-sm text-gray-500">সব পপ করা হয়ে গেছে!</div>}
//                   </div>
//                 </motion.div>
//               )}

//               {/* Stage 3: Emoji choice */}
//               {stage === 3 && (
//                 <motion.div
//                   key="emoji"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="flex flex-col items-center gap-4 py-6"
//                 >
//                   <div className="grid grid-cols-3 gap-4 w-full max-w-sm mx-auto">
//                     {["🌟", "🎈", "💖", "🎵", "😊", "🍰"].map((emo) => (
//                       <motion.button
//                         key={emo}
//                         onClick={() => chooseEmoji(emo)}
//                         whileHover={{ scale: 1.08 }}
//                         whileTap={{ scale: 0.95 }}
//                         className={`py-4 rounded-lg shadow-md bg-white/80 text-2xl ${selected === emo ? "ring-4 ring-pink-200" : ""}`}
//                         aria-label={`choose ${emo}`}
//                       >
//                         {emo}
//                       </motion.button>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}

//               {/* Stage 4: Final Reveal */}
//               {stage === 4 && (
//                 <motion.div
//                   key="final"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="flex flex-col items-center gap-4 py-6"
//                 >
//                   <motion.h1
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="text-3xl md:text-4xl font-extrabold text-pink-600"
//                   >
//                     🎉 শুভ জন্মদিন, শাহারা! 🎉
//                   </motion.h1>

//                   <motion.img
//                     src="https://i.imgur.com/0DElr0H.jpg"
//                     alt="Sahara"
//                     className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl"
//                     initial={{ y: 20, opacity: 0, scale: 0.9 }}
//                     animate={{ y: 0, opacity: 1, scale: 1 }}
//                     transition={{ delay: 0.4 }}
//                   />

//                   <motion.p
//                     className="max-w-xl text-center text-gray-800"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.7 }}
//                   >
//                     আজকের দিনটা শুধু তোমার — হাসিতে ভরে উঠুক প্রতিটি মুহূর্ত। তোমাকে অনেক ভালোবাসি! ❤️
//                   </motion.p>

//                   <div className="flex gap-3 mt-3">
//                     <button
//                       onClick={() => startConfetti(2500)}
//                       className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow"
//                     >
//                       আবার কনফেতি!
//                     </button>

//                     <button
//                       onClick={() => {
//                         if (musicRef.current) musicRef.current.play();
//                         else startMusic();
//                       }}
//                       className="px-4 py-2 bg-yellow-400 text-purple-800 rounded-full shadow"
//                     >
//                       গান শুনবে 🎶
//                     </button>

//                     <button onClick={restart} className="px-4 py-2 border rounded-full">
//                       আবার করো
//                     </button>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Footer small progress / instructions */}
//           <div className="mt-6 text-center">
//             <small className="text-gray-500">
//               কোন চ্যালেঞ্জে আঠারো হেল্প লাগলে বলো — আমি কাস্টমাইজ করে দেব (ছবি/গান/রঙ)।
//             </small>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// 6


// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import confetti from "canvas-confetti";
// import { Howl } from "howler";

// const POP_SOUND = "https://www.soundjay.com/misc/sounds/pop-1.mp3";
// const SUCCESS_SOUND = "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";

// export default function App() {
//   const [stage, setStage] = useState(0);
//   const [heartHits, setHeartHits] = useState(0);
//   const [balloonsLeft, setBalloonsLeft] = useState(3);
//   const [selected, setSelected] = useState(null);
//   const [hint, setHint] = useState("");
//   const [heartPos, setHeartPos] = useState(randomPos());
//   const [emojiPositions, setEmojiPositions] = useState(randomEmojiPositions());

//   const musicRef = useRef(null);

//   const playSound = (src, opts = {}) => {
//     try {
//       const s = new Howl({ src: [src], volume: opts.volume ?? 0.7 });
//       s.play();
//     } catch {}
//   };

//   const startConfetti = (duration = 3000) => {
//     const end = Date.now() + duration;
//     (function frame() {
//       confetti({
//         particleCount: 7,
//         angle: 60,
//         spread: 60,
//         origin: { x: Math.random(), y: Math.random() * 0.8 },
//       });
//       if (Date.now() < end) requestAnimationFrame(frame);
//     })();
//   };

//   function randomPos() {
//     return { top: `${10 + Math.random() * 70}vh`, left: `${10 + Math.random() * 70}%` };
//   }

//   function randomEmojiPositions(count = 6) {
//     return Array.from({ length: count }).map(() => randomPos());
//   }

//   const beginAdventure = () => {
//     setStage(1);
//     setHint("হার্ট ধরো! ❤️");
//     startConfetti(1000);
//   };

//   const handleHeartClick = () => {
//     playSound(POP_SOUND);
//     setHeartHits((h) => {
//       const nh = h + 1;
//       if (nh >= 3) {
//         setTimeout(() => {
//           setStage(2);
//           setHint("বেলুন ফাটাও 🎈");
//           startConfetti(1200);
//         }, 500);
//       }
//       return nh;
//     });
//     setHeartPos(randomPos());
//   };

//   const popBalloon = () => {
//     playSound(POP_SOUND);
//     setBalloonsLeft((n) => {
//       const nn = n - 1;
//       if (nn <= 0) {
//         setTimeout(() => {
//           setStage(3);
//           setHint("সঠিক ইমোজি বেছে নাও 💖");
//           setEmojiPositions(randomEmojiPositions(6));
//           startConfetti(1200);
//         }, 400);
//       }
//       return nn;
//     });
//   };

//   const chooseEmoji = (emo) => {
//     setSelected(emo);
//     if (emo === "💖") {
//       playSound(SUCCESS_SOUND);
//       setTimeout(() => {
//         setStage(4);
//         setHint("");
//         startConfetti(3500);
//       }, 700);
//     } else {
//       playSound(POP_SOUND, { volume: 0.4 });
//       setHint("ভুল হয়েছে 🙂");
//       setTimeout(() => setHint("সঠিক ইমোজি বেছে নাও 💖"), 1200);
//     }
//   };

//   const restart = () => {
//     setStage(0);
//     setHeartHits(0);
//     setBalloonsLeft(3);
//     setSelected(null);
//     setHint("");
//     setEmojiPositions(randomEmojiPositions(6));
//   };

//   // Background stars animation
//   const Stars = () =>
//     Array.from({ length: 20 }).map((_, i) => (
//       <motion.div
//         key={i}
//         className="absolute bg-white rounded-full"
//         style={{
//           width: Math.random() * 3 + 2,
//           height: Math.random() * 3 + 2,
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//         }}
//         animate={{ opacity: [0.2, 1, 0.2] }}
//         transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
//       />
//     ));

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
//       style={{
//         background: "linear-gradient(135deg, #ffafbd, #ffc3a0, #2193b0, #6dd5ed)",
//         backgroundSize: "600% 600%",
//         animation: "gradientBG 15s ease infinite",
//       }}>
//       <Stars />
//       <div className="w-full max-w-3xl relative z-10">
//         <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10">
//           <div className="mb-4 text-center">
//             <p className="text-sm text-gray-800 min-h-[1.5rem]">{hint}</p>
//           </div>

//           <div className="min-h-[340px] relative">
//             <AnimatePresence>
//               {stage === 0 && (
//                 <motion.div
//                   key="start"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="flex flex-col items-center justify-center py-8"
//                 >
//                   <motion.button
//                     onClick={beginAdventure}
//                     whileHover={{ scale: 1.1, rotate: 2 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full font-bold shadow-2xl"
//                     style={{ animation: "swing 2s infinite" }}
//                   >
//                     শুরু করো 🎯
//                   </motion.button>
//                 </motion.div>
//               )}

//               {stage === 1 && (
//                 <motion.button
//                   onClick={handleHeartClick}
//                   key="heart"
//                   style={{ position: "absolute", ...heartPos }}
//                   whileTap={{ scale: 0.9 }}
//                   className="w-24 h-24 rounded-full flex items-center justify-center bg-pink-200 shadow-xl text-5xl"
//                 >
//                   ❤️
//                 </motion.button>
//               )}

//               {stage === 2 && balloonsLeft > 0 && (
//                 <>
//                   {Array.from({ length: balloonsLeft }).map((_, i) => (
//                     <motion.button
//                       key={i}
//                       onClick={popBalloon}
//                       style={{ position: "absolute", ...randomPos() }}
//                       whileTap={{ scale: 0.9 }}
//                       className="w-20 h-28 rounded-b-full bg-gradient-to-br from-red-400 to-pink-500 shadow-lg flex items-end justify-center text-3xl"
//                     >
//                       🎈
//                     </motion.button>
//                   ))}
//                 </>
//               )}

//               {stage === 3 && (
//                 <>
//                   {["🌟", "🎈", "💖", "🎵", "😊", "🍰"].map((emo, idx) => (
//                     <motion.button
//                       key={emo}
//                       onClick={() => chooseEmoji(emo)}
//                       style={{ position: "absolute", ...emojiPositions[idx] }}
//                       whileHover={{ scale: 1.2 }}
//                       whileTap={{ scale: 0.9 }}
//                       className={`p-4 rounded-lg shadow-md bg-white/80 text-3xl ${selected === emo ? "ring-4 ring-pink-200" : ""}`}
//                     >
//                       {emo}
//                     </motion.button>
//                   ))}
//                 </>
//               )}

//               {stage === 4 && (
//                 <motion.div
//                   key="final"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="flex flex-col items-center gap-4 py-6"
//                 >
//                   <h1 className="text-3xl font-extrabold text-pink-600">🎉 শুভ জন্মদিন! 🎉</h1>
//                   <motion.img
//                     src="https://i.imgur.com/0DElr0H.jpg"
//                     alt="Sahara"
//                     className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
//                   />
//                   <p className="max-w-xl text-center text-gray-800">
//                     আজকের দিনটা শুধু তোমার — হাসিতে ভরে উঠুক প্রতিটি মুহূর্ত। ❤️
//                   </p>
//                   <button
//                     onClick={() => startConfetti(2500)}
//                     className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg"
//                   >
//                     আবার কনফেতি! 🎊
//                   </button>
//                   <button
//                     onClick={restart}
//                     className="px-6 py-3 border rounded-full shadow-lg"
//                   >
//                     আবার খেলো 🔄
//                   </button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes swing {
//           0%, 100% { transform: rotate(0deg); }
//           25% { transform: rotate(3deg); }
//           75% { transform: rotate(-3deg); }
//         }
//         @keyframes gradientBG {
//           0% {background-position: 0% 50%;}
//           50% {background-position: 100% 50%;}
//           100% {background-position: 0% 50%;}
//         }
//       `}</style>
//     </div>
//   );
// }





// 7
// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import confetti from "canvas-confetti";
// import { Howl } from "howler";

// const POP_SOUND = "https://www.soundjay.com/misc/sounds/pop-1.mp3";
// const SUCCESS_SOUND = "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";

// export default function App() {
//   const [stage, setStage] = useState(0);
//   const [heartHits, setHeartHits] = useState(0);
//   const [balloonsLeft, setBalloonsLeft] = useState(3);
//   const [selected, setSelected] = useState(null);
//   const [hint, setHint] = useState("");
//   const [heartPos, setHeartPos] = useState(randomPos());
//   const [emojiPositions, setEmojiPositions] = useState(randomEmojiPositions());

//   const playSound = (src, opts = {}) => {
//     try {
//       new Howl({ src: [src], volume: opts.volume ?? 0.7 }).play();
//     } catch {}
//   };

//   const startConfetti = (duration = 3000) => {
//     const end = Date.now() + duration;
//     (function frame() {
//       confetti({ particleCount: 7, angle: 60, spread: 60, origin: { x: Math.random(), y: Math.random() * 0.8 } });
//       if (Date.now() < end) requestAnimationFrame(frame);
//     })();
//   };

//   function randomPos() {
//     return { top: `${10 + Math.random() * 70}vh`, left: `${10 + Math.random() * 70}%` };
//   }

//   function randomEmojiPositions(count = 6) {
//     return Array.from({ length: count }).map(() => randomPos());
//   }

//   const beginAdventure = () => {
//     setStage(1);
//     setHint("হার্ট ধরো! ❤️");
//     startConfetti(1000);
//   };

//   const handleHeartClick = () => {
//     playSound(POP_SOUND);
//     setHeartHits(h => {
//       const nh = h + 1;
//       if (nh >= 3) setTimeout(() => { setStage(2); setHint("বেলুন ফাটাও 🎈"); startConfetti(1200); }, 500);
//       return nh;
//     });
//     setHeartPos(randomPos());
//   };

//   const popBalloon = () => {
//     playSound(POP_SOUND);
//     setBalloonsLeft(n => {
//       const nn = n - 1;
//       if (nn <= 0) setTimeout(() => { setStage(3); setHint("সঠিক ইমোজি বেছে নাও 💖"); setEmojiPositions(randomEmojiPositions(6)); startConfetti(1200); }, 400);
//       return nn;
//     });
//   };

//   const chooseEmoji = emo => {
//     setSelected(emo);
//     if (emo === "💖") {
//       playSound(SUCCESS_SOUND);
//       setTimeout(() => { setStage(4); setHint(""); startConfetti(3500); }, 700);
//     } else {
//       playSound(POP_SOUND, { volume: 0.4 });
//       setHint("ভুল হয়েছে 🙂");
//       setTimeout(() => setHint("সঠিক ইমোজি বেছে নাও 💖"), 1200);
//     }
//   };

//   const restart = () => {
//     setStage(0);
//     setHeartHits(0);
//     setBalloonsLeft(3);
//     setSelected(null);
//     setHint("");
//     setEmojiPositions(randomEmojiPositions(6));
//   };

//   const Stars = () => Array.from({ length: 20 }).map((_, i) => (
//     <motion.div
//       key={i}
//       className="absolute bg-white rounded-full"
//       style={{ width: Math.random() * 4 + 3, height: Math.random() * 4 + 3, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
//       animate={{ opacity: [0.2, 1, 0.2] }}
//       transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
//     />
//   ));

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffafbd, #ffc3a0, #2193b0, #6dd5ed)", backgroundSize: "600% 600%", animation: "gradientBG 15s ease infinite" }}>
//       <Stars />
//       <div className="w-full max-w-3xl relative z-10">
//         <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10">
//           <div className="mb-4 text-center">
//             <motion.p className="text-lg md:text-2xl font-semibold text-gray-800 min-h-[2rem]" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}>{hint}</motion.p>
//           </div>

//           <div className="min-h-[400px] relative">
//             <AnimatePresence>
//               {stage === 0 && (
//                 <motion.div key="start" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-8">
//                   <motion.button onClick={beginAdventure} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-5 md:px-12 md:py-6 rounded-full font-extrabold shadow-2xl text-xl md:text-3xl" style={{ animation: "swing 2s infinite" }}>শুরু করো 🎯</motion.button>
//                 </motion.div>
//               )}

//               {stage === 1 && (
//                 <motion.button onClick={handleHeartClick} key="heart" style={{ position: "absolute", ...heartPos }} whileTap={{ scale: 0.9 }} className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-pink-300 shadow-2xl text-6xl md:text-8xl">❤️</motion.button>
//               )}

//               {stage === 2 && balloonsLeft > 0 && Array.from({ length: balloonsLeft }).map((_, i) => (
//                 <motion.button key={i} onClick={popBalloon} style={{ position: "absolute", ...randomPos() }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="w-24 h-32 md:w-28 md:h-36 rounded-b-full bg-gradient-to-br from-red-400 to-pink-500 shadow-lg flex items-end justify-center text-4xl md:text-5xl">🎈</motion.button>
//               ))}

//               {stage === 3 && ["🌟", "🎈", "💖", "🎵", "😊", "🍰"].map((emo, idx) => (
//                 <motion.button key={emo} onClick={() => chooseEmoji(emo)} style={{ position: "absolute", ...emojiPositions[idx] }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }} className={`p-5 md:p-6 rounded-xl shadow-md bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-5xl md:text-6xl ${selected === emo ? "ring-4 ring-pink-300" : ""}`}>{emo}</motion.button>
//               ))}

//               {stage === 4 && (
//                 <motion.div key="final" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-6 py-6">
//                   <h1 className="text-3xl md:text-5xl font-extrabold text-pink-600 animate-pulse">🎉 শুভ জন্মদিন! 🎉</h1>
//                   <motion.img src="https://i.imgur.com/0DElr0H.jpg" alt="Sahara" className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-white shadow-xl" />
//                   <p className="max-w-xl text-center text-gray-800 text-lg md:text-xl">আজকের দিনটা শুধু তোমার — হাসিতে ভরে উঠুক প্রতিটি মুহূর্ত। ❤️</p>
//                   <button onClick={() => startConfetti(2500)} className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg text-lg md:text-xl">আবার কনফেতি! 🎊</button>
//                   <button onClick={restart} className="px-6 py-3 md:px-8 md:py-4 border rounded-full shadow-lg text-lg md:text-xl">আবার খেলো 🔄</button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes swing { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(3deg); } 75% { transform: rotate(-3deg); } }
//         @keyframes gradientBG { 0% {background-position: 0% 50%;} 50% {background-position: 100% 50%;} 100% {background-position: 0% 50%;} }
//       `}</style>
//     </div>
//   );
// }



// 8
// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import confetti from "canvas-confetti";
// import { Howl } from "howler";

// const POP_SOUND = "https://www.soundjay.com/misc/sounds/pop-1.mp3";
// const SUCCESS_SOUND = "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";

// // নতুন: ফাইনাল ছবি ও লেখা
// const FINAL_IMAGES = [
//   "https://ibb.co.com/v6vHtH2Q",
//   "https://ibb.co.com/v6vHtH2Q",
//   "https://ibb.co.com/v6vHtH2Q",
//   "https://ibb.co.com/v6vHtH2Q",
//   "https://ibb.co.com/v6vHtH2Q"
// ];

// const FINAL_TEXTS = [
//   "আজকের দিনটা শুধু তোমার — হাসিতে ভরে উঠুক প্রতিটি মুহূর্ত। ❤️",
//   "জন্মদিনের শুভেচ্ছা! আজকে শুধু আনন্দ আর হাসি ছড়িয়ে দাও। 🎉",
//   "তোমার হাসি আজকে আরও উজ্জ্বল হোক, সুখের প্রতিটি মুহূর্ত উপভোগ করো। 🌸",
//   "শুভ জন্মদিন! ভালোবাসা ও আনন্দে ভরে থাকুক প্রতিটি দিন। 💖",
//   "আজকের দিনটা তোমার জন্য, স্মৃতিতে মধুর মুহূর্ত তৈরি করো। 🎂"
// ];

// export default function App() {
//   const [stage, setStage] = useState(0);
//   const [heartHits, setHeartHits] = useState(0);
//   const [balloonsLeft, setBalloonsLeft] = useState(3);
//   const [selected, setSelected] = useState(null);
//   const [hint, setHint] = useState("");
//   const [heartPos, setHeartPos] = useState(randomPos());
//   const [emojiPositions, setEmojiPositions] = useState(randomEmojiPositions());
//   const [finalImage, setFinalImage] = useState(FINAL_IMAGES[0]);
//   const [finalText, setFinalText] = useState(FINAL_TEXTS[0]);

//   const playSound = (src, opts = {}) => {
//     try {
//       new Howl({ src: [src], volume: opts.volume ?? 0.7 }).play();
//     } catch {}
//   };

//   const startConfetti = (duration = 3000) => {
//     const end = Date.now() + duration;
//     (function frame() {
//       confetti({ particleCount: 7, angle: 60, spread: 60, origin: { x: Math.random(), y: Math.random() * 0.8 } });
//       if (Date.now() < end) requestAnimationFrame(frame);
//     })();
//   };

//   function randomPos() {
//     return { top: `${10 + Math.random() * 70}vh`, left: `${10 + Math.random() * 70}%` };
//   }

//   function randomEmojiPositions(count = 6) {
//     return Array.from({ length: count }).map(() => randomPos());
//   }

//   const beginAdventure = () => {
//     setStage(1);
//     setHint("হার্ট ধরো! ❤️");
//     startConfetti(1000);
//   };

//   const handleHeartClick = () => {
//     playSound(POP_SOUND);
//     setHeartHits(h => {
//       const nh = h + 1;
//       if (nh >= 3) setTimeout(() => { setStage(2); setHint("বেলুন ফাটাও 🎈"); startConfetti(1200); }, 500);
//       return nh;
//     });
//     setHeartPos(randomPos());
//   };

//   const popBalloon = () => {
//     playSound(POP_SOUND);
//     setBalloonsLeft(n => {
//       const nn = n - 1;
//       if (nn <= 0) setTimeout(() => { 
//         setStage(3); 
//         setHint("সঠিক ইমোজি বেছে নাও 💖"); 
//         setEmojiPositions(randomEmojiPositions(6)); 
//         startConfetti(1200); 
//       }, 400);
//       return nn;
//     });
//   };

//   const chooseEmoji = emo => {
//     setSelected(emo);
//     if (emo === "💖") {
//       playSound(SUCCESS_SOUND);
//       // নতুন: র‌্যান্ডম ছবি ও লেখা সেট করা
//       const { image, text } = getRandomFinal();
//       setFinalImage(image);
//       setFinalText(text);
//       setTimeout(() => { setStage(4); setHint(""); startConfetti(3500); }, 700);
//     } else {
//       playSound(POP_SOUND, { volume: 0.4 });
//       setHint("ভুল হয়েছে 🙂");
//       setTimeout(() => setHint("সঠিক ইমোজি বেছে নাও 💖"), 1200);
//     }
//   };

//   const restart = () => {
//     setStage(0);
//     setHeartHits(0);
//     setBalloonsLeft(3);
//     setSelected(null);
//     setHint("");
//     setEmojiPositions(randomEmojiPositions(6));
//   };

//   // নতুন: ফাংশন যা র‌্যান্ডম চয়ন করবে
//   const getRandomFinal = () => {
//     const image = FINAL_IMAGES[Math.floor(Math.random() * FINAL_IMAGES.length)];
//     const text = FINAL_TEXTS[Math.floor(Math.random() * FINAL_TEXTS.length)];
//     return { image, text };
//   };

//   const Stars = () => Array.from({ length: 20 }).map((_, i) => (
//     <motion.div
//       key={i}
//       className="absolute bg-white rounded-full"
//       style={{ width: Math.random() * 4 + 3, height: Math.random() * 4 + 3, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
//       animate={{ opacity: [0.2, 1, 0.2] }}
//       transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
//     />
//   ));

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffafbd, #ffc3a0, #2193b0, #6dd5ed)", backgroundSize: "600% 600%", animation: "gradientBG 15s ease infinite" }}>
//       <Stars />
//       <div className="w-full max-w-3xl relative z-10">
//         <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10">
//           <div className="mb-4 text-center">
//             <motion.p className="text-lg md:text-2xl font-semibold text-gray-800 min-h-[2rem]" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}>{hint}</motion.p>
//           </div>

//           <div className="min-h-[400px] relative">
//             <AnimatePresence>
//               {stage === 0 && (
//                 <motion.div key="start" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-8">
//                   <motion.button onClick={beginAdventure} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-5 md:px-12 md:py-6 rounded-full font-extrabold shadow-2xl text-xl md:text-3xl" style={{ animation: "swing 2s infinite" }}>শুরু করো 🎯</motion.button>
//                 </motion.div>
//               )}

//               {stage === 1 && (
//                 <motion.button onClick={handleHeartClick} key="heart" style={{ position: "absolute", ...heartPos }} whileTap={{ scale: 0.9 }} className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-pink-300 shadow-2xl text-6xl md:text-8xl">❤️</motion.button>
//               )}

//               {stage === 2 && balloonsLeft > 0 && Array.from({ length: balloonsLeft }).map((_, i) => (
//                 <motion.button key={i} onClick={popBalloon} style={{ position: "absolute", ...randomPos() }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="w-24 h-32 md:w-28 md:h-36 rounded-b-full bg-gradient-to-br from-red-400 to-pink-500 shadow-lg flex items-end justify-center text-4xl md:text-5xl">🎈</motion.button>
//               ))}

//               {stage === 3 && ["🌟", "🎈", "💖", "🎵", "😊", "🍰"].map((emo, idx) => (
//                 <motion.button key={emo} onClick={() => chooseEmoji(emo)} style={{ position: "absolute", ...emojiPositions[idx] }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }} className={`p-5 md:p-6 rounded-xl shadow-md bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-5xl md:text-6xl ${selected === emo ? "ring-4 ring-pink-300" : ""}`}>{emo}</motion.button>
//               ))}

//               {stage === 4 && (
//                 <motion.div key="final" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-6 py-6">
//                   <h1 className="text-3xl md:text-5xl font-extrabold text-pink-600 animate-pulse">🎉 শুভ জন্মদিন! 🎉</h1>
//                   <motion.img src={finalImage} alt="Sahara" className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-white shadow-xl" />
//                   <p className="max-w-xl text-center text-gray-800 text-lg md:text-xl">{finalText}</p>
//                   <button onClick={() => startConfetti(2500)} className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg text-lg md:text-xl">আবার কনফেতি! 🎊</button>
//                   <button onClick={restart} className="px-6 py-3 md:px-8 md:py-4 border rounded-full shadow-lg text-lg md:text-xl">আবার খেলো 🔄</button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes swing { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(3deg); } 75% { transform: rotate(-3deg); } }
//         @keyframes gradientBG { 0% {background-position: 0% 50%;} 50% {background-position: 100% 50%;} 100% {background-position: 0% 50%;} }
//       `}</style>
//     </div>
//   );
// }



// 9

// src/App.js
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import confetti from "canvas-confetti";
// import { Howl } from "howler";

// // Local assets import
// import Img1 from "./assets/6.jpg";
// import Img2 from "./assets/1.jpg";
// import Img3 from "./assets/2.jpg";
// import Img4 from "./assets/3.jpg";
// import Img5 from "./assets/4.jpg";

// const POP_SOUND = "https://www.soundjay.com/misc/sounds/pop-1.mp3";
// const SUCCESS_SOUND = "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";

// // Final images & messages
// const FINAL_IMAGES = [Img1, Img2, Img3, Img4, Img5];
// const FINAL_MESSAGES = [
//   "আজকের দিনটা শুধু তোমার — হাসিতে ভরে উঠুক প্রতিটি মুহূর্ত। ❤️",
//   "শুভ জন্মদিন! জীবনের প্রতিটি দিন হোক আনন্দে ভরা। 🌸",
//   "আজকে শুধু তুমি রাজা/রানী, আনন্দ করো! 🎉",
//   "একটি নতুন বছরের শুরু, আনন্দে ভরা থাকুক প্রতিটি মুহূর্ত। 💖",
//   "জন্মদিনের শুভেচ্ছা! হাসি ও ভালোবাসা সর্বদা তোমার সঙ্গে থাকুক। 🌟"
// ];

// export default function App() {
//   const [stage, setStage] = useState(0);
//   const [heartHits, setHeartHits] = useState(0);
//   const [balloonsLeft, setBalloonsLeft] = useState(3);
//   const [selected, setSelected] = useState(null);
//   const [hint, setHint] = useState("");
//   const [heartPos, setHeartPos] = useState(randomPos());
//   const [emojiPositions, setEmojiPositions] = useState(randomEmojiPositions());
//   const [finalImage, setFinalImage] = useState(null);
//   const [finalMessage, setFinalMessage] = useState("");

//   const playSound = (src, opts = {}) => {
//     try { new Howl({ src: [src], volume: opts.volume ?? 0.7 }).play(); } catch {}
//   };

//   const startConfetti = (duration = 3000) => {
//     const end = Date.now() + duration;
//     (function frame() {
//       confetti({ particleCount: 7, angle: 60, spread: 60, origin: { x: Math.random(), y: Math.random() * 0.8 } });
//       if (Date.now() < end) requestAnimationFrame(frame);
//     })();
//   };

//   function randomPos() { return { top: `${10 + Math.random() * 70}vh`, left: `${10 + Math.random() * 70}%` }; }
//   function randomEmojiPositions(count = 6) { return Array.from({ length: count }).map(() => randomPos()); }

//   const beginAdventure = () => { setStage(1); setHint("হার্ট ধরো! ❤️"); startConfetti(1000); };

//   const handleHeartClick = () => {
//     playSound(POP_SOUND);
//     setHeartHits(h => {
//       const nh = h + 1;
//       if (nh >= 3) setTimeout(() => { setStage(2); setHint("বেলুন ফাটাও 🎈"); startConfetti(1200); }, 500);
//       return nh;
//     });
//     setHeartPos(randomPos());
//   };

//   const popBalloon = () => {
//     playSound(POP_SOUND);
//     setBalloonsLeft(n => {
//       const nn = n - 1;
//       if (nn <= 0) setTimeout(() => { setStage(3); setHint("সঠিক ইমোজি বেছে নাও 💖"); setEmojiPositions(randomEmojiPositions(6)); startConfetti(1200); }, 400);
//       return nn;
//     });
//   };

//   const chooseEmoji = emo => {
//     setSelected(emo);
//     if (emo === "💖") {
//       playSound(SUCCESS_SOUND);
//       const randImg = FINAL_IMAGES[Math.floor(Math.random() * FINAL_IMAGES.length)];
//       const randMsg = FINAL_MESSAGES[Math.floor(Math.random() * FINAL_MESSAGES.length)];
//       setFinalImage(randImg);
//       setFinalMessage(randMsg);
//       setTimeout(() => { setStage(4); setHint(""); startConfetti(3500); }, 700);
//     } else {
//       playSound(POP_SOUND, { volume: 0.4 });
//       setHint("ভুল হয়েছে 🙂");
//       setTimeout(() => setHint("সঠিক ইমোজি বেছে নাও 💖"), 1200);
//     }
//   };

//   const restart = () => {
//     setStage(0);
//     setHeartHits(0);
//     setBalloonsLeft(3);
//     setSelected(null);
//     setHint("");
//     setEmojiPositions(randomEmojiPositions(6));
//     setFinalImage(null);
//     setFinalMessage("");
//   };

//   const Stars = () => Array.from({ length: 20 }).map((_, i) => (
//     <motion.div key={i} className="absolute bg-white rounded-full" style={{ width: Math.random() * 4 + 3, height: Math.random() * 4 + 3, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }} />
//   ));

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffafbd, #ffc3a0, #2193b0, #6dd5ed)", backgroundSize: "600% 600%", animation: "gradientBG 15s ease infinite" }}>
//       <Stars />
//       <div className="w-full max-w-3xl relative z-10">
//         <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10">
//           <div className="mb-4 text-center">
//             <motion.p className="text-lg md:text-2xl font-semibold text-gray-800 min-h-[2rem]" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}>{hint}</motion.p>
//           </div>

//           <div className="min-h-[400px] relative">
//             <AnimatePresence>
//               {stage === 0 && (
//                 <motion.div key="start" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-8">
//                   <motion.button onClick={beginAdventure} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-5 md:px-12 md:py-6 rounded-full font-extrabold shadow-2xl text-xl md:text-3xl" style={{ animation: "swing 2s infinite" }}>শুরু করো 🎯</motion.button>
//                 </motion.div>
//               )}

//               {stage === 1 && (
//                 <motion.button onClick={handleHeartClick} key="heart" style={{ position: "absolute", ...heartPos }} whileTap={{ scale: 0.9 }} className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-pink-300 shadow-2xl text-6xl md:text-8xl">❤️</motion.button>
//               )}

//               {stage === 2 && balloonsLeft > 0 && Array.from({ length: balloonsLeft }).map((_, i) => (
//                 <motion.button key={i} onClick={popBalloon} style={{ position: "absolute", ...randomPos() }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="w-24 h-32 md:w-28 md:h-36 rounded-b-full bg-gradient-to-br from-red-400 to-pink-500 shadow-lg flex items-end justify-center text-4xl md:text-5xl">🎈</motion.button>
//               ))}

//               {stage === 3 && ["🌟", "🎈", "💖", "🎵", "😊", "🍰"].map((emo, idx) => (
//                 <motion.button key={emo} onClick={() => chooseEmoji(emo)} style={{ position: "absolute", ...emojiPositions[idx] }} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }} className={`p-5 md:p-6 rounded-xl shadow-md bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-5xl md:text-6xl ${selected === emo ? "ring-4 ring-pink-300" : ""}`}>{emo}</motion.button>
//               ))}

//               {stage === 4 && finalImage && (
//                 <motion.div key="final" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-6 py-6">
//                   <h1 className="text-3xl md:text-5xl font-extrabold text-pink-600 animate-pulse">🎉 শুভ জন্মদিন, সাহারা 🎉</h1>
//                   <motion.img src={finalImage} alt="Celebration" className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-white shadow-xl" />
//                   <p className="max-w-xl text-center text-gray-800 text-lg md:text-xl">{finalMessage}</p>
//                   <button onClick={() => startConfetti(2500)} className="px-6 py-3 md:px-8 md:py-4  text-white rounded-full shadow-lg text-lg md:text-xl">চিয়ার্স! 🎊</button>
//                   <button onClick={restart} className="px-6 py-3  md:px-8 md:py-4 border rounded-full shadow-lg text-lg md:text-xl">আবার খেলো 🔄</button>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes swing { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(3deg); } 75% { transform: rotate(-3deg); } }
//         @keyframes gradientBG { 0% {background-position: 0% 50%;} 50% {background-position: 100% 50%;} 100% {background-position: 0% 50%;} }
//       `}</style>
//     </div>
//   );
// }



// 10
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Howl } from "howler";

// Local assets import
import Img1 from "./assets/6.jpg";
import Img2 from "./assets/1.jpg";
import Img3 from "./assets/2.jpg";
import Img4 from "./assets/3.jpg";
import Img5 from "./assets/4.jpg";

const POP_SOUND = "https://www.soundjay.com/misc/sounds/pop-1.mp3";
const SUCCESS_SOUND = "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3";

const FINAL_IMAGES = [Img1, Img2, Img3, Img4, Img5];
const FINAL_MESSAGES = [
  "আজকের দিনটা শুধু তোমার — হাসিতে ভরে উঠুক প্রতিটি মুহূর্ত। ❤️",
  "শুভ জন্মদিন! জীবনের প্রতিটি দিন হোক আনন্দে ভরা। 🌸",
  "আজকে শুধু তুমি রাজা/রানী, আনন্দ করো! 🎉",
  "একটি নতুন বছরের শুরু, আনন্দে ভরা থাকুক প্রতিটি মুহূর্ত। 💖",
  "জন্মদিনের শুভেচ্ছা! হাসি ও ভালোবাসা সর্বদা তোমার সঙ্গে থাকুক। 🌟"
];

export default function App() {
  const [stage, setStage] = useState(0);
  const [heartHits, setHeartHits] = useState(0);
  const [balloonsLeft, setBalloonsLeft] = useState(3);
  const [selected, setSelected] = useState(null);
  const [hint, setHint] = useState("");
  const [heartPos, setHeartPos] = useState(randomPos());
  const [emojiPositions, setEmojiPositions] = useState(randomEmojiPositions());
  const [finalImage, setFinalImage] = useState(null);
  const [finalMessage, setFinalMessage] = useState("");

  const playSound = (src, opts = {}) => {
    try { new Howl({ src: [src], volume: opts.volume ?? 0.7 }).play(); } catch {}
  };

  const startConfetti = (duration = 3000) => {
    const end = Date.now() + duration;
    (function frame() {
      confetti({ particleCount: 7, angle: 60, spread: 60, origin: { x: Math.random(), y: Math.random() * 0.8 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  function randomPos() { return { top: `${10 + Math.random() * 70}vh`, left: `${10 + Math.random() * 70}%` }; }
  function randomEmojiPositions(count = 6) { return Array.from({ length: count }).map(() => randomPos()); }

  const beginAdventure = () => { setStage(1); setHint("হার্ট ধরো! ❤️"); startConfetti(1000); };

  const handleHeartClick = () => {
    playSound(POP_SOUND);
    setHeartHits(h => {
      const nh = h + 1;
      if (nh >= 3) setTimeout(() => { setStage(2); setHint("বেলুন ফাটাও 🎈"); startConfetti(1200); }, 500);
      return nh;
    });
    setHeartPos(randomPos());
  };

  const popBalloon = () => {
    playSound(POP_SOUND);
    setBalloonsLeft(n => {
      const nn = n - 1;
      if (nn <= 0) setTimeout(() => { setStage(3); setHint("সঠিক ইমোজি বেছে নাও 💖"); setEmojiPositions(randomEmojiPositions(6)); startConfetti(1200); }, 400);
      return nn;
    });
  };

  const chooseEmoji = emo => {
    setSelected(emo);
    if (emo === "💖") {
      playSound(SUCCESS_SOUND);
      const randImg = FINAL_IMAGES[Math.floor(Math.random() * FINAL_IMAGES.length)];
      const randMsg = FINAL_MESSAGES[Math.floor(Math.random() * FINAL_MESSAGES.length)];
      setFinalImage(randImg);
      setFinalMessage(randMsg);
      setTimeout(() => { setStage(4); setHint(""); startConfetti(3500); }, 700);
    } else {
      playSound(POP_SOUND, { volume: 0.4 });
      setHint("ভুল হয়েছে 🙂");
      setTimeout(() => setHint("সঠিক ইমোজি বেছে নাও 💖"), 1200);
    }
  };

  const restart = () => {
    setStage(0);
    setHeartHits(0);
    setBalloonsLeft(3);
    setSelected(null);
    setHint("");
    setEmojiPositions(randomEmojiPositions(6));
    setFinalImage(null);
    setFinalMessage("");
  };

  const Stars = () => Array.from({ length: 20 }).map((_, i) => (
    <motion.div key={i} className="absolute bg-white rounded-full" style={{ width: Math.random() * 4 + 3, height: Math.random() * 4 + 3, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }} />
  ));

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #ffafbd, #ffc3a0, #2193b0, #6dd5ed)", backgroundSize: "600% 600%", animation: "gradientBG 15s ease infinite" }}>
      <Stars />
      <div className="w-full max-w-3xl relative z-10">
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10">
          <div className="mb-4 text-center">
            <motion.p className="text-lg md:text-2xl font-semibold text-gray-800 min-h-[2rem]" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }}>{hint}</motion.p>
          </div>

          <div className="min-h-[400px] relative">
            <AnimatePresence>
              {stage === 0 && (
                <motion.div key="start" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-8">
                  <motion.button 
                    onClick={beginAdventure} 
                    whileHover={{ scale: 1.1, rotate: 5 }} 
                    whileTap={{ scale: 0.95 }} 
                    className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-5 md:px-12 md:py-6 rounded-full font-extrabold shadow-2xl text-xl md:text-3xl" 
                    style={{ animation: "swing 2s infinite" }}
                  >
                    শুরু করো 🎯
                  </motion.button>
                </motion.div>
              )}

              {stage === 1 && (
                <motion.button 
                  onClick={handleHeartClick} 
                  key="heart" 
                  style={{ position: "absolute", ...heartPos }}
                  whileTap={{ scale: 0.9 }} 
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-gradient-to-br from-red-400 via-pink-300 to-yellow-300 shadow-2xl text-6xl md:text-8xl"
                >
                  ❤️
                </motion.button>
              )}

              {stage === 2 && balloonsLeft > 0 && Array.from({ length: balloonsLeft }).map((_, i) => (
                <motion.button 
                  key={i} 
                  onClick={popBalloon} 
                  style={{ position: "absolute", ...randomPos() }} 
                  whileHover={{ scale: 1.2 }} 
                  whileTap={{ scale: 0.9 }} 
                  className="w-24 h-32 md:w-28 md:h-36 rounded-b-full bg-gradient-to-br from-red-400 via-pink-500 to-purple-400 shadow-lg flex items-end justify-center text-4xl md:text-5xl"
                >
                  🎈
                </motion.button>
              ))}

              {stage === 3 && ["🌟", "🎈", "💖", "🎵", "😊", "🍰"].map((emo, idx) => (
                <motion.button 
                  key={emo} 
                  onClick={() => chooseEmoji(emo)} 
                  style={{ position: "absolute", ...emojiPositions[idx] }} 
                  whileHover={{ scale: 1.3 }} 
                  whileTap={{ scale: 0.95 }} 
                  className={`p-5 md:p-6 rounded-xl shadow-md bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-5xl md:text-6xl ${selected === emo ? "ring-4 ring-pink-300" : ""}`}
                >
                  {emo}
                </motion.button>
              ))}

              {stage === 4 && finalImage && (
                <motion.div key="final" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-6 py-6">
                  <h1 className="text-3xl md:text-5xl font-extrabold text-pink-600 animate-pulse">🎉 শুভ জন্মদিন, সাহারা 🎉</h1>
                  <motion.img 
                    src={finalImage} 
                    alt="Celebration" 
                    className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-white shadow-xl max-w-full"
                  />
                  <p className="max-w-xl text-center text-gray-800 text-lg md:text-xl">{finalMessage}</p>
                  <button 
                    onClick={() => startConfetti(2500)} 
                    className="px-6 py-3 md:px-8 md:py-4 text-white rounded-full shadow-lg text-lg md:text-xl bg-gradient-to-r from-green-400 to-blue-500"
                  >
                    চিয়ার্স! 🎊
                  </button>
                  <button 
                    onClick={restart} 
                    className="px-6 py-3 md:px-8 md:py-4 border rounded-full shadow-lg text-lg md:text-xl bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-white"
                  >
                    আবার খেলো 🔄
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes swing { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(3deg); } 75% { transform: rotate(-3deg); } }
        @keyframes gradientBG { 0% {background-position: 0% 50%;} 50% {background-position: 100% 50%;} 100% {background-position: 0% 50%;} }
      `}</style>
    </div>
  );
}
