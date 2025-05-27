import java.io.*;
import java.net.*;

public class ChatClient {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 5000)) {
            System.out.println("Connected to server.");

            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));

            String serverMessage, clientMessage;

            while (true) {
                System.out.print("You: ");
                clientMessage = keyboard.readLine();
                writer.println(clientMessage);
                if (clientMessage.equalsIgnoreCase("exit")) break;

                serverMessage = reader.readLine();
                if (serverMessage == null || serverMessage.equalsIgnoreCase("exit")) break;

                System.out.println("Server: " + serverMessage);
            }

            System.out.println("Chat ended.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
