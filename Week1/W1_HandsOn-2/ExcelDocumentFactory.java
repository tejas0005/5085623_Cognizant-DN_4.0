package week1_HandsOn;

public class ExcelDocumentFactory extends DocumentFactory{
	public Document createDocument() {
		return new ExcelDocument();
	}
}
