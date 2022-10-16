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
    
//     int x;
    
//     cin >> x;
    
//     cout << firstIndex(input, n, x) << endl;

// }
int firstIndex(int input[], int size, int x) {
    if(x==input[0]){
        return 0;
    }
    if(size==0){
        return -1;
    }
    int small=firstIndex(input+1,size-1,x);
    if(small==-1){
        return small;
    }
    else{
        return small+1;
    }
}


