// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cin >> n;
//     print(n);
// }
void print(int n){
    if(n>0){
        print(n-1);
    cout << n << " ";
}
}



