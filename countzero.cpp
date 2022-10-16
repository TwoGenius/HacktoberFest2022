// #include <iostream>
// #include "solution.h"
// using namespace std;

// int main() {
//     int n;
//     cin >> n;
//     cout << countZeros(n) << endl;
// }
int countZeros(int n) {
    if(n<=9){
        if(n == 0)
            return 1 ;
        else
            return 0 ;
    }
    int small=countZeros(n/10);
    int check=n%10;
    if(check==0){
        return small+1;
    }
    else{
        return small;
    }
    
}


