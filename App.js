import React from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = React.useState(false);
  const [courseGoals, setCourseGoals] = React.useState([]);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={() => setModalIsVisible(true)}
        />
        <GoalInput
          visible={modalIsVisible}
          setModalIsVisible={setModalIsVisible}
          setCourseGoals={setCourseGoals}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem setCourseGoals={setCourseGoals} item={itemData.item} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
