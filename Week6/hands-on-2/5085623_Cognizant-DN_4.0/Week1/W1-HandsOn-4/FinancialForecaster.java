package week1_HandsOn;

public class FinancialForecaster {
	/* 
	 Using simple formula
	 
	 * FV(N)=FV(N-1)*(R+1)
	 * N=years
	 * R= growth rate
	  
	 */
	
	public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue; 
        }
        return calculateFutureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double presentValue = 10000; 
        double growthRate = 0.05;    
        int years = 5;

        double futureValue = calculateFutureValue(presentValue, growthRate, years);
        System.out.println("Present Value: "+presentValue);
        System.out.printf("Future value after %d years = %.2f\n", years, futureValue);
    }

}
