package week1_HandsOn;

import java.util.*;

class Product {
	
 private int productId;
 private String productName;
 private String category;

 public Product(int productId, String productName, String category) {
     this.productId=productId;
     this.productName=productName;
     this.category=category;
 }

 public int getProductId() {
     return productId;
 }

 public String getProductName() {
     return productName;
 }

 public String getCategory() {
     return category;
 }

 @Override
 public String toString() {
     return "ProductID: " + productId + ", Name: " + productName + ", Category: " + category;
 }
}


class SearchUtility {
 public static Product linearSearch(Product[] products, String productName) {
     for (Product product : products) {
         if (product.getProductName().equalsIgnoreCase(productName)) {
             return product;
         }
     }
     return null;
 }
 public static Product binarySearch(Product[] products, String productName) {
     int left = 0, right = products.length - 1;
     while (left <= right) {
         int mid = (left + right) / 2;
         int comparison = products[mid].getProductName().compareToIgnoreCase(productName);

         if (comparison == 0) return products[mid];
         else if (comparison < 0) left = mid + 1;
         else right = mid - 1;
     }
     return null;
 }

 public static void sortByName(Product[] products) {
     Arrays.sort(products, Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));
 }
}

public class SearchTest {
	public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "T-shirt", "Clothing"),
            new Product(103, "Smartphone", "Electronics"),
            new Product(104, "Book", "Education"),
            new Product(105, "Shoes", "Footwear")
        };
        System.out.println("Search for book: ");

        Product result1 = SearchUtility.linearSearch(products, "Book");
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));
        
        SearchUtility.sortByName(products);
        Product result2 = SearchUtility.binarySearch(products, "Book");
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}
