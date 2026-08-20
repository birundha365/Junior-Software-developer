import java.util.Scanner;

public class demo{
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.println("Enter N value");
        long n = scan.nextLong();

        long r;
        String even = "";
        String odd = "";
        int evenCount = 0;
        int oddCount = 0;

        while (n != 0) {

            r = n % 10;
            n = n / 10;

            if (r % 2 == 0) {
                even = r + even;
                evenCount++;
            } else {
                odd = r + odd;
                oddCount++;
            }
        }

        System.out.println("Even number: " + even);
        System.out.println("Odd number: " + odd);
        System.out.println("Even number count: " + evenCount);
        System.out.println("Odd number count: " + oddCount);

        scan.close();
    }
}