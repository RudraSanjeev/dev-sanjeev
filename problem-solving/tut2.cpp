#include<iostream>
#include<cmath>
using namespace std;

int solve(int n){
    int find2 =0;
        int find3 =0;
        int carry =0;
        int rem =0;
       
          find2 = n/2;
            find3 = find2/3;
            rem = find2%3;
            cout<<find3<<endl;
            cout<<find2<<endl;
            cout<<rem<<endl;
            int res = pow(3, (4))* (pow(rem, 2));
             return res;
          
}

int main(){
    int n = 15;
    // cout<<solve(n);
    cout<<pow(3, 4);
    return 0;
}