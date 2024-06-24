import { TouchableOpacity, Text, Image, View } from "react-native";
import { styles } from "./styles";

export default function ItemFound({onPress, ...rest}: any) {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.geral}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imagemCentro}
            source={require("../../../assets/icons/guguteste.png")}
          />
        </View>
        <View style={styles.titulo}>
          <Text>GUGU TREM BALA</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
