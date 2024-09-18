
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CommentScreen() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const sampleComments = [
      { id: '1', text: 'Harika bir gönderi!', user: 'kullanici1' },
      { id: '2', text: 'Teşekkür ederim!', user: 'kullanici2' },
    ];
    setComments(sampleComments);
  }, []);

  const handleAddComment = () => {
    const newCommentObject = { id: String(comments.length + 1), text: newComment, user: 'kullanici1' };
    setComments([...comments, newCommentObject]);
    setNewComment('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.commentContainer}>
      <Text style={styles.username}>{item.user}</Text>
      <Text style={styles.commentText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Yorumlar</Text>
      <FlatList data={comments} renderItem={renderItem} keyExtractor={(item) => item.id} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Yorumunuzu yazın..."
          value={newComment}
          onChangeText={setNewComment}
          style={styles.commentInput}
        />
        <TouchableOpacity onPress={handleAddComment} style={styles.commentButton}>
          <Text style={styles.commentButtonText}>Yorum Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  commentContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    paddingHorizontal: 10,
  },
  commentButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  commentButtonText: {
    color: 'white',
    fontSize: 14,
  },
});
    