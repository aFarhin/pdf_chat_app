import React, { useState, useEffect } from 'react';
import './styles.css';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import gifImage from '../../assets/chat_bot.gif';

function DefaultPage() {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('https://source.unsplash.com/random/?book')
        .then((response) => {
          setBackgroundImage(response.url);
        })
        .catch((error) => {
          console.error('Error fetching random image:', error);
        });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: -5 },
    visible: { opacity: 5, transition: { duration: 0.7, ease: 'ease' } },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <motion.div
          className='background-image'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
          style={{
            position: 'absolute',
            top: '2rem',
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='left-div'
          
            style={{
              position: 'absolute',
              bottom: '10rem',
              // left: '3rem',
              color: 'white',
              textShadow: '2px 3px 8px black',
            }}
          >

<motion.h1
              style={{ marginLeft: '20px' }}
              animate={{
                x: [-15, 15, -15],
                transition: {
                  duration: 4, 
                  repeat: Infinity,
                  ease: 'linear', 
                },
              }}
            >
              Learn Your PDF
            </motion.h1>
            <motion.h4 style={{ marginLeft: '20px' }}
              animate={{
                x: [-15, 15, -15],
                transition: {
                  duration: 4, 
                  repeat: Infinity, 
                  ease: 'linear', 
                },
              }}>Unlock the Secrets Hidden in Your Documents</motion.h4>
  <div className='right-div'>
        <img className='gif' src={gifImage} alt='Chat Bot' />
      </div>
            <motion.button
              className='button'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginLeft: '20px' }}
              onClick={() => {
                navigate('/upload-pdf-get-answer');
              }}
            >
              Start Exploring
            </motion.button>

          </div>
          

        </motion.div>
      </div>
    </div>
  );
}

export default DefaultPage;