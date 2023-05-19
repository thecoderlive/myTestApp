import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const postImagesItem = ({ item }) => (
<View style={styles.post_images_item}>
<Image
    style={styles.post}
    source={{uri: item.post}}
    />
<Image
    style={styles.like}
    source={{uri: item.like}}
   />
<Image
    style={styles.comment}
    source={{uri: item.comment}}
   />
<Image
    style={styles.share}
    source={{uri: item.share}}
   />
<Image
    style={styles.save}
    source={{uri: item.save}}
   />
</View>
  );

const PostImages = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.post_images}
    data={item}
    renderItem={postImagesItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default PostImages;

const styles = StyleSheet.create({
    \"post\": {
        \"width\": \"100vw\",
        \"height\": \"100vw\",
        \"marginTop\": 5
    },
    \"like\": {
        \"width\": \"10vw\",
        \"height\": \"10vw\",
        \"margin\": 5
    },
    \"comment\": {
        \"width\": \"10vw\",
        \"height\": \"10vw\",
        \"margin\": 5
    },
    \"share\": {
        \"width\": \"10vw\",
        \"height\": \"10vw\",
        \"margin\": 5
    },
    \"save\": {
        \"width\": \"10vw\",
        \"height\": \"10vw\",
        \"margin\": 5
    }
});