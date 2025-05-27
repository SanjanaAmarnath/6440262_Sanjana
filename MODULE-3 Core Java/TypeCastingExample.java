import java.util.Scanner;

public class TypeCastingExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Read a double from the user and cast it to int
        System.out.print("Enter a decimal (double) value: ");
        double decimalValue = scanner.nextDouble();
        int intValue = (int) decimalValue; // Narrowing cast
        System.out.println("After casting to int: " + intValue);

        // Read an int from the user and cast it to double
        System.out.print("Enter an integer value: ");
        int wholeNumber = scanner.nextInt();
        double convertedDouble = (double) wholeNumber; // Widening cast
        System.out.println("After casting to double: " + convertedDouble);

        scanner.close();
    }
}
