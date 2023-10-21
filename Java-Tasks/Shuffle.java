import java.util.Arrays;
import java.util.Random;

public class Shuffle {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };

        shuffleArray(arr, arr.length);

        System.out.print(Arrays.toString(arr));
    }

    static void shuffleArray(int[] arr, int length) {
        Random randomObj = new Random();

        for (int i = 0; i < length; i++) {
            int randomNumber = randomObj.nextInt(length);

            int temp = arr[randomNumber];
            arr[randomNumber] = arr[i];
            arr[i] = temp;
        }
    }
}