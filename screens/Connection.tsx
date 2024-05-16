import * as React from 'react';
import {  useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import Input from '../components/Input';
import ButtonInput from '../components/ButtonInput';
import CheckboxInput from '../components/CheckoxInput';

type RootStackParamList = {
    Connection: undefined;
    Begin: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Connection'>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        gap: 24,
        justifyContent: 'center',
        backgroundColor: "black"
    }
})

export default function Connection({ navigation }: Props) {
    const [name, onChangeName] = React.useState('Prénom');
    const [surName, onChangesurName] = React.useState('Nom');
    const [showComponent, setShowComponent] = useState(true);


    const insets = useSafeAreaInsets();

    useFocusEffect(
        React.useCallback(() => {
            setShowComponent(true);
            const timer = setTimeout(() => {
                setShowComponent(false);
            }, 500);

            return () => clearTimeout(timer);
        }, [])
    );

    return (
        <>
            {showComponent ? (
                <Loading showComponent={showComponent} />
            ) : (
                <View style={[styles.container, { paddingTop: insets.top }]}>
                    <Input
                        label="Nom"
                        placeholder={"Entrez votre nom"}
                        onChangeText={onChangeName}
                    />
                    <Input
                        label="Prénom"
                        placeholder={"Entrez votre prénom"}
                        onChangeText={onChangesurName}
                    />
                    <CheckboxInput />
                    <ButtonInput navigate={() => navigation.navigate('Begin')} text="Participer" />
                </View>
            )}
        </>
    );
}
