document.addEventListener("DOMContentLoaded", function () {
    console.log("DOCUMENT READY!!");

    init();
});

const init = () => {
    console.log("init() CALLED!!");


    initViews();
    addEvents();
}

// 어떤건 보이고 어떤건 보이게 하지마라 즉, 화면초기화


const addEvents = () => {
    console.log("addEvents() CALLED!!");

    /* MENU CLICK EVENT START */
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function () {
        console.log('signUpMenuButton CLICKED!!');

        showSelectedView(SIGN_UP_VIEW);
    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function () {
        console.log('signInMenuButton CLICKED!!');

        showSelectedView(SIGN_IN_VIEW);
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function () {
        console.log('signOutMenuButton CLICKED!!');

        signInedMemberId = ''; // 로그인 정보를 비워야 한다.
        setMenuStatus(SIGN_OUT_STATUS);

        showSelectedView(SIGN_OUT_VIEW);
    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function () {
        console.log('writeMenuBtn CLICKED!!');

        if (signInedMemberId === '') { // 로그인 안한 상태
            alert('Please sign in!');

            showSelectedView(SIGN_IN_VIEW);
            return; // 프로그램이 밑으로 갈수도 있으므로 여기서 끝내도록 한다.
        }

        showSelectedView(DIARY_WRITE_VIEW);
    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function () {
        console.log('listMenuBtn CLICKED!!');

        if (signInedMemberId === '') { // 로그인 안한 상태
            alert('Please sign in!');

            showSelectedView(SIGN_IN_VIEW);
            return; // 프로그램이 밑으로 갈수도 있으므로 여기서 끝내도록 한다.
        }

        // 데이터 먼저 가져오고 화면에 띄어준다.

        listUpDiaries();

        showSelectedView(DIARY_LIST_VIEW);


    });
    /* MENU CLICK EVENT END */


    /* FUNCTION CLICK EVENT START */
    // 회원가입
    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    signUpBtn.addEventListener('click', function () {
        console.log('signUpBtn CLICKED!!');
        let u_id = document.querySelector('div.sign_up_wrap input[name = "u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name = "u_pw"]').value;
        let u_mail = document.querySelector('div.sign_up_wrap input[name = "u_mail"]').value;

        // API호출해서 DB에 넣는다.
        addMember(u_id, u_pw, u_mail);

        alert('SIGN UP SUCCESS!!');

        document.querySelector('div.sign_up_wrap input[name = "u_id"]').value = '';
        document.querySelector('div.sign_up_wrap input[name = "u_pw"]').value = '';
        document.querySelector('div.sign_up_wrap input[name = "u_mail"]').value = '';

    });

    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    signInBtn.addEventListener('click', function () {
        console.log('signInBtn CLICKED!!');

        let u_id = document.querySelector('div.sign_in_wrap input[name ="u_id"]').value;
        let u_pw = document.querySelector('div.sign_in_wrap input[name ="u_pw"]').value;

        let isMember = searchMember(u_id, u_pw);
        if (isMember) {
            alert('SIGN IN SUCCESS!!');
            signInedMemberId = u_id;
            setMenuStatus(SIGN_IN_STATUS);


            listUpDiaries();
            showSelectedView(DIARY_LIST_VIEW);

        } else {
            alert('SIGN IN FAIL!!');

            signInedMemberId = '';
        }

        // 사용자 입력한 id pw 지워주기
        document.querySelector('div.sign_up_wrap input[name = "u_id"]').value = '';
        document.querySelector('div.sign_up_wrap input[name = "u_pw"]').value = '';

    });

    let writeBtn = document.querySelector('div.write_wrap button');
    writeBtn.addEventListener('click', function () {
        console.log('writeBtn CLICKED!!');

        let txt = getCurrentDateTime() + document.querySelector('div.write_wrap input').value;
        addDiary(txt);

        document.querySelector('div.write_wrap input').value = '';

        listUpDiaries();
        showSelectedView(DIARY_LIST_VIEW);


    });



    /* FUNCTION CLICK EVENT END */

}


const listUpDiaries = () => {
    console.log('listUpDiary() CALLED!!');

    // DIAEY_LIST_VIEW에 있는 것을 깨끗하게 목록을 청소부터 해준다.
    listWrap.textContent = '';

    // DB에 일기목록을 달라고 한다.
    let diaryArr = searchDiaries();

    console.log('>>>>>>>>> ', diaryArr);

    for (let i = 0; i < diaryArr.length; i++) {
        console.log(diaryArr[i]);

        let tpl = document.querySelector('#list_item');
        let clone = document.importNode(tpl.content, true);
        let txt = clone.querySelector('div.txt');
        txt.textContent = diaryArr[i]; // diary값을 넣어준다.
        // listWrap.appendChild(clone); // sort가 내림차순이다.

        listWrap.prepend(clone);    // sort가 오름차순이다.

    }

}