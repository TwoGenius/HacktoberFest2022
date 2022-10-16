// #include<iostream>
// using namespace std;
// int main(){
//     int x, n;
//     cin >> x >> n;
  
//     cout << power(x, n) << endl;
// }
int power(int x, int n) {
    if(n==0){
        return 1;
    }
    int a=power(x,n-1);
    return a*x;
    
}


