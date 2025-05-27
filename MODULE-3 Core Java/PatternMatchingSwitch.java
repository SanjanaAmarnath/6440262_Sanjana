public class PatternMatchingSwitch {
    
    public static void printType(Object obj) {
        switch (obj) {
            case Integer i -> System.out.println("It's an Integer: " + i);
            case String s -> System.out.println("It's a String: " + s);
            case Double d -> System.out.println("It's a Double: " + d);
            case null -> System.out.println("It's null");
            default -> System.out.println("Unknown type: " + obj);
        }
    }

    public static void main(String[] args) {
        printType(42);
        printType("Hello, Java 21!");
        printType(3.14159);
        printType(true);
        printType(null);
    }
}
