import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="h-40 w-40 md:h-52 md:w-52 animate-spin motion-reduce:animate-none [animation-duration:2.5s]"
          >
            <img
              src={logo}
              alt="Mamokacha"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
