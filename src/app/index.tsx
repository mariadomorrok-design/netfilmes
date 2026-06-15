import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
function Filme({ capa, nome, duracao, idade, genero }) {
  const [hover, setHover] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setHover(true)}
      onHoverOut={() => setHover(false)}
      style={styles.filmeContainer}
    >
      <Image source={{ uri: capa }} style={styles.capa} />

      {hover && (
        <View style={styles.info}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.detalhes}>⏱ {duracao}</Text>
          <Text style={styles.detalhes}>🔞 {idade}</Text>
          <Text style={styles.detalhes}>🎬 {genero}</Text>
        </View>
      )}
    </Pressable>
  );
}
import { useState } from 'react';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>NETFILMES</Text>

      <TextInput
        placeholder="Pesquisar filmes..."
        placeholderTextColor="#999"
        style={styles.search}
      />

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200',
        }}
        style={styles.banner}
      />

      <Text style={styles.categoria}>😂 Comédia</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Filme
  capa="https://upload.wikimedia.org/wikipedia/pt/thumb/d/de/White_chicks.jpeg/250px-White_chicks.jpeg"
  nome="As Branquelas"
  duracao="1h 49min"
  idade="12 anos"
  genero="Comédia"
/>
        <Image
          source={{
            uri: 'https://m.media-amazon.com/images/S/pv-target-images/c0386d39754f0324de7d4c2cb9b1ee2b993b75f8e07765e72f3bf5d975b2d21b.jpg',
          }}
          style={styles.capa}
        />

        <Image
          source={{
            uri: 'https://img.daquidali.com.br/2026/filmes-de-comedia-em-alta-7.jpg',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/5e/e7/75/5ee775e725404789585f83e17e6cadf2.jpg',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://br.web.img2.acsta.net/medias/nmedia/18/95/11/11/20380530.jpg',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://i.pinimg.com/236x/e1/17/4a/e1174ad80cf8f80f3028097d0020a7fd.jpg',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lEDAF06Gvl_XrPAgQRzrpJ4yWcgSvEuo1vyMChQW-RL8iemzw9uASkP8&s=10',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://s2-globo-play.glbimg.com/fomon7l5hyRa_HJKxnSSshgQ-N4=/362x536/https://s2-globo-play.glbimg.com/fGIASu3rkCc1twnCwu6DDP0RATs=/https://s2.glbimg.com/asbmKkiJWYDtFQOO3NwDy9JV8Lg=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2023/l/F/nDtnDAStuf63KcefYvZg/2023-3595-to-ryca-2-poster.jpg',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18MevzTXsHT1LBo0GU8khEi_ju19nObCFwDsQFAQO_tzW0IK48nd0lVxg&s=10',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://www.cuponomia.com.br/blog/wp-content/uploads/2018/03/Zerando-a-Vida-2016-700x993.jpg',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMH9sU_1G31kp36K3QlcEGi8V7IXSPE_VPYJMttDaAU-hyODAnmrIpeZvF&s=10',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-00415-c9ec80d9539e1cff9d17181997126323-480-0.webp',
          }}
          style={styles.capa}
        />
      </ScrollView>

      <Text style={styles.categoria}>🔥 Ação</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          source={{
            uri: 'https://s2-globo-play.glbimg.com/q1KkHZX6n48TLnOkiwamrUs0IBg=/362x536/https://s2-globo-play.glbimg.com/9cttVxjRYBwoAUB1Ri_tXYN2wCQ=/https://s2.glbimg.com/HC1JJA1dKOGXjTHvwfmZFUwEE0k=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2025/F/n/BIm47PSF6w25r4DURDHg/11827243-poster.jpg',
          }}
          style={styles.capa}
        />

        <Image
          source={{
            uri: 'https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-04261-45f17dc633e7e6e48f17510255493237-480-0.webp',
          }}
          style={styles.capa}
        />

        <Image
          source={{
            uri: 'https://atribunarj.com.br/uploads/FILES/destacadas/04-04-2025-alarum.webp',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGo8RpPDAYgW0gWitKvAD1MV8-S1pyfVCJwPiMyBJJrcxEW8UlM3_0j6A&s=10',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsYelgJqR6cxNrd_5tyQFBgCewwnQNeMFBOpFO2UNmhSUalwCXNNsDwg&s=10',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://www.papodecinema.com.br/wp-content/uploads/2024/12/20241218-de-volta-a-acao-papo-de-cinema-cataz.webp',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-00817-14a150b144e05b4fd517181977119354-480-0.webp',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGC29VyyY_LdJx3h1qsyYn6rPOTONWp2SUlecV2Yri0BVpJOo2yD2_YlMI&s=10',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-01453-c769aa68ceb77bc76117181325192091-480-0.webp',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98K550zeD_XLp_TdHX0f8se_GJMoqp7V3sb9hU7CJsuV2q1Gv-QqHZfIt&s=10',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://ingresso-a.akamaihd.net/prd/img/movie/mestres-do-universo/66ee5705-10e2-41cd-a864-ef8d6cae5b26.webp',
          }}
          style={styles.capa}
        />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFLkSM6-sxFBsnst_bpuyv0ykPaHPj8p5j6O1_-gPMbdYGd0nq1sAzNv6b&s=10',
          }}
          style={styles.capa}
        />
    
      </ScrollView>

      <Text style={styles.categoria}>😱 Terror</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          source={{
            uri: 'https://mediaprd.adrenalinapura.com/wp-content/uploads/2025/09/26143512/TEXASCHAINSAW3D_2013_TT1572315_M_Poster_pt-BR.png',
          }}
          style={styles.capa}
        />

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5Tg71zj6kykcCaxA1xQO7RhLptUwybTJ7NbQzsSHVPGfQ2cHZH0nyNE&s=10',
          }}
          style={styles.capa}
        />

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwraWeTKwoUHKL3GHlrhFZdh-TLp7o7vtvzh0dIWNAU1mcod4hS-M3t7s&s=10',
          }}
          style={styles.capa}
        />
           <Image
          source={{
            uri: 'https://artegeek.cdn.app.br/wp-content/uploads/2026/01/18221221/terror-em-silent-hill-regresso-para-o-inferno-cartaz.webp',
          }}
          style={styles.capa}
        />
           <Image
          source={{
            uri: 'https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2025/03/cropped-premonicao.jpg',
          }}
          style={styles.capa}
        />
           <Image
          source={{
            uri: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/04/halloween.jpg',
          }}
          style={styles.capa}
        />
           <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_kQbwC9Yax2HIgYGpsfpvFiu-pTtBx8cqJlA7ykcOG26awctQLeTct3Q&s=10',
          }}
          style={styles.capa}
        />
         <Image
          source={{
            uri: 'https://i.pinimg.com/474x/b2/67/ab/b267ab8b27259a9a4199712ab6261816.jpg',
          }}
          style={styles.capa}
        /> <Image
        source={{
          uri: 'https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-03999-71a12a69831a56130a17359289050338-480-0.webp',
        }}
        style={styles.capa}
      /> <Image
      source={{
        uri: 'https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-03871-2e82e764361f1dabc317283253447152-480-0.webp',
      }}
      style={styles.capa}
    /> <Image
    source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9TkEuybeSUlmdCCCKiO-8e4KkpHFjPmSaNQHDEK0ag&s=10',
    }}
    style={styles.capa}
  />
        <var>   <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUPav0SxoFCx5b_lb0AaHTHQSqZk1nonv6MFdAiLv82B8yd3-IyJ8YJqE&s=10',
          }}
          style={styles.capa}
        />
        <var><var>   <Image
      
        /></var></var></var>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },

  logo: {
    color: '#E50914',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 15,
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
    height: 220,
    alignSelf: 'center',
    borderRadius: 12,
    marginBottom: 20,
  },

  categoria: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  },

  capa: {
    width: 140,
    height: 210,
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 25,
  },
  filmeContainer: {
    position: 'relative',
  },
  
  info: {
    position: 'absolute',
    bottom: 25,
    left: 15,
    width: 140,
    backgroundColor: 'rgba(0,0,0,0.9)',
    padding: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  
  nome: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  
  detalhes: {
    color: '#ddd',
    fontSize: 12,
  },
});