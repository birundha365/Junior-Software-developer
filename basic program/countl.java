import java.util.Scanner;
public class countl{
        public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter your Gmail:");
        String text = scan.next();
        int alphcnt=0;
        int numcnt=0;
        int dotcnt=0;
        int len = text.length();
        for(int i=0;i<len;i++)
        {
            char c= text.charAt(i);
            if(c>='a' && c<='z')
              alphcnt++;
            if(c>='0' && c<='9')
              numcnt++;
            if(c=='.')
              dotcnt++;
            if(c=='@')
                break;
        }
        System.out.println("Alphabets count is:"+ alphcnt);
        System.out.println("Numbers count is:"+ numcnt);
        System.out.println("Dot count is:"+ dotcnt);
        scan.close();
        }
        }
    


