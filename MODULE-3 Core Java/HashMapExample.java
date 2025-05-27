import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        HashMap<Integer, String> studentMap = new HashMap<>();

        System.out.print("How many students do you want to enter? ");
        int count = scanner.nextInt();
        scanner.nextLine(); // Consume newline

        // Adding entries
        for (int i = 0; i < count; i++) {
            System.out.print("Enter student ID (integer): ");
            int id = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            System.out.print("Enter student name: ");
            String name = scanner.nextLine();
            studentMap.put(id, name);
        }

        // Retrieving a name
        System.out.print("\nEnter an ID to look up a student: ");
        int searchId = scanner.nextInt();

        if (studentMap.containsKey(searchId)) {
            System.out.println("Student name: " + studentMap.get(searchId));
        } else {
            System.out.println("Student ID not found.");
        }

        scanner.close();
    }
}
