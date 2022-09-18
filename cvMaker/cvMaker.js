// input Work 

let workExperienceBox = document.getElementById('workExperienceBox');
let educationBox = document.getElementById('educationBox');
let releventSkillsBox = document.getElementById('releventSkillsBox');
let certificationsBox = document.getElementById('certificationsBox');
let newElement;

function addWorkExp(){
    newElement = document.createElement('textarea');
    newElement.name = 'singleExp';
    newElement.className = 'workExperiences';
    newElement.id = "workExperience";
    newElement.placeHolder = "2020 - 2022 Discription";
    newElement.rows = '4';

    workExperienceBox.appendChild(newElement);
}

function addEducation(){
    newElement = document.createElement('textarea');
    newElement.name = 'singleExp';
    newElement.className = 'qualification';
    newElement.id = "education";
    newElement.placeHolder = "2020 - 2022 Discription";
    newElement.rows = '4';

    educationBox.appendChild(newElement);
   
}

function addReleventSkills(){
    newElement = document.createElement('textarea');
    newElement.name = 'singleExp';
    newElement.className = 'releventSkills';
    newElement.id = "releventSkills";
    newElement.placeHolder = "";
    newElement.rows = '1';

    releventSkillsBox.appendChild(newElement);
    
}

function addCertifications(){
    newElement = document.createElement('textarea');
    newElement.name = 'singleExp';
    newElement.className = 'certifications';
    newElement.id = "certifications";
    newElement.placeHolder = "certification - institute";
    newElement.rows = '4';

    certificationsBox.appendChild(newElement);
    
}

//----------------------

function generateCv(){

    document.getElementById("generatedCv").style.display = 'grid';



    // document.getElementById('cvWorkExperience').innerHTML = '';
    // document.getElementById('cvEducation').innerHTML = '';
    // document.getElementById('cvCertification').innerHTML = '';

    let jobTitle = document.getElementById("title").value;
    let name = document.getElementById("name").value;
    let phoneNumbers = document.getElementById("phoneNo").value;
    phoneNumbers = phoneNumbers.split(',');
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    let facebookLink = document.getElementById("facebook").value;
    let linkedInLink = document.getElementById("linkedIn").value;
    let gitHubLink = document.getElementById("gitHub").value;
    let website = document.getElementById("website").value;

    let releventSkills = document.getElementsByClassName("releventSkills");

    //-----------------------

    let qualification = document.getElementsByClassName("qualification");
    let workExperiences = document.getElementsByClassName("workExperiences");
    let certifications = document.getElementsByClassName("certifications");

    newElement = document.createElement("p");
    newElement.id = 'cvName';
    newElement.innerText = name;
    document.getElementById('left').appendChild(newElement);

    newElement = document.createElement("p");
    newElement.id = 'cvJobTitle';
    newElement.innerText = jobTitle;
    document.getElementById('left').appendChild(newElement);

    newElement = document.createElement("p");
    newElement.id = 'cvEmail';
    newElement.innerText = email;
    document.getElementById('left').appendChild(newElement);

    newElement = document.createElement("div");
    newElement.className = 'contacts';
    newElement.innerHTML = "";
    for(x of phoneNumbers){
        newElement.innerHTML += `${x} <br>`;
    }
    document.getElementById('left').appendChild(newElement);

    newElement = document.createElement("p");
    newElement.id = 'cvAddress';
    newElement.innerText = address;
    document.getElementById('left').appendChild(newElement);

        

    
    if(facebookLink != ''){
    
        newElement = document.createElement("p");
        newElement.id = 'cvFacebook';
        newElement.className = 'cvlinks';
        newElement.innerText = facebookLink;
        document.getElementById('left').appendChild(newElement);
    }
    
    if(linkedInLink != ''){
    
        newElement = document.createElement("p");
        newElement.id = 'cvLinkedIn';
        newElement.className = 'cvlinks';
        newElement.innerText = linkedInLink;
        document.getElementById('left').appendChild(newElement);
    }


    if(gitHubLink != ''){
    
        newElement = document.createElement("p");
        newElement.id = 'cvGitHub';
        newElement.className = 'cvlinks';
        newElement.innerText = gitHubLink;
        document.getElementById('left').appendChild(newElement);
    }

    if(website != ''){
    
        newElement = document.createElement("p");
        newElement.id = 'cvWebsite';
        newElement.className = 'cvlinks';
        newElement.innerText = website;
        document.getElementById('left').appendChild(newElement);
    }

    if(releventSkills[0].value == ''){

    }else{
        let releventSkillsInnerHtml = '';
        newElement = document.createElement("b");
        newElement.id = 'releventSkillsHeading';
        newElement.className = 'skilsHeading';
        newElement.innerText = 'Relevent Skills:' ;
        document.getElementById('left').appendChild(newElement);

        for(x of releventSkills){
            releventSkillsInnerHtml += ` - ${x.value} <br>`;
        }

        newElement = document.createElement("p");
        newElement.id = 'skills';
        newElement.innerHTML = releventSkillsInnerHtml;
        document.getElementById('left').appendChild(newElement);
    }


    //----------------------------- for right part

    let inner;
    let innerDesc;

    for(x of workExperiences){
        inner = x.value.split('\n');
        newElement = document.createElement('p');
        newElement.className = 'title';
        newElement.innerHTML =  inner[0];
        document.getElementById('cvWorkExperience').appendChild(newElement);
        innerDesc = '';
        for(let i = 1; i<inner.length; i++){
            innerDesc += inner[i] + "<br>";
        }
        // inner = x.split('\n');
        newElement = document.createElement('p');
        newElement.className = 'desc';
        newElement.innerHTML = innerDesc ;
        document.getElementById('cvWorkExperience').appendChild(newElement);
    }

    for(x of qualification){
        inner = x.value.split('\n');
        newElement = document.createElement('p');
        newElement.className = 'title';
        newElement.innerHTML = inner[0];
        document.getElementById('cvEducation').appendChild(newElement);
        innerDesc = '';
        for(let i = 1; i<inner.length; i++){
            innerDesc += inner[i] + '<br>';
        }
        // inner = x.split('\n');
        newElement = document.createElement('p');
        newElement.className = 'desc';
        newElement.innerHTML = innerDesc;
        document.getElementById('cvEducation').appendChild(newElement);
    }

    if(certifications[0].value == ''){
        document.getElementById('cvCertification').style.display = 'none';
    }else{

        for(x of certifications){
            inner = x.value.split('\n');
            newElement = document.createElement('p');
            newElement.className = 'title';
            newElement.innerHTML =  inner[0];
            document.getElementById('cvCertification').appendChild(newElement);
            innerDesc = '';
            for(let i = 1; i<inner.length; i++){
                innerDesc += inner[i] + '<br>';
            }
            // inner = x.split('\n');
            newElement = document.createElement('p');
            newElement.className = 'desc';
            newElement.innerHTML = innerDesc;
            document.getElementById('cvCertification').appendChild(newElement);
        }
    }

    
    
    // console.log(facebookLink);
    // console.log(phoneNumbers);
    // console.log(releventSkills);
    // console.log(qualification);
    // console.log(workExperiences);
    // console.log(certifications);
}

