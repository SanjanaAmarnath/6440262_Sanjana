import java.util.Scanner;

public class Car {
    // Attributes
    String make;
    String model;
    int year;

    // Constructor
    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display car details
    public void displayDetails() {
        System.out.println("Car Make: " + make);
        System.out.println("Car Model: " + model);
        System.out.println("Year: " + year);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Read first car details
        System.out.println("Enter details for Car 1:");
        System.out.print("Make: ");
        String make1 = scanner.nextLine();
        System.out.print("Model: ");
        String model1 = scanner.nextLine();
        System.out.print("Year: ");
        int year1 = scanner.nextInt();
        scanner.nextLine(); // consume newline

        Car car1 = new Car(make1, model1, year1);

        // Read second car details
        System.out.println("\nEnter details for Car 2:");
        System.out.print("Make: ");
        String make2 = scanner.nextLine();
        System.out.print("Model: ");
        String model2 = scanner.nextLine();
        System.out.print("Year: ");
        int year2 = scanner.nextInt();

        Car car2 = new Car(make2, model2, year2);

        // Display details
        System.out.println("\nDetails of Car 1:");
        car1.displayDetails();

        System.out.println("\nDetails of Car 2:");
        car2.displayDetails();

        scanner.close();
    }
}
