let x = document.getElementsByClassName(`list-group-item list-group-item-action border-0`);
let y = document.getElementsByClassName(`photo`);
let z = document.getElementsByClassName(`list-group list-group-flush`);
 

function showPhoto() {

    for (let i = 0; i < x.length; i++) {

        x[i].onmouseover = () => {

            for(let j = 0; j < i; j++) {

                y[j].style.display = 'none';
                x[j].style.backgroundColor = 'white';
            }

            for(let k = x.length-1; k > i; k--) {

                y[k].style.display = 'none';
                x[k].style.backgroundColor = 'white';
            }

            x[i].style.backgroundColor = 'red';
            y[i].style.display = 'block';

            z[0].onmouseleave = () => {
                x[i].style.backgroundColor = 'red';
                y[i].style.display = 'block';
        
            }
        }       

        x[i].onmouseleave = () => {
            x[i].style.backgroundColor = 'white';
            y[i].style.display = 'none';
        }
    }
}

let parentOverPhoto = document.getElementsByClassName(`col-sm-6 p-4 parentOverPhoto`);
let photo = document.getElementsByClassName(`services w-100`);
let overPhoto = document.getElementsByClassName(`container-fluid over w-100 h-100`);

function showOverPhoto() {

    for (let i = 0; i < photo.length; i++) {
        
        photo[i].onmouseover = () => {

            overPhoto[i].style.display = 'block';
            overPhoto[i].style.position = 'absolute';
            overPhoto[i].style.left = '0';
            overPhoto[i].style.top = '0';

        }

        parentOverPhoto[i].onmouseleave = () => {

            overPhoto[i].style.display = 'none';
            overPhoto[i].style.position = 'static';

        }
        
    }
}

// <!-- Feedback -->

// let 
// onclick="showFeedbackSms(this)"
// onmouseover="changeColorRedFedback(this)"
// onmouseout="changeColorGreyFedback(this)"

// feedback buttons prev-fb and next-fb

let btnPrev = document.querySelectorAll(`.prev-fb`);
let fbBoxSms = document.getElementsByClassName(`col-xl-3 col-md-4 fb-box-sms`);
console.log(fbBoxSms);


function prevFeedback() {

    let prevX = fbBoxSms[fbBoxSms.length-1].innerHTML;
    for(let i = fbBoxSms.length-1; i >= 0; i--){

        if(i === 0) { 
            fbBoxSms[i].innerHTML = prevX;
        }
        else{
            fbBoxSms[i].innerHTML = fbBoxSms[i-1].innerHTML;
        }
        
    }
}


function nextFeedback() {

    let nextX = fbBoxSms[0].innerHTML;
    for(let i = 0; i < fbBoxSms.length; i++){

        if(i === fbBoxSms.length-1) {
            fbBoxSms[i].innerHTML = nextX;
        }
        else{
            fbBoxSms[i].innerHTML = fbBoxSms[i+1].innerHTML;
        }
        
    }
}

//  feedback modal
let textToModalFeedback = document.getElementsByClassName(`p-modal-feedback`);
let modalBodyFeedback = document.getElementsByClassName(`modal-body-feedback`);

for (let i = 0; i < textToModalFeedback.length; i++) {

    textToModalFeedback[i].onclick = () => {

        modalBodyFeedback[0].innerHTML = textToModalFeedback[i].innerHTML;

    }
}

// <!-- Our_work -->

let ulOurWorkPhoto = document.getElementsByClassName(`list-group list-group-horizontal our_work_nav`);
let linkOurWorkPhoto = document.getElementsByClassName(`list-group-item our-work-photo-li`);
let ourWorkPhotoImg = document.getElementsByClassName(`our-work-photo-img`);

linkOurWorkPhoto[0].style.color = "rgb(254, 125, 154)";
let colorLi = 1;

ourWorkPhotoImg[0].style.display = 'block';
ourWorkPhotoImg[1].style.display = 'block';

let newArrOurWorkPhotoImg = [];
for (let i = 0; i < ourWorkPhotoImg.length; i++) {
    
    newArrOurWorkPhotoImg.push(ourWorkPhotoImg[i]);
}

let sliced = [ourWorkPhotoImg[0], ourWorkPhotoImg[1]];

