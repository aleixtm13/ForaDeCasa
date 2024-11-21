import { StyleSheet } from 'react-native';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import TopBar from '@/components/TopBar';

export default function SettingsScreen() {
    return (
        <ParallaxScrollView
            topBarBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            topBarComponent= { <TopBar />}
        >
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});