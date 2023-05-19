import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const postHeaderItem = ({ item }) => (
<View style={styles.post_header_item}>
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<Text style={styles.user_name}>{item.user_name}</Text>
<Image
    style={styles.menu}
    source={{uri: item.menu}}
   />
</View>
  );

const PostHeader = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.post_header}
    data={item}
    renderItem={postHeaderItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default PostHeader;

const styles = StyleSheet.create({
    \"user_image\": {
        \"width\": \"100vw\",
        \"height\": \"100vw\",
        \"marginTop\": 5
    },
    \"user_name\": {
        \"color\": \"hsl(274,100%,60%)\",
        \"fontSize\": 15,
        \"fontWeight\": \"400\",
        \"paddingHorizontal\": 10,
        \"paddingTop\": 5
    },
    \"menu\": {
        \"width\": \"10vw\",
        \"height\": \"10vw\",
        \"margin\": 5
    }
});