import java.sql.*;

public class CreateDB {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db";

        String createTable = "CREATE TABLE IF NOT EXISTS students (" +
                             "id INTEGER PRIMARY KEY," +
                             "name TEXT NOT NULL," +
                             "grade REAL);";

        String insertData = "INSERT INTO students (name, grade) VALUES " +
                            "('Alice', 85.0), ('Bob', 90.5), ('Charlie', 78.2);";

        try (Connection conn = DriverManager.getConnection(url);
             Statement stmt = conn.createStatement()) {

            stmt.execute(createTable);
            stmt.execute(insertData);
            System.out.println("Database and table created successfully.");

        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
