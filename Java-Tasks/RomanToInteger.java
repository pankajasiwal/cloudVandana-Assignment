import java.util.Scanner;

public class RomanToInteger {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter your Roman Number: ");
        String romanNumber = input.next();

        int integerNumber = converter(romanNumber);
        System.out.println(integerNumber);

        input.close();
    }

    static int converter(String num) {
        String number = num.toUpperCase();
        int result = 0;

        for (int i = 0; i < number.length(); i++) {
            int val1 = respValue(number.charAt(i));

            if (i + 1 < number.length()) {
                int val2 = respValue(number.charAt(i + 1));

                if (val1 < val2) {
                    result += val2 - val1;
                    i += 1;
                } else {
                    result += val1;
                }
            } else {
                result += val1;
            }
        }

        return result;
    }

    static int respValue(char ch) {
        if (ch == 'I')
            return 1;
        if (ch == 'V')
            return 5;
        if (ch == 'X')
            return 10;
        if (ch == 'L')
            return 50;
        if (ch == 'C')
            return 100;
        if (ch == 'D')
            return 500;
        if (ch == 'M')
            return 1000;
        return -1;
    }
}
