package Week1_HandsOn;

public class Logger {
	private static Logger inst;
	
	private Logger() {
		System.out.println("Logger Instalized");
	}
	public static Logger getInstance() {
		if(inst==null)
			inst=new Logger();
		else
			System.out.println("The instance is not null anymore and L1 and L2 pointing to same instance");
		return inst;
	}
	public void message(String msg) {
		System.out.println("Log: "+msg);
	}
	
}
