#include<bits/stdc++.h>
using namespace std;


bool isPalindrome(string s, int i, int j){
    while(i < j){
        if(s[i] != s[j]){
            return false;
        }else{
            i++; j--;
        }
    }
    return true;
}
  
int longestPalindrome(string s) {
       int max_len =0;
       int startingI =0;
       int cnt =0;
       int n = s.length();
       for(int i=0; i<n; i++){
           for(int j=i; j< n; j++){
               if(isPalindrome(s, i, j)){
                   if(j-i +1 > max_len){
                       max_len = j-i +1;
                       startingI = i;
                // cnt++;

                   }
               }
           }
       }

    // return s.substr(startingI, max_len);
    // return cnt;
    if(s.substr(startingI, max_len).length()>=0){
        ++cnt;
    }
    return cnt;
    }
int main()
{
    string target = "abcdfs";
    cout<<longestPalindrome(target); // 2 
    // cout<<target.substr(0,0).length();
    cout<<endl;
    return 0;
}