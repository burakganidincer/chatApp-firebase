import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const LoginPage = ({ setIsAuth }) => {
  // butona tıklanınca
  const handleClick = () => {
    // google ile giriş yap
    signInWithPopup(auth, provider)
      // başarıyla giriş yaparsa
      .then((data) => {
        // kullanıcın yetkisini true'ya çeker
        setIsAuth(true);

        // kullanıcın tokenini lokale kaydet
        localStorage.setItem("TOKEN", data.user.refreshToken);
      });
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Sohbet Odası</h1>
        <p>Devam etmek için lütfen giriş yapınız..</p>
        <button onClick={handleClick}>
          <img src="g-logo.png" />
          <span>Google Hesabı ile Giriş Yap</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
