import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>NETFILMES</Text>

      <TextInput
        placeholder="Pesquisar filmes e séries..."
        placeholderTextColor="#999"
        style={styles.search}
      />

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
        }}
        style={styles.banner}
      />

      <Text style={styles.categoria}>😂 Comédia</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/pt/d/de/White_chicks.jpg',
          }}
          style={styles.capa}
        />

        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/pt/7/77/Grown_Ups_Poster.jpg',
          }}
          style={styles.capa}
        />

        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/0/00/Click_film.jpg',
          }}
          style={styles.capa}
        />
      </ScrollView>

      <Text style={styles.categoria}>🔥 Ação</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Fast_Five_Poster.jpg',
          }}
          style={styles.capa}
        />

        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/7/7f/John_Wick_Chapter_4.jpg',
          }}
          style={styles.capa}
        />

        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg',
          }}
          style={styles.capa}
        />
      </ScrollView>

      <Text style={styles.categoria}>😱 Terror</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/8/88/Conjuring_poster.jpg',
          }}
          style={styles.capa}
        />

        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/1/16/Insidious_poster.jpg',
          }}
          style={styles.capa}
        />

        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Smile_2022_film_poster.png',
          }}
          style={styles.capa}
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    paddingTop: 20,
  },

  logo: {
    color: '#E50914',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  search: {
    backgroundColor: '#222',
    color: '#fff',
    marginHorizontal: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 45,
    marginBottom: 20,
  },

  banner: {
    width: '95%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },

  categoria: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },

  capa: {
    width: 120,
    height: 180,
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 20,
  },
});