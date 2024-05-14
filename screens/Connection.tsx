import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import Input from '../components/Input';

type RootStackParamList = {
    Connection: undefined;
    Begin: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Connection'>;

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
                <View style={{ paddingTop: insets.top }}>
                    <Input text={name} onChangeText={onChangeName}/>
                    
                    <Input text={surName} onChangeText={onChangesurName}/>

                    
                    <Button
                        title="S'incrire"
                        onPress={() => navigation.navigate('Begin')}
                    />
                </View>
            )}
        </>
    );
}
/*
<div class="logo">
        <img src="./images/logo1.png" alt="logo deezer">
    </div>

    <div class="formulaire">
        <form>
            <div class="input-wrapper">
                <input type="text" id="prenom" />
                <label for="prenom">Prénom</label>
            </div>
            <div class="input-wrapper">
                <input type="text" id="nom" />
                <label for="nom">Nom</label>
            </div>

            <div class="checkbox">
                <input type="checkbox" name="conditions" class="conditions" />
                <p>J'accepte les conditions générales</p>
            </div>
            <input type="submit" value="Participer" />
        </form>
    </div>
*/