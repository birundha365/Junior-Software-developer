import java.util.Scanner;
public class oper{
    public static void main(String[] args){
        Scanner scan=new Scanner(System.in);
        System.out.println("Enter N value");
        long n=scan.nextLong();
        long r,s=0;
        while (n!=0)
          {
            r=n%10;
            n=n/10;
            s=s+r;
          }
          System.out.println("Sum of digits:"+s);
          scan.close();
    }
}