import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Box from '@mui/joy/Box';
import isoelectricLine from 'src/assets/lotties/isoelectricLine.json';

const transitionDuration = 200;

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: 'white',
    transition: `opacity ${transitionDuration}ms linear`,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100dvh',
  },
  animation: {
    width: '50vmin',
    height: '50vmin',
    maxWidth: 400,
    maxHeight: 400,
  },
};

const AppLoading = React.memo(({ isLoaded }) => {

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => setShow(false), transitionDuration);
    }
  }, [isLoaded]);

  return show && (
    <Box sx={{...styles.backdrop, opacity: isLoaded ? 0 : 1 }}>
      <Box sx={styles.container}>
        <Lottie style={styles.animation} animationData={isoelectricLine} />
      </Box>
    </Box>
  );
});

AppLoading.displayName = 'AppLoading';
export default AppLoading;
