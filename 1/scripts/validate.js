document.getElementById("saveForm").addEventListener("click",((e)=>{

    // Is contact info set
    if(document.getElementById("field_firstname").value.length === 0) {
        alert("No first name.");
        e.preventDefault();
    }

    if(document.getElementById("field_lastname").value.length === 0) {
        alert("No last name.");
        e.preventDefault();
    }

    if(document.getElementById("field_email").value.length === 0) {
        alert("No email.");
        e.preventDefault();
    }

    if(document.getElementById("field_organisation").value.length === 0) {
        alert("No organization.");
        e.preventDefault();
    }

    // Is email valid
    if(!/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/
        .test(document.getElementById("field_email").value)){
        alert("Not a properly formatted email address.");
        e.preventDefault();
    }

    // Is message less than 200 chars
    if(document.getElementById("field_message").value.length > 200){
        alert("Message too long, max 200 characters.");
        e.preventDefault();
    }

    // Is lecture or seminar and thus is title set
    if(document.getElementById("pres_type_1").checked
        || document.getElementById("pres_type_2").checked){
        if(document.getElementById("field_pres_title").value.length === 0){
            alert("No title, it is required if lecture or seminar.");
            e.preventDefault();
        }
    }

}));