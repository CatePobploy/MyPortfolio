// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const Parallax = ({ type }) => {
//   const ref = useRef();

//   // Destructure scrollY from useScroll instead of the entire object
//   const { scrollY } = useScroll({
//     ref: ref,
//     offset: ["start start", "end start"],
//   });

//   // Ensure to pass scrollY as an array to useTransform
//   const yBg = useTransform(scrollY, [0, 1], ["0%", "100%"]);

//   return (
//     <div className="parallax" ref={ref}>
//       <motion.h1 style={{ y: yBg }}>
//         {type === "about me" ? "About" : "Projects"}
//       </motion.h1>
//       <motion.div className="mountains">jjj</motion.div>
//       <motion.div className="planets"></motion.div>
//       <motion.div className="stars"></motion.div>
//     </div>
//   );
// };

// export default Parallax;

