import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
    Connection: undefined;
    Quiz: undefined;
    Begin: undefined;
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' ,
        backgroundColor:"#ffff"
    }

})

type Props = NativeStackScreenProps<RootStackParamList, 'Begin'>;

export default function Begin({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text>Commencer le quiz</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <Button
                    title="Retour"
                    onPress={() => navigation.navigate('Connection')}
                />
                <Button
                    title="Commencer"
                    onPress={() => navigation.navigate('Quiz')}
                />
            </View>
        </View>
    );
}