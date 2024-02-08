export default function Header({ HeaderText }) {
  return (
    <>
      <div className="Header">
        {HeaderText ? (
          <header>
            <h1>{HeaderText}</h1>
          </header>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
}
