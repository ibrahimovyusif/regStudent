 var myCsv  = [];
  var i = 0;
  myCsv.push(" ");
     function WriteToFile() {

	  var studentName = document.getElementById('name');
      myCsv.push(studentName.value);
    //  myCsv[i][0] = studentName.value;

      var studentEmail = document.getElementById('email');
	  myCsv.push(studentEmail.value);
	 // myCsv[i][1] = studentEmail.value;

      var studentAddress = document.getElementById('address');
	  myCsv.push(studentAddress.value);
	 // myCsv[i][2] = studentAddress.value;

      var studentNumber = document.getElementById('idNumber');
	  myCsv.push(studentNumber.value);
	 // myCsv[i][3] = studentNumber.value;
	   myCsv.push(" " + "\n");
	 
 

    var moreStudents = prompt("Do you want to add students?");
        if (moreStudents == "yes" || moreStudents == "y")
        {
        	MoreStudents();
        }
        else
            window.open('data:text/csv;charset=utf-8,' + escape(myCsv));
}

function MoreStudents(){
i+=1;
//alert(i);
}