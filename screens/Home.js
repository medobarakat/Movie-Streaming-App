import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  ImageBackground,
  Animated,
} from "react-native";
import { color } from "react-native-reanimated";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  dummyData,
  icons,
  images,
  theme,
  COLORS,
  SIZES,
  FONTS,
} from "../constants";
import { newSeason } from "../constants/dummy";

const Home = ({ navigation }) => {
  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* first icon */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
          }}
          onPress={() => console.log("profile")}
        >
          <Image
            source={images.profile_photo}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </TouchableOpacity>
        {/* screen mirror */}
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
          }}
        >
          <Image
            source={icons.airplay}
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderNewSessionSection() {
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={SIZES.width}
        scrollEventThrottle={16}
        decelerationRate={0}
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}
        data={dummyData.newSeason}
        keyExtractor={(item) => `${item.id}`}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: newSeasonScrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("MovieDetail", { selectedMovie: item })
              }
            >
              <View
                style={{
                  width: SIZES.width,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ImageBackground
                  resizeMode="cover"
                  source={item.thumbnail}
                  style={{
                    width: SIZES.width * 0.85,
                    height: SIZES.width * 0.85,
                    justifyContent: "flex-end",
                  }}
                  imageStyle={{
                    borderRadius: 40,
                  }}
                >
                  <View
                    style={{
                      height: 60,
                      width: "100%",
                      marginBottom: SIZES.radius,
                      paddingHorizontal: SIZES.radius,
                      backgroundColor: COLORS.transparentWhite,
                    }}
                  >
                    {/* playnow */}
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          backgroundColor: COLORS.transparentWhite,
                        }}
                      >
                        <Image
                          source={icons.play}
                          style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.white,
                          }}
                        />
                      </View>
                      <Text
                        style={{
                          marginLeft: SIZES.base,
                          color: COLORS.white,
                          ...FONTS.h3,
                        }}
                      >
                        PlayNow
                      </Text>
                    </View>

                    {/* still watching */}
                    <View></View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      {/* header */}
      {renderHeader()}
      {/* start of content */}
      <ScrollView
        horizontal
        style={{
          paddingBottom: 250,
        }}
      >
        {renderNewSessionSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
