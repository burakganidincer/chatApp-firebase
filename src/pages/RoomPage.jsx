const RoomPage = ({ setIsAuth, setRoom }) => {
  // çıkış yap
  const logout = () => {
    // yetkinin state'ini false'a çek
    setIsAuth(false);

    // localdeki kayıtı kaldır
    localStorage.removeItem("TOKEN");
  };

  // form gönderildiğinde
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki değeri al
    const room = e.target[0].value;

    // oda ismini state'e aktar
    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Oda Seçiniz..</p>

      <input placeholder="ör:9-hafta-ici" type="text" required />

      <button type="submit">Odaya Gir</button>
      <button onClick={logout} type="button">
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
