import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  title: string;
  price: string;
  description: string;
  inStock: boolean;
};

export default function ProductCard({
  title,
  price,
  description,
  inStock,
}: Props) {
  return (
    <View
      style={[
        styles.card,
        !inStock && styles.cardIndisponivel,
      ]}
    >
      <Text style={styles.titulo}>
        {title}
      </Text>

      <Text style={styles.preco}>
        {price}
      </Text>

      <Text style={styles.descricao}>
        {description}
      </Text>

      <Text
        style={[
          styles.status,
          inStock
            ? styles.disponivel
            : styles.indisponivel,
        ]}
      >
        {inStock
          ? 'Disponível'
          : 'Indisponível'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },

  cardIndisponivel: {
    opacity: 0.5,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  preco: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 8,
  },

  descricao: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
  },

  status: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  disponivel: {
    color: 'green',
  },

  indisponivel: {
    color: 'red',
  },
});