function showOurWorkPhoto(x) {

    function slicedArrDisplayNone() {

        for (let i = 0; i < sliced.length; i++) {
                    
            sliced[i].style.display = 'none'; 
        }
        sliced = [];
    }
    function newArrOurWorkPhotoImgDisplayNone() {

        for (let i = 0; i < newArrOurWorkPhotoImg.length; i++) {
                    
            newArrOurWorkPhotoImg[i].style.display = 'none';  
        }
    }
    function slicedArrDisplayBlock() {

        for (let i = 0; i < sliced.length; i++) {
                
            sliced[i].style.display = 'block';
        }
    }

        switch (x) {
            case linkOurWorkPhoto[0]: 

                slicedArrDisplayNone();
                newArrOurWorkPhotoImgDisplayNone();

                sliced = newArrOurWorkPhotoImg.slice(0, 2);

                slicedArrDisplayBlock();

            break;
    
            case linkOurWorkPhoto[1]:

                slicedArrDisplayNone();
                newArrOurWorkPhotoImgDisplayNone();

                sliced = newArrOurWorkPhotoImg.slice(1, 3);

                slicedArrDisplayBlock();

            break;
    
            case linkOurWorkPhoto[2]:

                slicedArrDisplayNone();
                newArrOurWorkPhotoImgDisplayNone();

                sliced = newArrOurWorkPhotoImg.slice(3, 15);

                slicedArrDisplayBlock();

            break;

            case linkOurWorkPhoto[3]:

                slicedArrDisplayNone();
                newArrOurWorkPhotoImgDisplayNone();

                sliced = newArrOurWorkPhotoImg.slice(15);

                slicedArrDisplayBlock();

            break;

            case linkOurWorkPhoto[4]:

                slicedArrDisplayNone();
                newArrOurWorkPhotoImgDisplayNone();

                sliced = newArrOurWorkPhotoImg.slice(0);

                slicedArrDisplayBlock();

            break;
        }
    
        for (let i = 0; i < linkOurWorkPhoto.length; i++) {
            
            if(linkOurWorkPhoto[i] !== x) {
    
                linkOurWorkPhoto[i].style.color = "rgb(189, 189, 189)";
            }
            
        }

    x.style.color = "rgb(254, 125, 154)";    
    colorLi = 1;
    // console.log(sliced);
}


function changeColorRed(x) {

    if(x.style.color === "rgb(254, 125, 154)") {
        colorLi = 1;
    }
    else{
        x.style.color = "rgb(254, 125, 154)";
        colorLi = 0;
    }
}

function changeColorGrey(x) {

    if(colorLi === 0) {
        x.style.color = "rgb(189, 189, 189)";
    }   
}


// Get the modal our work
let modalOurWork = document.getElementById('modal-our-work');
// let rel = document.getElementsByClassName(`rel`);

// Get the image and insert it inside the modal
let imgOurWork = document.getElementsByClassName('mh-100 our-work-img');
let modalImg = document.getElementById("img01");

function showModalImg() {
    
    for (let i = 0; i < sliced.length; i++) {
               
        sliced[i].onclick = () => {
            modalImg.attributes[0].value = sliced[i].children[0].children[0].attributes[0].value;
        }
    }
}

// <!-- The Modal our work buttons -->

let btnOverOurWorkImg = document.getElementsByClassName(`btn-over-our-work-img`);

function playPause() {

    if(btnOverOurWorkImg[0].innerHTML === '<i class="material-icons">play_arrow</i>') {

        btnOverOurWorkImg[0].innerHTML = '<i class="material-icons">pause</i>';

        // find position of showing img in sliced array
        let currentImg;
        let modalImgPosition = sliced.findIndex(val => val.children[0].children[0].attributes[0].value === modalImg.attributes[0].value);
        currentImg = sliced[modalImgPosition];

        // make array of smoller sliced numbers and revers it
        let smollerNumbersArr = sliced.filter((val, index) => index < modalImgPosition);

        // make array of bigger sliced numbers
        let biggerNumbersArr = sliced.filter((val, index) => index > modalImgPosition);

        // make array of bigger + smoller + current img (modalImg)
        let playArr = biggerNumbersArr.concat(smollerNumbersArr, currentImg);
        console.log(playArr);

        // make slideshow
        let i = 0;
        let slideShowModalImg = setInterval(function timer() {

            if (i === playArr.length) {
                i = 0;
                // clearInterval(timerId);
                // btnOverOurWorkImg[0].innerHTML = '<i class="material-icons">play_arrow</i>';
            }
            if(btnOverOurWorkImg[0].innerHTML === '<i class="material-icons">play_arrow</i>'){
                clearInterval(slideShowModalImg);
                
            }

            modalImg.attributes[0].value = playArr[i].children[0].children[0].attributes[0].value;
            console.log(i++);
            
        }, 3000);
       
    }
    else {
        btnOverOurWorkImg[0].innerHTML = '<i class="material-icons">play_arrow</i>';
    }


    btnOverOurWorkImg[3].onclick = () => {
        btnOverOurWorkImg[0].innerHTML = '<i class="material-icons">play_arrow</i>';
    }
    btnOverOurWorkImg[2].onclick = () => {
        btnOverOurWorkImg[0].innerHTML = '<i class="material-icons">play_arrow</i>';
    }
    btnOverOurWorkImg[1].onclick = () => {
        btnOverOurWorkImg[0].innerHTML = '<i class="material-icons">play_arrow</i>';
    }
    // modalOurWork.onclick = () => {
    //     btnOverOurWorkImg[0].innerHTML = '<i class="material-icons">play_arrow</i>';
    // }


}



