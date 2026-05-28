import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>
        🛒 Loja Gamer
      </Text>

      <ProductCard
        title="RTX 5090"
        price="R$ 15.999,99"
        description="Placa de vídeo de alta performance."
        inStock={true}
      />

      <ProductCard
        title="Ryzen 9 9950X"
        price="R$ 4.299,99"
        description="Processador poderoso para games."
        inStock={true}
      />

      <ProductCard
        title="Memória RAM 32GB"
        price="R$ 899,99"
        description="Memória DDR5 ultra rápida."
        inStock={false}
      />

      <ProductCard
        title="SSD NVMe 2TB"
        price="R$ 1.299,99"
        description="Armazenamento extremamente rápido."
        inStock={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 20,
    paddingTop: 50,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});