import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import TopBar from '@/components/TopBar';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      topBarComponent={<TopBar />}
      topBarBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      >
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
