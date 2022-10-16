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
    
//     cout << lastIndex(input, n, x) << endl;

// }
int lastIndex(int input[], int size, int x) {
    if(size==0){
        return -1;
    }
    int small=lastIndex(input+1,size-1,x);
    if(small==-1){
        if(input[0]==x){
            return 0;
        }
        else{
            return small;
        }
    }
    else{
        return small+1;
    }    
}
