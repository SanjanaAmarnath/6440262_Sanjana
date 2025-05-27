import java.util.*;
import java.util.stream.Collectors;

public class StreamEvenNumbersUserInput {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Integer> numbers = new ArrayList<>();

        System.out.print("How many numbers do you want to enter? ");
        int count = scanner.nextInt();

        System.out.println("Enter " + count + " integers:");
        for (int i = 0; i < count; i++) {
            numbers.add(scanner.nextInt());
        }

        // Use Stream API to filter even numbers
        List<Integer> evenNumbers = numbers.stream()
                                           .filter(n -> n % 2 == 0)
                                           .collect(Collectors.toList());

        // Display even numbers
        System.out.println("Even numbers: " + evenNumbers);

        scanner.close();
    }
}
