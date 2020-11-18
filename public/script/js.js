setInterval(() => {
    let t=new Date()
    let c=t.getMinutes()
    let month=t.getMonth()
    let date=t.getDate()
    if(date.toString().length==1){
        date='0'+date
    }
    if(month.toString().length==1){
        month='0'+month
    }
    if(c.toString().length==1){
        c='0'+c
    }
    
    document.getElementById('timer1').innerText=`  ${date}.${month}.${t.getFullYear()}`
    document.getElementById('span1').innerHTML=`${t.getHours()}:${c}`
}, 100);