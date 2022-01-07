//getProgramList
if(window.XMLHttpRequest){
    var httpRequest2 = new XMLHttpRequest();
}else{
    var httpRequest2 = new ActiveXObject("Microsoft.XMLHTTP");
};
httpRequest2.open('GET', url + '/event/allprogram/', true);
httpRequest2.setRequestHeader("Content-type","application/json;charset-UTF-8");
httpRequest2.setRequestHeader("token", localStorage.getItem('token'));
code = 200
msg = ""
httpRequest2.send(null)
httpRequest2.onreadystatechange = function () {
    if (httpRequest2.readyState == 4 && httpRequest2.status == 200) {
        var json = JSON.parse(httpRequest2.responseText);
        code = json.code
        msg = json.msg
        app._data.programList = []
        console.log(json.data)
        json.data.forEach(item=>{
            app._data.programList.push({
                programId: item.id,
                event: item.event,
                title: item.title,
                amountOfFund: item.amount_of_fund,
                status: item.status,
                donorsInfo: item.info_donor})
        })
    }
}

//getAllEventList
if(window.XMLHttpRequest){
    var httpRequest3 = new XMLHttpRequest();
}else{
    var httpRequest3 = new ActiveXObject("Microsoft.XMLHTTP");
};
httpRequest3.open('POST', url + '/event/allevent/', true);
httpRequest3.setRequestHeader("Content-type","application/json;charset-UTF-8");
httpRequest3.setRequestHeader("token", localStorage.getItem('token'));
para = JSON.stringify({id: "1"})
httpRequest3.send(para)
code = 200
msg = ""
httpRequest3.send()
httpRequest3.onreadystatechange = function () {
    if (httpRequest3.readyState == 4 && httpRequest3.status == 200) {
        var json = JSON.parse(httpRequest3.responseText);
        code = json.code
        msg = json.msg
        app._data.allEventList = []
        json.data.forEach(item=>{
            app._data.allEventList.push({
                eventId: item.id,
                title: item.title,
                startTime: item.start,
                endTime: item.end,
                place: item.place,
                amountOfFund: item.amount_of_fund,
                requiredVolunteersNumber: item.require_volunteers_number,
                volunteersNumberSoFar: item.now_volunteers_number,
                description: item.description,
                status: item.status,
                programBelongsTo: item.program,
                volunteersInfo: item.info_volunteer,
                donorsInfo: item.info_donor})
        })
    }
}