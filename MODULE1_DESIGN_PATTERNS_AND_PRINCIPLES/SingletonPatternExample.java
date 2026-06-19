public class SingletonPatternExample {

    private static SingletonPatternExample instance;

    private SingletonPatternExample() {
        System.out.println("Logger Instance Created");
    }

    public static SingletonPatternExample getInstance() {
        if (instance == null) {
            instance = new SingletonPatternExample();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("LOG: " + message);
    }

    public static void main(String[] args) {

        SingletonPatternExample logger1 = SingletonPatternExample.getInstance();
        logger1.log("First Message");

        SingletonPatternExample logger2 = SingletonPatternExample.getInstance();
        logger2.log("Second Message");

        if (logger1 == logger2)
            System.out.println("Only one Logger instance exists.");
        else
            System.out.println("Multiple instances created.");

        System.out.println("HashCode of logger1: " + logger1.hashCode());
        System.out.println("HashCode of logger2: " + logger2.hashCode());
    }
}