import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Box } from '@mui/joy';

import api from 'src/services/api';
import AppLoading from 'src/views/components/overlays/AppLoading';
import sleep from 'src/utils/sleep';
import { getUser, setUser } from 'src/utils/user';

const LoadingGate = React.memo(({ children }) => {

  const [isLoaded, setIsLoaded] = useState(false);

  let user = getUser();

  const { data } = useQuery({
    enabled: !user,
    queryKey: ['createUser'],
    queryFn: () => api.users.create({ name: 'Fritz Wetherbee' }),
  });

  if (!user && data?.data) {
    user = data.data;
    setUser(user);
  }

  if (user) {
    // Simulate real loading experience
    sleep(2500).then(() => setIsLoaded(true));
  }

  return (
    <Box>
      {isLoaded && children}
      <AppLoading isLoaded={isLoaded} />
    </Box>
  );
});

LoadingGate.displayName = 'LoadingGate';
export default LoadingGate;
