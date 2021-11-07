import React, { useEffect } from 'react';
import firebase from '../../firebase';

const Login = () => {

    console.log('페이지 로드');
    let loginVO = null;
  
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

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                loginVO = user;
                console.log('로그인 상태');
            } else {
                console.log('로그아웃 상태');
                
            }
        })
    }, [])

    console.log('로그인 분기');
    console.log(firebase.auth().currentUser);
    if(loginVO == null) {       
    return (
        <div className="App">
        <button name="google" onClick={onGoogleClick}>구글 계정으로 로그인</button>        
        </div>
    );
    } else {
        return (
            <div className="App">
               <button name="google" onClick={onLogoutClick}>로그아웃</button>
            </div>
        );
    }
    
};

export default Login;
