import java.util.Scanner;
public class hello{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name:");
        String n=sc.next();
        int len=n.length();
        int dec=--len;
        for(int i=0;i<len/2+1;i++)
        {
            System.out.print(n.charAt(i)+""+n.charAt(dec--));
        }
        scan.close();
    }
}
