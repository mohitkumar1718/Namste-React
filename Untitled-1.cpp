#include<iostream>
#include<climits>
using namespace std;

int main(){
         int max1=INT_MIN;
        int max2=INT_MIN;
        int min1=INT_MAX;
        int min2=INT_MAX;
    
        
        int n;
        int a[n];
        for(int i=0;i<n;i++){
            cin>>a[i];
            if(a[i]>max1){
                max2=max1;
                max1=a[i];
            }
            if(a[i]<min1){
                min2=min1;
                min1=a[i];
            }
        }
    
    
    cout<<(max1-min1)+(max2-min2);
    
    return 0;
}