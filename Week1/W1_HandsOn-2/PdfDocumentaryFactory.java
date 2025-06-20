package week1_HandsOn;

public class PdfDocumentaryFactory extends DocumentFactory{
	public Document createDocument() {
		return new PdfDocument();
	}
}
