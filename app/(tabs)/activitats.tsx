import ParallaxScrollView from "@/components/ParallaxScrollView";
import ActivitatsTopBar from '@/components/ActivitatsTopBar';

export default function ActivitatsScreen() {
    return (
        <ParallaxScrollView
            topBarComponent={<ActivitatsTopBar />}
        >
        </ParallaxScrollView>
    )
}