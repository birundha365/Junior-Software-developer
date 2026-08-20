import java.util.Scanner;

public class spacecount {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String text = scan.nextLine();

        int spaceCount = 0;

        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) == ' ') {
                spaceCount++;
            }
        }

        System.out.println("Number of spaces: " + spaceCount);

        scan.close();
    }
}