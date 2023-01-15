var arr=[5,4,3,2]
for(var i=1;i<4;i++){
    for(var j=0;j<4;j++){
        if(arr[i]>arr[i+1]){
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
    }
}
print(arr);