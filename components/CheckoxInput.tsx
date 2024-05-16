import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Checkbox from 'expo-checkbox';

const styles = StyleSheet.create({
    containerCheckbox: {
        flexDirection: "row",
        gap: 8,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderColor: "#ab47bc",
    },
    textCheckbox: {
        color: "white",
    }
})
export default function CheckboxInput() {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.containerCheckbox}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#ab47bc' : undefined}
            />
            <Text style={styles.textCheckbox}>J'accepte les conditions générales</Text>
        </View>
    )
}