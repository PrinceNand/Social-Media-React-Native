import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import style from './style';
import globalStyle from '../../style/globalStyle';
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
