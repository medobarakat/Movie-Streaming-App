import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { ProgressBar } from "../components";
import { COLORS, SIZES, FONTS, icons } from "../constants";
const MovieDetail = ({ navigation, route }) => {
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  React.useEffect(() => {
    let { selectedMovie } = route.params;
    setSelectedMovie(selectedMovie);
  }, []);

  function renderHeaderBar() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: Platform.OS === "ios" ? 40 : 20,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* back */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 20,
            backgroundColor: COLORS.transparentBlack,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.left_arrow}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>

        {/* share */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 20,
            backgroundColor: COLORS.transparentBlack,
          }}
          onPress={() => console.log("Shared")}
        >
          <Image
            source={icons.upload}
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderHeaderSection() {
    return (
      <ImageBackground
        source={selectedMovie?.details?.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          {renderHeaderBar()}
        </View>
      </ImageBackground>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: COLORS.black }}
      style={{ backgroundColor: COLORS.black }}
    >
      {renderHeaderSection()}
    </ScrollView>
  );
};

export default MovieDetail;
