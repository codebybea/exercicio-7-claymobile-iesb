// components/Time.jsx
import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, FlatList } from "react-native";
import Jogador from "./Jogador";

export default function Time({
  nome,
  anoFundacao,
  mascote,
  imagem,
  jogadores,
}) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: imagem, height: "100%" }} />
      <Card.Content>
        <Title>{nome}</Title>
        <Paragraph>Ano de Fundação: {anoFundacao}</Paragraph>
        <Paragraph>Mascote: {mascote}</Paragraph>
      </Card.Content>
      <Card.Content style={styles.jogadoresContainer}>
        <Title>Jogadores:</Title>
        <FlatList
          horizontal
          data={jogadores}
          renderItem={({ item }) => (
            <Jogador
              nome={item.nome}
              numero={item.numero}
              imagem={item.imagem}
            />
          )}
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  jogadoresContainer: {
    marginTop: 10,
  },
});
