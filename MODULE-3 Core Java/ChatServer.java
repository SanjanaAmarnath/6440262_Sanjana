import java.io.*;
import java.net.*;

public class ChatServer {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(5000)) {
            System.out.println("Server started. Waiting for a client...");

            Socket socket = serverSocket.accept();
            System.out.println("Client connected.");

            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);

            BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));

            String clientMessage, serverMessage;

            while (true) {
                clientMessage = reader.readLine();
                if (clientMessage == null || clientMessage.equalsIgnoreCase("exit")) break;

                System.out.println("Client: " + clientMessage);

                System.out.print("You: ");
                serverMessage = keyboard.readLine();
                writer.println(serverMessage);
                if (serverMessage.equalsIgnoreCase("exit")) break;
            }

            socket.close();
            System.out.println("Chat ended.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
