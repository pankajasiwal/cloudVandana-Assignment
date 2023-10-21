import java.util.Scanner;

public class Pangram {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter String to check Pangram: ");
        String str = input.nextLine();
        System.out.println(str);

        if (checkPangram(str.toLowerCase())) {
            System.out.println("string is Pangram");
        } else {
            System.out.println("string is not Pangram");
        }

        input.close();
    }

    static Boolean checkPangram(String str) {
        int[] checkArr = new int[26];
        // System.out.println(Arrays.toString(checkArr));

        for (int i = 0; i < str.length(); i++) {
            if ((str.charAt(i) >= 96 && str.charAt(i) <= 122)) {
                checkArr[str.charAt(i) - 97] = 1;
            }
            continue;
        }

        for (int i = 0; i < checkArr.length; i++) {
            if (checkArr[i] != 1) {
                return false;
            }
        }
        // System.out.println(Arrays.toString(checkArr));
        return true;
    }
}
