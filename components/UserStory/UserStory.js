import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import PropType from 'prop-types';
import style from './style';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={props.profileImage} />
      </View>
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.prototype = {
  firstName: PropType.string.isRequired,
  profileImage: PropType.object.isRequired,
};

export default UserStory;
