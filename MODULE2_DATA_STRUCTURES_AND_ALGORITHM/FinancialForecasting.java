public class FinancialForecasting {

    // Recursive method to calculate future value
    public static double forecast(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }

        return forecast(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double presentValue = 10000; // Initial amount
        double growthRate = 0.10;    // 10% annual growth
        int years = 5;

        double futureValue = forecast(presentValue, growthRate, years);

        System.out.printf("Future Value after %d years = %.2f%n",
                          years, futureValue);
    }
}
