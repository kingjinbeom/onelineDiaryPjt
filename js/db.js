const memberDB = new Map();
const diaryDB = new Map();

/* MEMBER DB START */
// API 만든다
const addMember = (id, pw, mail) => {
    console.log('addMember() CALLED!!');

    // id를 가지고 가입한다.
    memberDB.set(id, {
        u_id: id,
        u_pw: pw,
        u_mail: mail,
    });
    diaryDB.set(id, []);

    console.log(memberDB.get(id));

}

// 회원조회
const searchMember = (id, pw) => {
    console.log('searchMember() CALLED!!');

    let memObj = memberDB.get(id); //ID라는 키값에서 멤버를 가져온다.
    if (memObj !== undefined && memObj.u_pw === pw) {
        console.log('SIGN IN SUCCESS!!');
        return true;
    }

    console.log("SIGN IN FAIL!!");
    return false;
}
/* MEMBER DB END */


/* DIARY DB START */
const addDiary = (txt) => {
    console.log('addDiary() CALLED!!');

    let diaryArr = diaryDB.get(signInedMemberId);
    // 이 id에 해당하는 배열을 가져온다.
    diaryArr.push(txt);

    console.log('diaryArr: ', diaryArr);
}

// 로그인해서 내 일기를 보고싶을 때
const searchDiaries = () => {
    console.log('searchDiary() CALLED!!');

    let diaryArr = diaryDB.get(signInedMemberId);
    console.log('diaryArr: ', diaryArr);

    return diaryArr;
}
/* DIARY DB END */