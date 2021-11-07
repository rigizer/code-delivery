import React, { useEffect } from 'react';
import firebase from '../../firebase';

const Login = () => {

    console.log('페이지 로드');
    let loginVO = null;
    let store = null;
    console.log(loginVO);
    console.log(firebase.auth().currentUser);
    // 구글 로그인 이벤트
    const onGoogleClick = async (event) => {
        doLogin();   
    };
    // 로그아웃 이벤트
    const onLogoutClick = async (event) => {
        doLogout(); 
        window.location.reload();    
    };
    
   
    // 로그인 함수
    const doLogin = function() {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
            const provider = new firebase.auth.GoogleAuthProvider();
            if(firebase.auth().currentUser != null) {
                console.log('이미 로그인 됨');
                return false;
            }else {
                firebase.auth()
                    .signInWithPopup(provider)
                    .then(() => {
                        window.location.reload();    
                    });
                return false; 
            }
        });
    };
    // 로그아웃 함수
    const doLogout = function() {
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
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                //document.getElementsByClassName('LoginBtn').remove();
                document.getElementById('LoginBtn').remove();
            } else {            
                document.getElementById('LogoutBtn').remove(); 
            }
        })
    }, [])

    return (
        <div>
            <div className="LoginBtn" id="LoginBtn">
                <button name="google" onClick={onGoogleClick}>구글 계정으로 로그인</button>      
            </div>
            <div className="LogoutBtn" id="LogoutBtn">
                <button name="google" onClick={onLogoutClick}>로그아웃</button>      
            </div>
        </div>
    );
    
};

export default Login;
