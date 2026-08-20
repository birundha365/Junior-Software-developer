import java.util.Scanner;

public class reversenum{
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.println("Enter N value");
        long n = scan.nextLong();

        long r;
        long reverse = 0;

        while (n != 0) {

            r = n % 10;
            n = n / 10;

            reverse = reverse * 10 + r;
        }

        System.out.println("Reverse number: " + reverse);

        scan.close();
    }
}
