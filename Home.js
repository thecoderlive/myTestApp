import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Feed from './Feed'

const Home = () => (
<ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
<Feed item={item.feed}/>
</ScrollView>
)

export default Home;

const styles = StyleSheet.create({

});