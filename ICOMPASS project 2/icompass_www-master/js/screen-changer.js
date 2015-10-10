function pagechange(){
	if (document.getElementById("changer").value=="Prescriptions") {
		document.getElementById("patient-personal-info").style.display="none";
		document.getElementById("patient-prescription").style.display="inline";
		document.getElementById("patient-summary").style.display="none";
		document.getElementById("patient-doctor-list").style.display="none";
	}else if (document.getElementById("changer").value=="Personal Info") {
		document.getElementById("patient-personal-info").style.display="inline";
		document.getElementById("patient-prescription").style.display="none";
		document.getElementById("patient-summary").style.display="none";
		document.getElementById("patient-doctor-list").style.display="none";
	}else if (document.getElementById("changer").value=="Pain Test Results") {
		document.getElementById("patient-personal-info").style.display="none";
		document.getElementById("patient-prescription").style.display="none";
		document.getElementById("patient-summary").style.display="inline";
		document.getElementById("patient-doctor-list").style.display="none";
	}
	else if (document.getElementById("changer").value=="Doctors") {
		document.getElementById("patient-personal-info").style.display="none";
		document.getElementById("patient-prescription").style.display="none";
		document.getElementById("patient-summary").style.display="none";
		document.getElementById("patient-doctor-list").style.display="inline";
	};
}

function editPrescriptions(){
	document.getElementById("view-patient-prescriptions-textarea").removeAttribute("readonly");
	document.getElementById("edit-prescription-button-save").style.display="inline";
	document.getElementById("edit-prescription-button").style.display="none";
}
function editPrescriptions2(){
	document.getElementById("view-patient-prescriptions-textarea").readOnly="true";
	document.getElementById("edit-prescription-button-save").style.display="none";
	document.getElementById("edit-prescription-button").style.display="inline";
}




function updatePrescriptions(){
	document.getElementById("update-prescriptions-textarea").removeAttribute("readonly");
	document.getElementById("update-prescription-button-save").style.display="inline";
	document.getElementById("update-prescription-button").style.display="none";
}

function updatePrescriptions2(){
	document.getElementById("update-prescriptions-textarea").readOnly="true";
	document.getElementById("update-prescription-button-save").style.display="none";
	document.getElementById("update-prescription-button").style.display="inline";
}