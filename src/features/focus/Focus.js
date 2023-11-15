import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import {fontSizes,spacing} from "../../../utils/sizes";
import {colors} from "../../../utils/colors";

export const Focus = ({ addSubject }) => {
  const [subject,setSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What do you want to Focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={55}
            title="🔍"
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:0.5,
  },
  innerContainer: {
    flex:0.6,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.xl,
    alignItems:'center',
  },
  inputContainer: {
    paddingTop: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
