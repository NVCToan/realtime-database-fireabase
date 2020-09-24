// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDu4mmp3EriEt5sfl2bUyEFk8z6v7Kb2t0",
    authDomain: "graduration2020-d9656.firebaseapp.com",
    databaseURL: "https://graduration2020-d9656.firebaseio.com",
    projectId: "graduration2020-d9656",
    storageBucket: "graduration2020-d9656.appspot.com",
    messagingSenderId: "850719312366",
    appId: "1:850719312366:web:12a8b1192b625cc8da26ff",
    measurementId: "G-F7F2NMCQTB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const dbRefObject = firebase.database().ref().child("DataStation")
  const dbRefSumDataStation = firebase.database().ref().child("SumDataStation")
  const bodyOfTable = document.querySelector(".body-content-table1");
  const bodyOfTable2 = document.querySelector(".body-content-table2");
//   const dbRefChild = dbRefObject.child();
  var  STT=0;
  var  STTTable2=0;


  dbRefObject.once('value',function(objects) {
      if(objects.exists()){
        objects.forEach(function(singleObject){
            STT++;
               //Table
               var newTBody = document.createElement("tr");
               var att1 = document.createAttribute("role");
               att1.value="row";
               newTBody.setAttributeNode(att1);
               var rowTable = `
               <td class="sorting_1">${STT}</td>
               <td>${singleObject.val().NameStation}</td>
               <td>${singleObject.val().IPStation}</td>
               <td>${singleObject.val().WorkerID}</td>
               <td>${singleObject.val().FullName}</td>
               <td>${singleObject.val().Result}</td>
               <td>${singleObject.val().Date_Time}</td>
               <td>${singleObject.val().Mass}</td>
               <td>${singleObject.val().Parameter}</td>
               `
                   newTBody.innerHTML = rowTable;
                   bodyOfTable.appendChild(newTBody);
               //End Table
            
        })
      }
      $(document).ready(function () {
        $('#dtVerticalScrollExample').DataTable({
        "scrollY": "200px",
        "scrollCollapse": true,
        });
        $('.dataTables_length').addClass('bs-select');
        });
  }
  
    );
    dbRefSumDataStation.once('value',function(objects) {
      if(objects.exists()){
        objects.forEach(function(singleObject){
            STTTable2++;
               //Table
               var newTBody = document.createElement("tr");
               var att1 = document.createAttribute("role");
               att1.value="row";
               newTBody.setAttributeNode(att1);
               var rowTable = `
               <td class="sorting_1">${STTTable2}</td>
               <td>${singleObject.key}</td>
               <td>${singleObject.val().TongKhoiLuong}</td>
               `
                   newTBody.innerHTML = rowTable;
                   bodyOfTable2.appendChild(newTBody);
               //End Table
            
        })
      }
  }
    );
    
  
    
    
