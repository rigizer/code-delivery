import React from 'react';
import firebase from '../../firebase';

const login = () => {

    console.log('페이지 로드');
    let loginVO = firebase.auth().currentUser;
  
    // 구글 로그인 이벤트
    const onGoogleClick = async (event) => {
        doLogin();  
    };
    // 로그아웃 이벤트
    const onLogoutClick = async (event) => {
        doLogout(); 
    };
    
    // 로그인 함수
    const doLogin = function() {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().onAuthStateChanged((user) => {
                // 로그인 시
                if(user) {
                    loginVO = firebase.auth().currentUser;
                    console.log('로그인 됨');
                // 로그아웃 시
                } else {

                }
                if(firebase.auth().currentUser != null) {
                     console.log('이미 로그인 됨');
                     return false;
                }else {
                     firebase.auth()
                         .signInWithPopup(provider)
                         .then(() => {
                             console.log('로그인 진행 - 팝업');  
                         });
                     return false; 
                }
            });

           
        });
    };
    // 로그아웃 함수
    const doLogout = function() {
        if(loginVO == null) return false;
        firebase.auth().signOut();
    };

    // 로그인 사용자 정보 
    const userInfo = function(user) {
        if (user !== null) {
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
          
            const uid = user.uid;
            console.log('displayName : ' + displayName + ', email : ' + email + ', photoUrl : ' + photoURL + ', emailVerified : ' + emailVerified + ', uid : ' + uid);
          }
    };
    return (
        <div className="App">
            
            {
                loginVO == null ? <button name="google" onClick={onGoogleClick}>구글 계정으로 로그인</button> 
                : <button name="google" onClick={onLogoutClick}>로그아웃</button>
            }
        </div>
    );
};

export default login;