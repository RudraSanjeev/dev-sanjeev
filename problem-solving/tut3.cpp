#include<iostream>
#include<unordered_map>
using namespace std;


// check critical
int check(string roman, unordered_map<char, int> ump1){
    int res =0;
    for(int i=0; i<roman.length()-1; i++){
    if(roman[i] == 'I' && (roman[i+1] == 'V' || roman[i+1] == 'X')){
        //  res = ump1['I'];
        res = (ump1[roman[i+1]]- 1);
    }else if(roman[i]

    
}
return res;
}

// roman to int
// int solve(string roman){
   


// }
int main(){

    unordered_map<char, int > ump1;
    ump1.insert(make_pair('I', 1));
    ump1.insert(make_pair('V', 5));
    ump1.insert(make_pair('X', 10));
    ump1.insert(make_pair('L', 50));
    ump1.insert(make_pair('C', 100));
    ump1.insert(make_pair('D', 500));
    ump1.insert(make_pair('M', 1000));

    cout<<check("IV", ump1);

    return 0;
}