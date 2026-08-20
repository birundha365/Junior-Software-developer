import java.util.Scanner;

public class rev {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = scan.nextInt();

        // Even or Odd
        if (num % 2 == 0) {
            System.out.println("Even Number" );
        } else {
            System.out.println("Odd Number");
        }

      /*  // Count and Reverse
        int temp = num;
        int count = 0;
        int reverse = 0;

        while (temp != 0) {
            int rem = temp % 10;
            reverse = reverse * 10 + rem;
            temp = temp / 10;
            count++;
        }

        System.out.println("Count of Digits = " + count);
        System.out.println("Reverse Number = " + reverse);

        // Print Even Numbers
        System.out.println("Even Numbers:");
        for (int i = 2; i <= num; i += 2) {
            System.out.print(i + " ");
        }

        System.out.println();

        // Print Odd Numbers
        System.out.println("Odd Numbers:");
        for (int i = 1; i <= num; i += 2) {
            System.out.print(i + " ");
        } */
    }
}
