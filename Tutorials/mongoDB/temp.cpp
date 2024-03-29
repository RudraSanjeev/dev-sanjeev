#include <iostream>
using namespace std;

int binaryToDecimal(string binary)
{
    string num = binary;
    int dec_value = 0;

    // Initializing base value to 1, i.e 2^0
    int base = 1;

    int len = num.length();
    for (int i = len - 1; i >= 0; i--)
    {
        if (num[i] == '1')
        {
            dec_value += base;
        }
        base = base * 2;
    }
    return dec_value;
}
int main()
{

    string str;
    cin >> str;

    cout << binaryToDecimal(str) << endl;
    cout << endl;
}