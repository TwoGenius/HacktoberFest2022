// #include <iostream>
// #include "solution.h"
// using namespace std;

// int main() {
//    int n;
//    cin >> n;
//    cout << sumOfDigits(n) << endl;
// }
int sumOfDigits(int n) {
    if(n==0){
        return 0;
    }
    int small=sumOfDigits(n/10);
    return small + n%10;

}


