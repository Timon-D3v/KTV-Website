let mailFormId = "#emailUs";
let sumbitId = "#sendEmail";
let autorNameId = "#autorName";
let autorEmailId = "#autorEmail";
let emailTextId = "#emailText";
let checkboxId = "#emailUsFormCheckbox";
let statusReport = "#emailUsStatus";

let postmailData = {
	access_token: "72q03rx7katuj10jvr81adch",
};

function checkForRequired() {
	let checker = true;
	let errorMSG = "No Error";

	if (
		$(autorNameId).val() == "" ||
		$(autorEmailId).val() == "" ||
		$(emailTextId).val() == ""
	) {
		checker = false;
		errorMSG = "Du hast noch nicht alle Felder ausgefüllt...";
	};

	if (!$(checkboxId).is(":checked")) {
		checker = false;
		if (errorMSG == "No Error") {
			errorMSG = "Du musst den Bedingungen zustimmen um fortzufahren.";
		} else {
			errorMSG = "Du musst alle Felder ausfüllen und den Bedingungen zustimmen um fortzufahren.";
		};
	};

	checker ? postmailSend() : formError(errorMSG);
};

function postmailSend() {
	$(sumbitId).val("Senden...");
	$(sumbitId).attr("disabled", true);

	let request = new XMLHttpRequest();

	let requestDate = Date();
	requestDate =
		requestDate.slice(0, 4) +
		requestDate.slice(8, 10) +
		". " +
		requestDate.slice(4, 7) +
		" " +
		requestDate.slice(11, 15) +
		" - " +
		requestDate.slice(16, 24);

	request.onreadystatechange = () => {
		if (request.readyState == 4 && request.status == 200) {
			mailSentSuccessfully();
		} else if (request.readyState == 4) {
			mailSentError(request.response);
		};
	};

	let autorEmail = $(autorEmailId).val();
	let autorName = $(autorNameId).val();
	let emailMessage = $(emailTextId).val();

	let subject = autorName + " über KTV Website Formular";
	let message =
		autorName +
		" schreibt am " +
		requestDate +
		":\n===================================\n\n" +
		emailMessage +
		"\n===================================\n\n" +
		autorName +
		" hat diese E-Mail hinterlegt: " +
		autorEmail +
		"\n\n===================================\n\nDies ist eine automatisch verschickte E-Mail über eine API von postmail.invotes.com\nProgrammiert und aufesetzt von Timon Fiedler für den KTV Altstetten.\nTimon Fiedler ist nicht verantwortlich für eventuellen Spam oder andere Fehler, die durch den Endnutzer entstehen.";

	postmailData["subject"] = subject;
	postmailData["text"] = message;

	let paramameters = toParams(postmailData);

	request.open("POST", "https://postmail.invotes.com/send", true);
	request.setRequestHeader(
		"Content-type",
		"application/x-www-form-urlencoded"
	);

	request.send(paramameters);

	return false;
}

function toParams(postmailData) {
	let form_data = [];
	for (let key in postmailData) {
		form_data.push(
			encodeURIComponent(key) +
				"=" +
				encodeURIComponent(postmailData[key])
		);
	};

	return form_data.join("&");
};

$(mailFormId).on("submit", (e) => {
	e.preventDefault();
});

function mailSentSuccessfully() {
	console.log("Email sent successfully.");
	$(sumbitId).val("Gesendet!");
	$(statusReport).html(
		"<p class='emailUsStatus'>Deine Email wurde erfolgreich gesendet.</p>"
	);
};

function mailSentError(error) {
	console.error(
		"Something went wrong while sending your E-Mail...\nFurther information: ",
		error
	);
	$(sumbitId).val("Fehler!");
	$(statusReport).html(
		'<p class="emailUsStatusE">Beim Senden der E-Mail ist ein Fehler aufgetreten...</p>'
	);
};

function formError(errorMSG) {
	console.error(
		"Something went wrong while sending your E-Mail...\nFurther information: ",
		errorMSG
	);
	$(statusReport).html('<p class="emailUsStatusE">' + errorMSG + "</p>");
};

$("#showAgreement").on("click", () => {
	$("#eUFullAgreement").toggleClass("invisible");
});

$("#sendEmail").on("click", checkForRequired);