const HomeAbout = () => {
  return (
    <div>
      <div className="header">Are you Determined?</div>
      <div className="about-description">
        Determined is a minimalistic gym workout log. <br />
        It utilizes a PostgreSQL, Flask, SQLAlchemy, and React.
        <div className="github">
          The GitHub Repositories are located at: <br />
          <a href="https://github.com/wonaval/determined">
            https://github.com/wonaval/determined
          </a>
          <br />
          <a href="https://github.com/wonaval/determined-backend">
            https://github.com/wonaval/determined-backend
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
