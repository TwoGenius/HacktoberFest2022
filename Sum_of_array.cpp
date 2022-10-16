// #include<iostream>
// #include "Solution.h"
// using namespace std;


// int main(){
//     int n;
//     cin >> n;
  
//     int *input = new int[n];
    
//     for(int i = 0; i < n; i++) {
//         cin >> input[i];
//     }
    
//     cout << sum(input, n) << endl;
// }
int sum(int input[], int n) {
    if(n<=0){
        return 0;
    }
    int small = sum(input+1,n-1);
    return small + input[0];

}

