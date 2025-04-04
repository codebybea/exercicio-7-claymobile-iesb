// components/Jogador.jsx
import React from "react";
import { Card, Title, Paragraph, Avatar } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function Jogador({ nome, numero, imagem }) {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Cover source={{ uri: imagem, width: 200, height: 200 }} />
      <Card.Content>
        <Card.Title
          style={{ margin: 10 }}
          title={nome}
          left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
        />
        <Title>{nome}</Title>
        <Paragraph>Número: {numero}</Paragraph>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
});
