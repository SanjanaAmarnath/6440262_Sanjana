import java.util.Scanner;

// Define custom exception
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Enter your age: ");
            int age = scanner.nextInt();

            // Throw custom exception if age < 18
            if (age < 18) {
                throw new InvalidAgeException("Age must be 18 or older.");
            }

            System.out.println("Age accepted: " + age);

        } catch (InvalidAgeException e) {
            System.out.println("InvalidAgeException caught: " + e.getMessage());
        }

        scanner.close();
    }
}
