import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section id="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <h1>About Me</h1>
      <p>This section will contain information about you and your expertise.</p>
    </motion.section>
  );
}

export default AboutMe;
