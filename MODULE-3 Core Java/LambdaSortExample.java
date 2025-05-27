import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaSortExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();

        // Adding sample names
        names.add("Sanjana");
        names.add("Rahul");
        names.add("Anita");
        names.add("Zara");
        names.add("Kunal");

        System.out.println("Before sorting:");
        for (String name : names) {
            System.out.println(name);
        }

        // Sorting using lambda expression
        Collections.sort(names, (a, b) -> a.compareTo(b));

        System.out.println("\nAfter sorting:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}
