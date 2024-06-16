import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import globalStyle from '../../style/globalStyle';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Title = props => {
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Text style={style.title}>{props.title}</Text>
        <TouchableOpacity style={globalStyle.messageMain}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
