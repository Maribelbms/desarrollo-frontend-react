const OpenLink = ({titulo, url})=> {
    return (
        <div className="content">
             <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {titulo}
        </a>
        </div>
    );
};
export default OpenLink