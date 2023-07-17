import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import { Feather } from "@expo/vector-icons";
import Message from "../Components/Message";
import Activites from "../Components/Activites";
import PlanCard from "../Components/PlanCard";

export default function Studentsys() {
  const data = [
    {
      id: "1",
      title:
        " Attention For Every Student Tommorow to ggon 25-jan-2015 we have meeting at 12 Oclock at admin office",
    },
    {
      id: "2",
      title:
        " Attention For eNGINNERING Student Tommorow to ggon 25-jan-2015 we have meeting at 12 Oclock at admin office",
    },
    {
      id: "3",
      title:
        " Attention For rESOURCES Student Tommorow to ggon 25-jan-2015 we have meeting at 12 Oclock at admin office",
    },
    {
      id: "4",
      title:
        " Attention For rESOURCES Student Tommorow to ggon 25-jan-2015 we have meeting at 12 Oclock at admin office",
    },
    {
      id: "5",
      title:
        " Attention For rESOURCES Student Tommorow to ggon 25-jan-2015 we have meeting at 12 Oclock at admin office",
    },
    {
      id: "6",
      title:
        " Attention For rESOURCES Student Tommorow to ggon 25-jan-2015 we have meeting at 12 Oclock at admin office",
    },
    {
      id: "7",
      title:
        " Attention For rESOURCES Student Tommorow to ggon 25-jan-2015 we have meeting at 12 Oclock at admin office",
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.notify}>
          <Feather name="bell" size={24} color="gray" />
          <Message />
        </View>
        <View style={styles.planning}>
          <View style={styles.activity}>
            <Text style={{ fontSize: 19 }}>class Activity Indicator</Text>
            <FlatList
              data={data}
              renderItem={Activites}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.calander}>
            <View style={styles.titles}>
              <Text style={{ fontSize: 16 }}>
                ToDay<Text style={{ color: "gray" }}> 13 Jan</Text>
              </Text>
              <Text style={{ fontSize: 16 }}>All</Text>
            </View>
            <PlanCard />
            <PlanCard />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    alignItems: "center",

    display: "flex",
  },
  body: {
    flex: 1,
    width: "95%",
    marginTop: 10,
  },
  notify: {
    borderRadius: 20,
    display: "flex",
    height: 140,

    width: "100%",
  },
  planning: {
    flex: 1,
    marginTop: 20,
    borderRadius: 40,
    display: "flex",
    alignItems: "center",

    width: "100%",
    padding: 10,
  },
  activity: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: "rgba(227, 227, 227, 3.21)",

    borderRadius: 20,
    display: "flex",
    padding: 10,
    alignItems: "center",
  },

  calander: {
    flex: 1,

    display: "flex",
    alignItems: "center",

    borderRadius: 20,

    width: "100%",
  },
  titles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    width: "100%",
  },
});
