import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const Title = props => {
  return (
    <SafeAreaView>
      <Text style={style.title}>{props.title}</Text>
    </SafeAreaView>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
