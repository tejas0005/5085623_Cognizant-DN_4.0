package week1_HandsOn;

public class TestFactoryPattern {
	public static void main(String[] args) {
		
		DocumentFactory WordFact=new WordDocumentFactory();
		Document word=WordFact.createDocument();
		word.open();
		
		DocumentFactory PdfFact=new PdfDocumentaryFactory();
		Document pdf=PdfFact.createDocument();
		pdf.open();
		
		DocumentFactory ExcelFact=new ExcelDocumentFactory();
		Document excel=ExcelFact.createDocument();
		excel.open();
		
		
	}

}
