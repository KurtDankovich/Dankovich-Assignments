var URLArray = [];
var contactArray = [];
var loadingContact = 0;



function loadIndex(){
    var indexSummon = new XMLHttpRequest();
    indexSummon.open('GET','https://mustang-index.azurewebsites.net/index.json');
    indexSummon.onload = function() {
        console.log("Index JSON: " + indexSummon.responseText);
        document.getElementById("indexID").innerHTML = indexSummon.responseText;
        contactIndex = JSON.parse(indexSummon.responseText);
        URLArray.length = 0;
        for (i=0; i < contactIndex.length; i++){
            URLArray.push(contactIndex[i].ContactURL);
        }
        console.log("Contact URL: "+ JSON.stringify(URLArray))
    }

indexSummon.send();
}

function loadContacts(){
    contactArray.length = 0;
    loadingContact = 0;


if (URLArray.length >= loadingContact){
    loadNextContact(URLArray[loadingContact]);
}

    
}

function loadNextContact(URL){
    console.log("URL: " + URL);
    contactSummon = new XMLHttpRequest();
    contactSummon.open('GET', URL);
    contactSummon.onload = function(){
        console.log(contactSummon.responseText);
        var contact;
        contact = JSON.parse(contactSummon.responseText);
        console.log("Contact: "+ contact.firstName);
        contactArray.push(contact);
        document.getElementById("contactsID").innerHTML = JSON.stringify(contactArray);

        loadingContact++;
        if (URLArray.length> loadingContact){
            loadNextContact(URLArray[loadingContact]);
        }
    }
    
contactSummon.send();
    
}

function logContacts(){
    console.log(contactArray);
}