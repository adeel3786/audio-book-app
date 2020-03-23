import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Container, Header, Body, Content, Footer, Left, Button, Icon } from 'native-base';
import { PRIMARY_COLOR, FADE_COLOR, PRIMARY_BACKGROUND_COLOR, PRIMARY_FONT_COLOR } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { updateMedia } from '../actions/media';
import { connect } from 'react-redux';

class BookViewScreen extends Component{

  render(){
    const {title, cover, audios, author, narrator, description} = this.props.navigation.state.params;

    return (
      <Container style={{backgroundColor: PRIMARY_BACKGROUND_COLOR}}>
        <Header transparent iosBarStyle={"light-content"}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.pop()}>
              <Icon name='arrow-back' style={{marginLeft:5, fontSize: 26, color: PRIMARY_FONT_COLOR}}/>
              <Text style={{color: PRIMARY_FONT_COLOR}}> Browse</Text>
            </Button>
          </Left>
          <Body/>
        </Header>
        <Content style={{marginHorizontal: 15}} showsVerticalScrollIndicator={false}>

          <View style={{alignItems: 'center', paddingBottom: 15, marginBottom: 15}}>

            <View style={{
              marginBottom: 20,
              height: 300, width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'}}>
              <Image
                resizeMode={'contain'}
                style={[{height: '100%', width: '100%'}, styles.image]}
                source={{uri: cover}}
                />
            </View>

            <Text style={{color: FADE_COLOR}}>{author}</Text>
            <Text style={{fontSize: 26, marginVertical: 8, color: PRIMARY_FONT_COLOR}}>{title}</Text>

            <Button
              onPress={() => this.props.updateMedia({
                info: {
                  author,
                  title,
                  cover
                },
                mediaList: audios,
                currentlyPlaying: audios[0]
              })}
              style={{backgroundColor: PRIMARY_COLOR, paddingHorizontal: 36, paddingVertical: 10, marginVertical: 10,borderRadius: 30}}>
              <Text style={{color: '#FFF',fontWeight:'bold'}}>PLAY</Text>
            </Button>


          </View>
          <View style={styles.infoRow}>
            <Text style={{color: PRIMARY_FONT_COLOR}}>Download</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Download')} transparent><Ionicons style={{color: PRIMARY_FONT_COLOR}} name="ios-cloud-download" size={26}/></TouchableOpacity>
          </View>

          <View style={styles.infoRow}>
            <Text style={{color: PRIMARY_FONT_COLOR}}>Listening length</Text>
            <Text style={{color: PRIMARY_FONT_COLOR}}>2 hours 32 mins</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={{color: PRIMARY_FONT_COLOR}}>Taped By</Text>
            <Text style={{color: PRIMARY_FONT_COLOR}}>Manjil Tamang</Text>
          </View>

          <View style={{marginBottom: 30}}>
            <Text style={{color: PRIMARY_FONT_COLOR}}>About the book</Text>
            <Text style={{color: FADE_COLOR}}>
              {description}
            </Text>
          </View>

        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
  },
  starWrapper: {
    flexDirection: 'row',
    marginBottom: 8
  },
  starActiveIcon: {
    color: '#feb220',
    margin: 4
  },
  starIcon: {
    color: '#d9d9d9',
    margin: 4
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  }
})

export default connect(null, { updateMedia }) (BookViewScreen);
