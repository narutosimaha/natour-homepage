#include<iostream>
#include<math.h>
using namespace std;

double hamNe(float x);

double timNghiem(int n,float a,float b){
    
    float x= (a+b)/2;
    if(n==0) return x;

    

    if(hamNe(x)==0)
        return x;

    cout<<"X: "<<hamNe(x)<<"\ta: "<<hamNe(a)<<"\tb: "<<hamNe(b)<<endl;

    if(hamNe(x)*hamNe(a)<0){
        return timNghiem(n-1,a,x);
    }
        
    if(hamNe(x)*hamNe(b)<0){
        return timNghiem(n-1,x,b);
    }
        
    return 0;
}

double hamNe(float x){
    return 2+cos(exp(x)-2)-exp(x);
}

int main(){
  float x=0.5,y=1.5;
cout<< timNghiem(6,0.5,1.5);
cout<< "Em\fyeu";
}