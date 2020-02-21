function kiemtra() {
    let inputNam = document.getElementById("nam").value;
    nam = parseInt(inputNam);

    if(nam % 4 == 0){
        if(nam%100==0){
            if(nam%400==0){
                alert(nam+" la nam nhuan");
            }else{
                alert(nam+" khong la nam nhuan")
            }
        }else{
            alert(nam+" la nam nhuan");
        }
    }else{
        alert(nam + " khong la nam nhuan")
    }

}