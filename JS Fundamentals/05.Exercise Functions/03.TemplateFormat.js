function XMLfile(arr) {
    let strXML = '<?xml version="1.0" encoding="UTF-8"?>\n'+'<quiz>\n';
    for (let i=0;i<arr.length;i+=2){
        strXML+="  <question>\n"+ `    ${arr[i]}\n`+"  </question>\n";
        strXML+="  <answer>\n"+`    ${arr[i+1]}\n`+"  </answer>\n";
    }
    strXML += '</quiz>';
    console.log(strXML);
}
XMLfile( ["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);