import java.util.Scanner;

public class DataTypeDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Read int
        System.out.print("Enter an integer (int): ");
        int age = scanner.nextInt();

        // Read float
        System.out.print("Enter a float (float): ");
        float height = scanner.nextFloat();

        // Read double
        System.out.print("Enter a double (double): ");
        double weight = scanner.nextDouble();

        // Read char
        System.out.print("Enter a character (char): ");
        char grade = scanner.next().charAt(0);

        // Read boolean
        System.out.print("Enter a boolean (true/false): ");
        boolean isStudent = scanner.nextBoolean();

        // Display the values
        System.out.println("\nYou entered:");
        System.out.println("Integer (int) value: " + age);
        System.out.println("Float (float) value: " + height);
        System.out.println("Double (double) value: " + weight);
        System.out.println("Character (char) value: " + grade);
        System.out.println("Boolean (boolean) value: " + isStudent);

        scanner.close();
    }
}
