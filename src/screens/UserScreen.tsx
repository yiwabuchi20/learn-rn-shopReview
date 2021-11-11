import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import firebase from "firebase";
import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { UserContext } from "../components/contexts/userContext";
import { Form } from "../components/Form";
import { Loading } from "../components/Loading";
import { updateUser } from "../lib/firebase";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "User">;
  route: RouteProp<RootStackParamList, "User">;
};

export const UserScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState<string>(user?.name);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    setLoading(true);
    const updatedAt = firebase.firestore.Timestamp.now();
    await updateUser(user?.id!, { name, updatedAt });
    setUser({ ...user, name, updatedAt });
    setLoading(false);
  };
  console.log(user);

  return (
    <SafeAreaView style={styles.container}>
      <Form
        value={name}
        label="名前"
        onChangeText={(text) => {
          setName(text);
        }}
      />
      <Button onPress={onSubmit} text="保存する" />
      <Loading visible={loading}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
