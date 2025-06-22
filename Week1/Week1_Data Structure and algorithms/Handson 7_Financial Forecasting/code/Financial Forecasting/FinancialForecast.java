import java.util.Scanner;

public class FinancialForecast {
    public static double getFutureValue(double presentValue, double rate, int years) {
        if (years == 0) return presentValue;
        return (1 + rate) * getFutureValue(presentValue, rate, years - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter current investment amount: ");
        double presentValue = sc.nextDouble();
        
        System.out.print("Enter expected annual growth rate (in %): ");
        double ratePercent = sc.nextDouble();
        double rate = ratePercent / 100.0;
        
        System.out.print("Enter number of years to forecast: ");
        int years = sc.nextInt();

        double futureValue = getFutureValue(presentValue, rate, years);

        System.out.println("Estimated future value after " + years + " years is: " + String.format("%.2f", futureValue));
    }
}
