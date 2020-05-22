import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView, Image, } from 'react-native'
import { Video } from 'expo-av';
import { Permissions } from 'expo'


export default class HiphopI extends React.Component {

render () {


return (
<View style={styles.container}>




<iframe width="560" height="315" src="https://www.youtube.com/embed/fdPEO599wVg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
