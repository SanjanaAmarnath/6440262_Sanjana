import java.util.Scanner;

public class MethodOverloadingExample {

    // Method to add two integers
    public static int add(int a, int b) {
        return a + b;
    }

    // Method to add two doubles
    public static double add(double a, double b) {
        return a + b;
    }

    // Method to add three integers
    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input for two integers
        System.out.print("Enter two integers (space-separated): ");
        int int1 = scanner.nextInt();
        int int2 = scanner.nextInt();
        System.out.println("Sum of two integers: " + add(int1, int2));

        // Input for two doubles
        System.out.print("Enter two doubles (space-separated): ");
        double double1 = scanner.nextDouble();
        double double2 = scanner.nextDouble();
        System.out.println("Sum of two doubles: " + add(double1, double2));

        // Input for three integers
        System.out.print("Enter three integers (space-separated): ");
        int i1 = scanner.nextInt();
        int i2 = scanner.nextInt();
        int i3 = scanner.nextInt();
        System.out.println("Sum of three integers: " + add(i1, i2, i3));

        scanner.close();
    }
}
