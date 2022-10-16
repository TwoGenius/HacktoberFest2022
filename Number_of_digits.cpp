// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cin >> n;
  
//     cout << count(n) << endl;
// }
int count(int n){
    if(n==0){
        return 0;
    }
    int small=count(n/10);
    return small+1;

}


