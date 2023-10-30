/*
Implement an indexer class with the following characteristics:
- takes a list of sentences as input into its constructor
- has a method named "search" 
  -- takes a word as a parameter and returns a list of the sentences that contain the word

The expected usage pattern is that this class will be instantiated once 
  with a list of sentences, and that search will be called many times.
*/

/* Implementation */
class Indexer {
    sentences;
    searchMap;
  
    constructor(sentences, preMap = false) {
      this.sentences = sentences;
      this.searchMap = new Map();
  
      if (preMap) this.preMapSentences();
    }
    
    preMapSentences() {
        this.sentences.forEach(sentence => {
        const sentenceWords = this.parseSentence(sentence);

        sentenceWords.forEach(sentenceWord => {
            const result = this.searchMap.get(sentenceWord);
            this.searchMap.set(sentenceWord, [...result || [], sentence] )
        })
      })
    }

    // return the sentences that contain the word
    search(word) {
      if (this.preMap) return this.searchMap.get(word);

      return this.sentences.filter(sentence => {
        const splittedWords = this.parseSentence(sentence);
        return splittedWords.some(sWord => sWord === word);
      });
    }
  
    // helper method - turn a sentence into a list of words
    parseSentence(sentence) {
      return sentence.split(" ");
    }
  }
  
  /* Usage */
  const sentences = [
    "aaa bbb ccc",
    "aaa ccc ddd",
    "bbb ccc bbb",
    "ccc ddd eee"
  ];
  
  const bruteForceIndexer = new Indexer(sentences);

  console.time('BruteForceSearch');
  const bruteForceSearchResults = bruteForceIndexer.search("aaa");
  console.timeEnd('BruteForceSearch');
  console.log(bruteForceSearchResults);

  const optimalIndexer = new Indexer(sentences, true);

  console.time('Search');
  const searchResults = optimalIndexer.search("aaa");
  console.timeEnd('Search');
  console.log(searchResults);
  /*
  Expecting `indexer.search("aaa");` to yield: 
  ["aaa bbb ccc","aaa ccc ddd"]
  */
  
  // Able to call search many times...
  // results = indexer.search("aaa");
  // results = indexer.search("aaa");
  // console.log(results);
  
  