// [id] => square brackets means that this path is a dynamic route.

import { StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

// themed components
import ThemedText from "../../../components/ThemedText";
import ThemedButton from "../../../components/ThemedButton";
import ThemedView from "../../../components/ThemedView";
import Spacer from "../../../components/Spacer";
import ThemedCard from "../../../components/ThemedCard";
import { useBooks } from "../../../hooks/useBooks";
import { useEffect, useState } from "react";
import ThemedLoader from "../../../components/ThemedLoader";

const BookDetails = () => {
  const [book, setBook] = useState(null);

  const { id } = useLocalSearchParams();
  const { fetchBookById, deleteBook } = useBooks();

  const handleDelete = async () => {
    await deleteBook(id);
    setBook(null);
    router.replace("/books");
  };

  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id);
      setBook(bookData);
    }

    loadBook();
  }, [id]);

  if (!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }

  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>

      <ThemedButton onPress={handleDelete} style={styles.delete}>
        <ThemedText style={{ color: "#fff", textAlign: "center" }}>
          Delete Book
        </ThemedText>
      </ThemedButton>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
});
