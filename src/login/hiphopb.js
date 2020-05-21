import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView, Image, } from 'react-native'
import { Video } from 'expo-av';
import { Permissions } from 'expo'


export default class HiphopB extends React.Component {

render () {


return (
<View style={styles.container}>




<iframe width="300" height="300" src="https://www.youtube.com/embed/Uy67yin1ylI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</View>
)
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
marginTop: 30
}
})
