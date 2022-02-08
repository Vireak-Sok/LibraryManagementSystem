import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  description: {
    width: '100%',
    padding: 20,
  },
  bold: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  description_txt: {
    textAlign: 'justify',
    lineHeight: 20,
  },
  button: {
    width: '90%',
    backgroundColor: '#00bfff',
    position: 'absolute',
    bottom: 10,
    padding: 10,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  btn_container: {
    alignItems: 'center',
    width: '100%',
  },
  book_title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  book_author: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  outter: {
    paddingBottom: 25,
  },
  available: {
    color: '#00bfff',
  },
  empty: {
    color: 'red',
  },
});

const Book = () => {
  const img_link =
    'https://m.media-amazon.com/images/I/4176ZarK+DL.jpg';
  const book_title =
    'Amazon Unbound: Jeff Bezos and the Invention of a Global Empire';
  const book_author = 'Brad Stone';
  const amount = 2;
  const long_text =
    '**A Washington Post Notable Book** \nThis New York Times best seller is a “masterful” (The Washington Post), “juicy tour of the company [Jeff] Bezos built” (The New York Times Book Review), revealing the most important business story of our time by the best-selling author of The Everything Store. \n' +
    'Almost 10 years ago, Bloomberg journalist Brad Stone captured the rise of Amazon in his best seller The Everything Store. Since then, Amazon has expanded exponentially, inventing novel products like Alexa and disrupting countless industries, while its workforce has quintupled in size and its valuation has soared to nearly two trillion dollars. It’s almost impossible to go a day without encountering the impact of Jeff Bezos’ Amazon, between services like Whole Foods, Prime Video, and Amazon’s cloud computing unit, AWS, plus Bezos’ ownership of The Washington Post. We live in a world run, supplied, and controlled by Amazon and its iconoclast founder. \n' +
    'In Amazon Unbound, Brad Stone presents an “excellent” (The New York Times), deeply reported, vividly drawn portrait of how a retail upstart became of the most powerful and feared entities in the global economy. Stone also probes the evolution of Bezos himself - who started as a geeky technologist totally devoted to building Amazon, but who transformed to become a fit, disciplined billionaire with global ambitions, who ruled Amazon with an iron fist, even as he found his personal life splashed over the tabloids. \n' +
    'Definitive, timely, and “engaging” (Jon Meacham, author of The Soul of America), Stone has provided an unvarnished portrait of a man and company that we couldn’t imagine modern life without.';

  return (
    <View>
      <View style={styles.outter}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={styles.img}
              source={{
                uri: img_link,
              }}
            />
            <Text style={styles.book_title}> " {book_title} " </Text>
            <Text>
              {' '}
              by <Text style={styles.book_author}> {book_author} </Text>
            </Text>
            <Text style={amount > 0 ? styles.available : styles.empty}>
              {' '}
              Available: {amount}
            </Text>
            <View style={styles.description}>
              <Text style={styles.bold}> Description </Text>
              <Text style={styles.description_txt}> {long_text}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity
          style={styles.button}
          // onPress={onPress}
        >
          <Text style={styles.label}>Ask to Borrow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Book;
