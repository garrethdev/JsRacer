

window.onload = function() {

	var button = document.getElementById('button')
	button.onclick = function () { 
		movePiece(8,11)
	}
	function movePiece(x,y) {
		var racerTable1 = document.getElementById(x)
		var racerTable2 = document.getElementById(y)
		var button = document.getElementById('button')
		racerTable1.classList.add("active")
		racerTable2.classList.add("active")
		var table=document.getElementById("racertable");
		var r=0;
			while(row=table.rows[r++])
				{
					var c=0;
					while(cell=row[r].cell[c++])
					{
						alert("Its working")		
				  }
				}


}
}


//cycle through table rows 
// for each row 

