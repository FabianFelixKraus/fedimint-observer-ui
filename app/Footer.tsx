function currentYear() {
    return new Date().getFullYear();
}

function Footer() {
    return (
        <footer className="flex justify-between w-100">
            <p>Fedimint Observer UI</p>
            <p>{currentYear()}</p>
            <p>Berlin Cashu Hackdays 2k24</p>
         </footer>
    );
};
  
  export default Footer;