import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React from "react";
import Header from "../Components/Header";
import { AntDesign } from "@expo/vector-icons";
import Bookcard from "../Components/Bookcard";
import BookSmallCard from "../Components/BookSmallCard";
import book from "../assets/book.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import pic from "../assets/book.jpg";

export default function Libarary({ navigation }) {
  const data = [
    {
      id: "1",
      title: "Whispers of the Enchanted Forest",
      image: pic,
      discription:
        "Follow the magical journey of a young protagonist as they uncover the secrets of an ancient enchanted forest, where mystical creatures and hidden treasures await.",
    },
    {
      id: "2",
      title: "Chronicles of the Starlight Galaxy",
      image: book2,
      discription:
        "Embark on an epic space adventure across distant galaxies, where brave explorers and alien civilizations clash in a cosmic battle for survival and knowledge.",
    },
    {
      id: "3",
      title: "The Forgotten Key",
      image: book3,
      discription:
        "In this gripping mystery thriller, a detective is determined to unlock the secrets of a long-forgotten key that holds the key to solving a series of baffling crimes.",
    },
    {
      id: "4",
      title: "Beyond the Horizon",
      image: book,
      discription:
        "Set sail with a fearless group of adventurers on a perilous quest to explore uncharted waters and discover the fabled lands that lie beyond the horizon.",
    },
    {
      id: "5",
      title: "Eternal Embrace",
      image: book3,
      discription:
        " Lose yourself in a timeless romance that transcends generations, as two souls find each other again and again throughout the ages, bound by an eternal embrace.",
    },
    {
      id: "6",
      title: "Whispers in the Dark",
      image: book2,
      discription:
        "Enter a spine-chilling realm of haunted houses and malevolent spirits, where a group of intrepid investigators must face their deepest fears to confront the darkness within.",
    },
    {
      id: "7",
      title: "Silent Symphony",
      image: book2,
      discription:
        "Immerse yourself in the mesmerizing tale of a prodigious musician who communicates emotions and stories through the enchanting melodies of a silent symphony.",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="  Search"
            cursorColor={"red"}
          />
          <View style={styles.box}>
            <AntDesign name="search1" size={24} color="black" />
          </View>
        </View>

        <View style={styles.catagorybox}>
          <Text style={styles.title}>popular choices</Text>
          <View style={styles.cardcontainer}>
            <FlatList
              data={data}
              renderItem={(item) => (
                <Bookcard name={item.id} images={item.item.image} />
              )}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>
        <View style={styles.recomandedbookscontainer}>
          <View style={styles.inlinetitle}>
            <Text style={styles.title}>Recomanded Books</Text>
          </View>
          <View style={styles.bookcontainer}>
            <FlatList
              data={data}
              renderItem={(item) => (
                <BookSmallCard
                  image={item.item.image}
                  discription={item.item.discription}
                  name={item.item.title}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",

    alignItems: "center",

    display: "flex",
  },
  body: {
    flex: 1,
    width: "100%",
  },
  cardcontainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
  },
  search: {
    height: 120,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "rgb(229, 229, 229)",
    borderRadius: 10,
  },
  box: {
    width: 50,
    height: 50,

    alignItems: "center",
    justifyContent: "center",
    marginLeft: -50,
  },
  catagorybox: {
    height: 300,
  },
  title: {
    fontSize: 20,
  },
  recomandedbookscontainer: {
    flex: 1,
    alignItems: "center",
  },
  inlinetitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bookcontainer: {
    width: "100%",
    display: "flex",

    alignItems: "center",
  },
});
