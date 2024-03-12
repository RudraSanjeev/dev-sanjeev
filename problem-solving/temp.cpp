#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> arr = {73, 74, 75, 71, 69, 72, 76, 73};
    auto lb = lower_bound(arr.begin(), arr.end(), 69);
    cout << *lb << endl;
    return 0;
}