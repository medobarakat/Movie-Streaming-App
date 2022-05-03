import { View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import React from "react";

const Profiles = ({ profiles }) => {
  return (
    <View>
      <Text>Profiles</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.black,
  },
});
export default Profiles;
