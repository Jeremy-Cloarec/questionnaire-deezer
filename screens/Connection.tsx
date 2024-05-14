import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import Loading from '../components/Loading';

type RootStackParamList = {
    Connection: undefined;
    Begin: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Connection'>;

export default function Connection({ navigation }: Props) {
    const [showComponent, setShowComponent] = useState(true);
    useFocusEffect(
        React.useCallback(() => {
            setShowComponent(true);
            const timer = setTimeout(() => {
                setShowComponent(false);
            }, 3000);

            return () => clearTimeout(timer);
        }, [])
    );

    return (
        <>
            {showComponent ? (
                <Loading showComponent={showComponent} />
            ) : (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>S'inscrire au quiz</Text>
                    <Button
                        title="S'incrire"
                        onPress={() => navigation.navigate('Begin')}
                    />
                </View>
            )}
        </>
    );
}