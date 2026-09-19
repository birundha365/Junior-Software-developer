package databasework;
import java.sql.*;
import java.util.Scanner;
public class Prgm2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan=new Scanner(System.in);
		System.out.println("Enter rno name mark:");
		int rno=scan.nextInt();
		String sname=scan.next();
		float mark=scan.nextFloat();
		
		
        try {
        Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("driver accepted");
		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/jsd","root","12345");
		System.out.println("Connection Success");
		
		//---insert data
		Statement st=con.createStatement();
		int res=st.executeUpdate("insert into student values("+rno+",'"+sname+"',"+mark+")");
		if(res==1)
		{
			System.out.println("Successfully inserted");
		}
		else
		{
			System.out.println("not inserted");
		}
			
		
		//------data retrive from mysql table name: student
		
		
		 st.close(); con.close();
	}
    catch(Exception e)
        {
    	System.out.println("Error Reason:"+e.toString());
        } 
}
}
