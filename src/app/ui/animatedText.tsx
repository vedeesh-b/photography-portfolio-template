'use client'
import {motion} from 'motion/react'

export const AnimatedText = ({ text }: { text: string }) => {
    return (
        <motion.div
            className="relative inline-block"
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="block"
              variants={{
                initial: { y: 0 },
                hover: { y: "100%" },
              }}
              transition={{ duration: 0.3 }}
            >
              {text}
            </motion.span>
            <motion.span
              className="block absolute left-0 top-0"
              variants={{
                initial: { y: "-100%" },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {text}
            </motion.span>
          </motion.div>
    )
}