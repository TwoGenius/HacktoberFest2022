// #include <iostream>
// #include "solution.h"
// using namespace std;

// int main() {
//     int m, n;
//     cin >> m >> n;
//     cout << multiplyNumbers(m, n) << endl;
// }
int multiplyNumbers(int m, int n) {
    if(n==0){
        return 0;
    }
    int small=multiplyNumbers(m,n-1);
    return small+m;
}


