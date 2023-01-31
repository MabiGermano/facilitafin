const Header = (props) => {
  const { user } = props;
  return (
    <header>
      <h1>FacilitaFin</h1>
      <h2>
        Oi {user.name}! Por aqui já está tudo certo para facilitar suas finanças
      </h2>
    </header>
  );
};

export default Header;
