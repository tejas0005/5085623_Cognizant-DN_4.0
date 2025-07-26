package week1_HandsOn;

public class WordDocumentFactory extends DocumentFactory {
	public Document createDocument() {
		return new WordDocument();
	}
}
