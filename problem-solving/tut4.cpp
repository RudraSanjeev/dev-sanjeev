#include <bits/stdc++.h>
using namespace std;

bool compare(const pair<char, int> a, const pair<int, int> b)
{
    return a.second > b.second;
}

string frequencySort(string s)
{
    map<char, int> mp;

    // freequency
    for (char c : s)
    {
        mp[c]++;
    }
    vector<pair<char, int>> arr;
    for (auto x : mp)
    {
        arr.push_back({x.first, x.second});
    }
    sort(arr.begin(), arr.end(), compare);
    string res;

    for (auto x : arr)
    {
        // cout << x.first << " " << x.second << endl;
        while (x.second--)
        {
            res += x.first;
        }
    }

    return res;
}

int main()
{
    string str = "Aabb";
    cout << frequencySort(str) << endl;
    return 0;
}