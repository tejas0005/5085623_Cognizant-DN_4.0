package Week1_HandsOn;

public class TestLogger {

	public static void main(String[] args) {
		Logger l1=Logger.getInstance();
		l1.message("First message");
		Logger l2=Logger.getInstance();
		l2.message("Second message");
		if(l1==l2) {
			System.out.println("Both l1 and l2 are same Instances");
		}
		else {
			System.out.println("Different Instances Created!");
		}
	}

}

