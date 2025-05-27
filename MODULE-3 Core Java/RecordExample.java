import java.util.*;
import java.util.stream.Collectors;

// Define a record named Person
record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Person> people = new ArrayList<>();

        System.out.print("How many people do you want to enter? ");
        int count = scanner.nextInt();
        scanner.nextLine(); // consume leftover newline

        for (int i = 0; i < count; i++) {
            System.out.print("Enter name: ");
            String name = scanner.nextLine();

            System.out.print("Enter age: ");
            int age = scanner.nextInt();
            scanner.nextLine(); // consume newline

            people.add(new Person(name, age));
        }

        // Display all persons
        System.out.println("\nAll people:");
        people.forEach(System.out::println);

        // Filter people aged 18 and above
        List<Person> adults = people.stream()
                                    .filter(p -> p.age() >= 18)
                                    .collect(Collectors.toList());

        System.out.println("\nAdults (age 18 and above):");
        adults.forEach(System.out::println);

        scanner.close();
    }
}
