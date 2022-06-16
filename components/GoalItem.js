import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() =>
          props.setCourseGoals((prevState) =>
            prevState.filter((goal) => goal.id !== props.item.id)
          )
        }
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
    pressedItem: {
      opacity: 0.5
    },
  goalText: { color: "#ddd", padding: 8 },
});

export default GoalItem;
