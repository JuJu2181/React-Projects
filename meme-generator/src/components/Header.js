export default function Header() { 
    return (
        <header className="header">
            <img src={require(`../assets/images/trollface.png`)} alt="troll face"  className="header-img"/>
            <h1 className="header-title">Meme Generator</h1>
            <h2 className="header-desc">Developed By - Anish Shilpakar</h2>
        </header>
    );
}