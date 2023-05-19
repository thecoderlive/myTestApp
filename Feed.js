import React from 'react'
import { Image, TextInput, TouchableOpacity, Text, View, FlatList, StyleSheet } from 'react-native'

import PostHeader from './PostHeader'
import PostImages from './PostImages'

const feedItem = ({ item }) => (
<View style={styles.feed_item}>
<PostHeader item={item.post_header}/>
<PostImages item={item.post_images}/>
<Text style={styles.post_label}>{item.post_label}</Text>
<Text style={styles.post_description}>{item.post_description}</Text>
<TouchableOpacity>
    <View style={styles.view_comments}>{'View Comments'}</View>
</TouchableOpacity>
<Image
    style={styles.profile_image}
    source={{uri: item.profile_image}}
    />
<TextInput style={styles.comment1} placeholder={'Comment1'} />
</View>
  );

const Feed = ({ item }) => (
<FlatList
    style={styles.feed}
    data={item}
    renderItem={feedItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Feed;

const styles = StyleSheet.create({
    \"post_label\": {
        \"color\": \"hsl(274,100%,60%)\",
        \"fontSize\": 15,
        \"fontWeight\": \"400\",
        \"paddingHorizontal\": 10,
        \"paddingTop\": 5
    },
    \"post_description\": {
        \"fontSize\": 12,
        \"fontWeight\": \"250\",
        \"paddingHorizontal\": 10,
        \"paddingTop\": 5
    },
    \"view_comments\": {
        \"flex\": 1,
        \"padding\": 10,
        \"margin\": 5,
        \"textAlign\": \"center\",
        \"backgroundColor\": \"#1ACDA5\",
        \"color\": \"white\"
    },
    \"profile_image\": {
        \"width\": \"100vw\",
        \"height\": \"100vw\",
        \"marginTop\": 5
    },
    \"comment1\": {
        \"fontSize\": 15,
        \"fontWeight\": \"400\",
        \"padding\": 10,
        \"margin\": 5,
        \"backgroundColor\": \"whitesmoke\",
        \"borderWidth\": 1
    }
});