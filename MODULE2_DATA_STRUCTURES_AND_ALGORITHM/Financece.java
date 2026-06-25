import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return "ID: " + productId +
               ", Name: " + productName +
               ", Category: " + category;
    }
}

public class Financece {

    // Linear Search
    public static Product linearSearch(Product[] products, int id) {
        for (Product p : products) {
            if (p.productId == id) {
                return p;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int id) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == id) {
                return products[mid];
            } else if (products[mid].productId < id) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(103, "Laptop", "Electronics"),
            new Product(101, "Mobile", "Electronics"),
            new Product(105, "Shoes", "Fashion"),
            new Product(102, "Watch", "Accessories"),
            new Product(104, "Bag", "Fashion")
        };

        int searchId = 104;

        // Linear Search
        Product result1 = linearSearch(products, searchId);
        System.out.println("Linear Search Result:");
        System.out.println(result1 != null ? result1 : "Product Not Found");

        // Sort array for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        // Binary Search
        Product result2 = binarySearch(products, searchId);
        System.out.println("\nBinary Search Result:");
        System.out.println(result2 != null ? result2 : "Product Not Found");
    }
}
