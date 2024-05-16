import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ButtonInput from '../components/ButtonInput';
import LogoDeezer from '../components/LogoDeezer';

type RootStackParamList = {
    Connection: undefined;
    Quiz: undefined;
    Begin: undefined;
};

const styles = StyleSheet.create({
    container: {
        padding: 12,
        gap: 24,
        backgroundColor: "black",
        flex: 1,
    },
    containerLogo: {
        marginTop: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 0.5,
        paddingBottom: 60,
    },
    textHeader: {
        color: "white",
        fontSize: 32,
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    containerInput: {
        gap: 12,
        flex: 1,
        alignItems: "center",
    },
})

type Props = NativeStackScreenProps<RootStackParamList, 'Begin'>;

export default function Begin({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logoSmall.png')} 
                />
                <Text style={styles.textHeader}>Attention</Text>
            </View>
            <View style={styles.containerInput} >
                <ButtonInput
                    navigate={() => navigation.navigate('Quiz')}
                    text="Commencer"
                    textColor="white"
                    backgroundColor="#AB47BC"
                />
                <ButtonInput
                    navigate={() => navigation.navigate('Connection')}
                    text="Retour"
                    textColor="white"
                    backgroundColor="rgba(255, 255, 255, 0.5)"
                />
            </View>
        </View>
    );
}