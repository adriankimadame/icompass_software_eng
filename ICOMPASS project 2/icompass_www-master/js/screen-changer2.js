function pagechange(){
	if (document.getElementById("changer").value=="Assigned Patients") {
		document.getElementById("doctor-personal-info").style.display="none";
		document.getElementById("assigned-patients").style.display="inline";
		
	}else if (document.getElementById("changer").value=="Personal Info") {
		document.getElementById("doctor-personal-info").style.display="inline";
		document.getElementById("assigned-patients").style.display="none";
		
	};
}
