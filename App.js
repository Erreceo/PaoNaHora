import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import moment from "moment";

export default function App () {

    const today = new Date(),
        [dataAtual,
            setDataAtual] = useState(new Date()),
        [dataPaoNaHora,
            setDataPaoNaHora] = useState(new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1,
            7,
            0,
            0
        ));

    setTimeout(
        () => {

            setDataAtual(new Date());

        },
        1000
    );

    const increaseDecrease = (val) => {

            const minTime = 30;
            setDataPaoNaHora(moment(dataPaoNaHora).add(
                (minTime * val).toString(),
                "m"
            ).toDate());

        },
        increase = 1,
        decrease = -1;

    return (
        <View style={styles.container}>
            <Text>Hora Atual</Text>
            <Text>{`${moment(dataAtual).format("HH:mm:ss")}`}</Text>
            <Text>Pão Na Hora</Text>
            <View style={{"display": "flex",
                "flexDirection": "row",
                "justifyContent": "center",
                "alignItems": "center"}}>
                <View>
                    <TouchableOpacity style={{"borderColor": "black",
                        "borderRadius": 50,
                        "borderWidth": 1,
                        "width": 20,
                        "height": 20,
                        "justifyContent": "center",
                        "alignItems": "center",
                        "backgroundColor": "blue"}}
                    onPress={() => increaseDecrease(decrease)}>
                        <FontAwesome name={"minus"} style={{"color": "white"}}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput value={moment(dataPaoNaHora).format("HH:mm")}/>
                </View>
                <View>
                    <TouchableOpacity style={{"borderColor": "black",
                        "borderRadius": 50,
                        "borderWidth": 1,
                        "height": 20,
                        "width": 20,
                        "backgroundColor": "blue",
                        "alignItems": "center",
                        "justifyContent": "center"}}
                    onPress={() => increaseDecrease(increase)}>
                        <FontAwesome name={"plus"} style={{"color": "white"}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <Text>Quantidade de Horas</Text>
            <Text>{moment(moment(dataPaoNaHora).diff(moment(dataAtual))).add('245', 'm').format("HH:mm")}</Text>
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    "container": {
        "flex": 1,
        "backgroundColor": "#fff",
        "alignItems": "center",
        "justifyContent": "center"
    }
});
