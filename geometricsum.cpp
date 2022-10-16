// #include <iostream>
// #include <math.h>
// #include <iomanip>
// #include "solution.h"
// using namespace std;

// int main() {
//     int k;
//     cin >> k;
//     cout << fixed << setprecision(5);
//     cout << geometricSum(k) << endl;   
// }
#include<cmath>
double geometricSum(int k) {
    if(k==0){
        return 1;
    }
    double small=geometricSum(k-1);
    return small+(1/pow(2,k));
    
}


