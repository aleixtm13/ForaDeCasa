import { ThemedText } from "./ThemedText";
import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";

export default function ActivitatsTopBar() {
    return (
        <>
            <ThemedView style={style.container} lightColor="#D0D0D0" darkColor="#353636">
                <ThemedText style={style.title}>ACTIVITATS</ThemedText>
            </ThemedView>
        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 20,
    },
    title: {
        fontSize: 24
    }
});