import {  View } from "react-native";
import { styles } from "./styles";
import Icone from "../../components/Icone";
import Footer from "../../components/Footer";

export default function Workspace({ navigation }: any) {
    //const navigation = useNavigation<StackTypes>();

    function handleNavigateToLixeira() {
        navigation.navigate("Lixeira");
    }

    function handleNavigateToCriarProdutos() {
        navigation.navigate("CriarProdutos");
    }

    function handleNavigateToVisualizarProdutos() {
        navigation.navigate("VisualizarProdutos");
    }

    function handleNavigateToAtualizarProdutos() {
        navigation.navigate("AtualizarProdutos");
    }

    function handleNavigateToSobreNos() {
        navigation.navigate("SobreNos")
    }

    function handleNavigateToPortugolStudio() {
        navigation.navigate("PortugolStudio")
    }

    function handleNavigateToCalculadora() {
        navigation.navigate("Calculadora")
    }

    function toggleDrawer() {
        navigation.toggleDrawer();
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Icone
                    style={styles.icon}
                    title="Lixeira"
                    source={require("../../../assets/icons/lixeira-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToLixeira}
                />
                <Icone
                    style={styles.icon}
                    title="Criar Produtos"
                    source={require("../../../assets/icons/criar-produtos-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToCriarProdutos}
                />
                <Icone
                    style={styles.icon}
                    title="Visualizar Produtos"
                    source={require("../../../assets/icons/visualizar-produtos-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToVisualizarProdutos}
                />
                <Icone
                    style={styles.icon}
                    title="Atualizar Produtos"
                    source={require("../../../assets/icons/atualizar-produtos-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToAtualizarProdutos}
                />
                <Icone
                    style={styles.icon}
                    title="Sobre Nós"
                    source={require("../../../assets/icons/sobre-nos-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToSobreNos}
                />
                <Icone
                    style={styles.icon}
                    title="Portugol Studio"
                    source={require("../../../assets/icons/portugol-studio-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToPortugolStudio}
                />
                <Icone
                    style={styles.icon}
                    title="Calculadora"
                    source={require("../../../assets/icons/calculadora-icon.png")}
                    width={50}
                    height={50}
                    textStyle={{ color: "#FFF" }}
                    onPress={handleNavigateToCalculadora}
                />
            </View>
            <Footer onPress={toggleDrawer}/>
        </View>
    );
}