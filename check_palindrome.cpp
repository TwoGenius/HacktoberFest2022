// #include <iostream>
// #include "solution.h"
// using namespace std;

// int main() {
//     char input[50];
//     cin >> input;
    
//     if(checkPalindrome(input)) {
//         cout << "true" << endl;
//     }
//     else {
//         cout << "false" << endl;
//     }
// }
#include<cstring>
bool check(char input[],int s, int e){
    if(s>=e){
        return true;
    }
    if(input[s]!=input[e]){
        return false;
        check(input,s+1,e-1);
    }
    
}
bool checkPalindrome(char input[]) {
    int k=strlen(input);
    check(input,0,k-1);
}


