function Footer() {
    return (
        <>
            <footer>
                <article>
                    <img src="/Logo.svg" alt="Logo"></img>
                </article>
                <article>
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </article>

                <article>
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="/">Address</a></li>
                        <li><a href="/">Phone Number</a></li>
                        <li><a href="/">Email</a></li>
                    </ul>
                </article>

                <article>
                    <h4>Social Media Links</h4>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </article>
            </footer>
        </>
    );
}

export {Footer};