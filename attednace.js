let Sheet_ip = "1wO3rkBxUCJKtTb6umqLPmMuJ3T1JZhVPw0zPqVrpgYM";
let Sheet_title="Sheet1";

console.log("jonied");
let Shett_range = "B2:C6"
let full_url = ("https://docs.google.com/spreadsheets/d/" + Sheet_ip + "/gviz/tq?sheet=" + Sheet_title + "&range=" + Shett_range);
fetch(full_url).then(res=>res.text()).then(rep=>{


    let data = JSON.parse(rep.substr(47).slice(0,-2));
     


     let roll_no_title =document.getElementById('Roll_no_titile');
     let name_title =document.getElementById('name_titile');
     let roll_no_ =document.getElementById('roll_no_');
     let name =document.getElementById('name_');
     name.innerHTML =data.table.rows[0].c[0].v;
     console.log( data.table.rows[0].c[1].v);
     roll_no_title.innerHTML = data.table.cols[0]['label'];
     name_title.innerHTML = data.table.cols[1]['label'];
   //   for(var i =0;i<4;i++){
   //      console.log(data.table.rows[i].c[1].v)
   //      name.innerHTML = data.table.rows[i].c[1].v;

   //   }
   console.log("sangraaaa")
   if( (data.table.rows[0].c[1].v).trim() =='sangram'){
      console.log("nice")
      // roll_no_.innerHTML= data.table.rows[0].c[0].v;

   }
   console.log("here ")

   window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (window.SpeechRecognition) {
  const recognition = new SpeechRecognition();
  const startButton = document.getElementById('startButton');

  recognition.onstart = function() {
    console.log('Speech recognition started');
  };

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log('Transcript:', transcript);
    if (transcript.includes('sangram')) {
      roll_no_.innerHTML= data.table.rows[1].c[0].v;
      // Do something when "hello" is detected
    }
  };

  startButton.addEventListener('click', function() {
    recognition.start();
  });

} else {
  console.log('Speech recognition not supported');
}
})