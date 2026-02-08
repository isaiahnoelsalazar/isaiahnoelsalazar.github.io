<?php
$message = "This message exists because GitHub doesn't recognize PHP without the tag. It defaults to Hack, which is similar to PHP.";
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=7">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#1F1F1F">
        <meta name="msapplication-TileColor" content="#1F1F1F">
        <title>Sample Organization</title>
        <style>
            :root {
                --black: #1F1F1F;
                --green: #0bb608;
                --feldgrau: #3B5249;
                --light-green: #dbffdf;
                --light-light-green: #f5fff2;
                --gray: #DDDDDD;
                --dark-gray: #CCCCCC;
                --hover: #00000033;
                --dark: #00000055;
                --hovered-green: #038500;
                --dark-green: #064a00;
                --light-gray: #F8F8F8;
            }
            @font-face {
                font-family: PlusJakartaSans;
                src: url("resources/PlusJakartaSans-VariableFont_wght.ttf");
            }
            @keyframes fade-in {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            @keyframes fade-in-no-transform {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            @keyframes slide-in {
                from {
                    transform: translateX(-250px);
                }
                to {
                    transform: translateX(0);
                }
            }
            @keyframes fade-out-no-transform {
                from {
                    opacity: 1;
                }
                to {
                    opacity: 0;
                }
            }
            @keyframes slide-out {
                from {
                    transform: translateX(0);
                }
                to {
                    transform: translateX(-250px);
                }
            }
            /* @keyframes slide-up-bg {
                from {
                    background: none;
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    background: linear-gradient(var(--light-green), var(--light-light-green));
                    opacity: 1;
                    transform: translateY(0);
                }
            } */
            * {
                color: var(--black);
                font-family: PlusJakartaSans, sans-serif;
                box-sizing: border-box;
            }
            html {
                scroll-behavior: smooth;
                -webkit-tap-highlight-color: transparent;
            }
            body {
                background-color: var(--light-light-green);
                margin: 0;
            }
            /* .fade-in-no-transform {
                animation: fade-in-no-transform 0.8s ease-out forwards;
                opacity: 0;
                transition: opacity 0.8s ease-out;
            } */
            .fade-in {
                animation: fade-in 0.8s ease-out forwards;
                opacity: 0;
                /* transform: translateY(20px);
                transition: opacity 0.8s ease-out, transform 0.8s ease-out; */
            }
             .fade-in-250 {
                animation: fade-in 0.8s ease-out 250ms forwards;
                opacity: 0;
                /* transform: translateY(20px);
                transition: opacity 0.8s ease-out 500ms, transform 0.8s ease-out 500ms; */
            }
            .fade-in-500 {
                animation: fade-in 0.8s ease-out 500ms forwards;
                opacity: 0;
                /* transform: translateY(20px);
                transition: opacity 0.8s ease-out 500ms, transform 0.8s ease-out 500ms; */
            }
            .fade-in-750 {
                animation: fade-in 0.8s ease-out 750ms forwards;
                opacity: 0;
                /* transform: translateY(20px);
                transition: opacity 0.8s ease-out 750ms, transform 0.8s ease-out 750ms; */
            }
            /* .fade-in-1000 {
                animation: fade-in 0.8s ease-out 1000ms forwards;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.8s ease-out 1000ms, transform 0.8s ease-out 1000ms;
            }
            .fade-in-1250 {
                animation: fade-in 0.8s ease-out 1250ms forwards;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.8s ease-out 1250ms, transform 0.8s ease-out 1250ms;
            } */
            /* .visible {
                opacity: 1;
                transform: translateY(0);
            } */
            header {
                align-items: center;
                background-color: var(--feldgrau);
                border-bottom: var(--dark) 1px solid;
                color: white;
                display: flex;
                gap: 16px;
                height: 64px;
                justify-content: center;
                position: sticky;
                top: 0;
                z-index: 1;
            }
            header > a, #drawer > a {
                border-radius: 8px;
                cursor: pointer;
                margin: 0;
                padding: 16px;
                text-decoration: none;
            }
            header > a {
                color: white;
            }
            #drawer > a:hover {
                background-color: var(--light-green);
            }
            header > a::after {
                background: white;
                content: "";
                display: block;
                height: 1.25px;
                transform: scale(0);
                transition: transform 0.2s ease-in-out;
                width: 100%;
            }
            header > a:hover::after {
                transform: scale(1);
            }
            #logo, #menu {
                align-items: center;
                cursor: pointer;
                display: flex;
                font-weight: bold;
                gap: 8px;
                left: 0;
                padding-left: 32px;
                position: absolute;
            }
            #logo > p {
                color: white;
            }
            #menu > img, #logo > img {
                height: 24px;
                width: 24px;
            }
            #account > img, #cart > img {
                height: 24px;
                width: 24px;
            }
            #account, #cart {
                align-items: center;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                margin-right: 16px;
                padding: 8px;
                position: absolute;
                right: 0;
            }
            #cart {
                margin-right: 56px;
            }
            #account:hover, #cart:hover {
                background-color: var(--hover);
            }
            #main-content {
                align-items: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            #products {
                align-items: center;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                padding: 32px;
                width: 100%;
            }
            #products > div {
                align-items: center;
                border-radius: 16px;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                gap: 16px;
                justify-content: center;
                padding: 16px 0 24px 0;
                width: 100%;
            }
            #products > div:hover {
                background-color: var(--hover);
            }
            #products > div > img {
                aspect-ratio: 1 / 1;
                background-color: white;
                border-radius: 8px;
                box-shadow: 8px 8px 16px var(--gray), -8px -8px 16px var(--light-gray);
                width: calc(100% - 32px);
            }
            #products > div > p, #products > div > h1 {
                color: var(--black);
                margin: 0;
                text-align: center;
            }
            #intro {
                align-items: center;
                background: linear-gradient(white, var(--light-light-green), var(--light-light-green), var(--light-green), var(--light-light-green));
                display: flex;
                flex-direction: column;
                height: calc(100vh - 64px - 32px);
                justify-content: center;
                padding-bottom: 64px;
                width: 100%;
            }
            #intro > p {
                color: var(--dark-green);
            }
            #intro-bg {
                /* Photo by Nataliya Vaitkevich: https://www.pexels.com/photo/flat-lay-photo-of-alternative-medicines-7615574/ */
                background-image: url("resources/bg2.jpg");
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                height: 100%;
                opacity: 0;
                position: absolute;
                width: 100%;
                z-index: -1;
            }
            #intro-video {
                height: 100%;
                object-fit: cover;
                opacity: 0.5;
                position: absolute;
                width: 100%;
                z-index: -1;
            }
            #intro-bg-blur {
                background-color: var(--light-light-green);
                bottom: 0;
                box-shadow: var(--light-light-green) 0px 0px 20px 20px;
                height: 10%;
                position: fixed;
                width: 100%;
            }
            #intro > a {
                align-items: center;
                bottom: 0;
                cursor: pointer;
                display: flex;
                height: 64px;
                justify-content: center;
                position: fixed;
                width: 100%;
            }
            #intro > a > img {
                height: 48px;
                width: 48px;
            }
            #intro > p {
                font-size: 100px;
                letter-spacing: 1px;
                padding: 0 100px;
            }
            .separator {
                background-color: var(--hover);
                border-radius: 8px;
                height: 2px;
                margin: 0 0 16px 0;
                width: 100%;
            }
            #pricing {
                /* Photo by Rene Terp: https://www.pexels.com/photo/gazebo-against-trees-334978/ */
                background-image: url("resources/bg1.jpg");
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                width: 100%;
            }
            #certificates {
                align-items: center;
                display: grid;
                gap: 32px;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                padding: 32px;
                width: 100%;
            }
            #pricing-inside {
                align-items: center;
                background-color: var(--dark);
                -webkit-backdrop-filter: blur(5px);
                backdrop-filter: blur(5px);
                display: flex;
                flex-direction: column;
                padding: 16px 0;
                text-align: center;
                width: 100%;
            }
            #certificates > div > img {
                border-radius: 16px;
                width: 100%;
            }
            .to-fade-in, .to-fade-in-750 {
                opacity: 0;
            }
            #pricing-inside > p {
                margin: 0 0 32px 0;
            }
            #pricing-inside > :nth-child(n) {
                color: white;
                width: 720px;
            }
            form, #chart {
                background-color: white;
                border-radius: 16px;
                box-shadow: 0 0 16px var(--dark-gray);
                display: flex;
                flex-direction: column;
                padding: 32px;
                width: 720px;
            }
            #contact-bg {
                background-color: var(--feldgrau);
                display: flex;
                justify-content: center;
                padding: 0 0 32px 0;
                width: 100%;
            }
            form {
                background-color: var(--light-light-green);
                margin: 32px 0 0 0;
            }
            #chart {
                background-color: var(--light-green);
                margin: 0 0 32px 0;
            }
            #chart > div {
                align-items: center;
                display: flex;
            }
            #chart > div > :nth-child(n) {
                text-align: center;
                width: 33%;
            }
            #chart > div:first-child {
                text-align: center;
            }
            form > h2, form > p {
                margin: 0 0 16px 0;
            }
            form > p:last-child {
                margin: 0;
            }
            #subfooter > div > div > div > input, form > input, form > textarea {
                border: solid var(--gray) 2px;
                border-radius: 8px;
                margin-bottom: 16px;
                padding: 16px;
                resize: none;
                width: 100%;
            }
            #subfooter > div > div > div > input:focus, form > input:focus, form > textarea:focus {
                border-color: var(--green);
                outline: none;
            }
            form > button {
                background-color: var(--green);
                border: none;
                border-radius: 8px;
                color: white;
                cursor: pointer;
                font-weight: bold;
                padding: 16px;
                width: 100%;
            }
            form > button:hover {
                background-color: var(--hovered-green);
            }
            footer {
                align-items: center;
                background-color: var(--black);
                display: flex;
                height: 56px;
                justify-content: center;
            }
            footer > p {
                color: white;
                margin: 0;
            }
            #subfooter {
                background-color: var(--black);
                display: flex;
            }
            #subfooter > div {
                color: white;
                display: flex;
                padding: 32px;
                width: 50%;
            }
            #subfooter > div > div {
                color: white;
                display: flex;
                flex-direction: column;
            }
            #subfooter > div:last-child > div:first-child {
                width: 33%;
            }
            #subfooter > div:last-child > div:last-child {
                width: 67%;
            }
            #subfooter > div:first-child {
                flex-direction: column;
            }
            #subfooter > div > h2, #subfooter > div > div > h2, #subfooter > div > p, #subfooter > div > div > a {
                color: white;
            }
            #subfooter > div > div > div {
                display: inline-block;
                position: relative;
            }
            #subfooter > div > div > div > a {
                align-items: center;
                border-radius: 50%;
                display: flex;
                height: 32px;
                justify-content: center;
                margin: 11px 10px;
                position: absolute;
                right: 0;
                top: 0;
                width: 32px;
            }
            #subfooter > div > div > div > a:hover {
                background-color: var(--hover);
            }
            #subfooter > div > div > div > a > img {
                height: 24px;
                width: 24px;
            }
            #subfooter > div > div > a {
                margin-bottom: 16px;
            }
            #subfooter > div > p {
                margin: 0;
            }
            #menu {
                display: none;
            }
            #drawer {
                animation: slide-in 0.2s ease-out forwards;
                background-color: var(--light-light-green);
                display: none;
                flex-direction: column;
                height: 100vh;
                left: 0;
                padding: 16px;
                position: fixed;
                top: 0;
                width: 250px;
                z-index: 2;
            }
            #drawer-shadow {
                animation: fade-in-no-transform 0.2s ease-out forwards;
                background-color: rgba(0, 0, 0, 0.5);
                display: none;
                height: 100vh;
                left: 0;
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1;
            }
            marquee {
                align-items: center;
                background-color: var(--black);
                color: white;
                display: flex;
                height: 32px;
                top: 0;
                z-index: 2;
            }
            @media screen and (max-width: 960px) {
                #subfooter, #subfooter > div {
                    flex-direction: column;
                    width: 100%;
                }
                #subfooter {
                    padding: 32px;
                }
                #subfooter > div {
                    padding: 0;
                }
                #menu > img {
                    height: 24px;
                    width: 24px;
                }
                #certificates {
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                }
                #menu {
                    align-items: center;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    left: 0;
                    margin-left: 16px;
                    padding: 8px;
                    position: absolute;
                }
                #intro {
                    height: calc(100vh - 128px);
                }
                #menu:hover {
                    background-color: var(--hover);
                }
                h1 {
                    font-size: larger;
                }
                h2 {
                    font-size: medium;
                }
                p {
                    font-size: small;
                }
                #intro > p {
                    font-size: 48px;
                    padding: 0 32px;
                }
                #products > div > img {
                    max-width: 250px;
                }
                #products > p {
                    padding: 0 16px;
                    width: calc(100% - 64px);
                }
                #pricing-inside > :nth-child(n), form, #chart {
                    padding: 16px;
                    width: calc(100% - 64px);
                }
                #contact > h2:first-child {
                    margin: 8px 0 16px 0;
                }
                #pricing-inside > h1 {
                    padding: 8px;
                    margin: 0;
                }
                #pricing-inside > p {
                    margin: 0 0 16px 0;
                }
                header {
                    justify-content: center;
                }
                #logo {
                    padding: 0;
                    position: unset;
                }
                header > a {
                    display: none;
                }
            }
        </style>
    </head>
    <body id="home">
        <marquee direction="left">New arrivals 20% off!</marquee>
        <header>
            <div id="menu" onclick="showMenu()">
                <img src="resources/menu.png" alt="menu">
            </div>
            <div id="logo" onclick="window.scrollTo({ top: document.getElementById('home'), behavior: 'smooth' })">
                <img src="resources/logo.png" alt="logo">
                <p>Sample Organization</p>
            </div>
            <a href="#home">Home</a>
            <a href="products.html">Products</a>
            <a href="pricing.html">Pricing</a>
            <a href="contact.html">Contact</a>
            <div id="cart" onclick="window.location.href='cart.html'">
                <img src="resources/cart.png" alt="cart">
            </div>
            <div id="account" onclick="window.location.href='login.html'">
                <img src="resources/account.png" alt="account">
            </div>
        </header>
        <div id="main-content">
            <div id="intro" class="fade-in-500">
                <!-- Video by Pressmaster: https://www.pexels.com/video/a-woman-meditating-on-a-platform-overseeing-the-rice-field-3209148/ -->
                <div id="intro-bg"></div>
                <video id="intro-video" playsinline autoplay muted loop>
                    <source src="resources/bgvideo.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p>Natural Relief, Doctor Approved.</p>
                <div id="intro-bg-blur"></div>
                <a onclick="window.scrollTo({ top: document.getElementById('product').offsetTop - 96, behavior: 'smooth' })">
                    <img src="resources/arrow_down.png" alt="arrow_down">
                </a>
            </div>
            <div id="products">
                <div>
                    <!-- Photo by SHVETS production: https://www.pexels.com/photo/green-and-white-tablets-9742861/ -->
                    <img id="product" src="resources/category1.jpg" alt="category1">
                    <h1>Category 1</h1>
                </div>
                <div>
                    <!-- Photo by Thirdman  : https://www.pexels.com/photo/close-up-photo-of-medicinal-pills-7659898/ -->
                    <img id="product" src="resources/category2.jpg" alt="category2">
                    <h1>Category 2</h1>
                </div>
                <div>
                    <!-- Photo by Tree of Life Seeds: https://www.pexels.com/photo/photo-of-bottle-on-plate-3259596/ -->
                    <img id="product" src="resources/category3.jpg" alt="category3">
                    <h1>Category 3</h1>
                </div>
                <div>
                    <!-- Photo by SHVETS production: https://www.pexels.com/photo/yellow-capsules-and-pink-pill-on-green-surface-9742809/ -->
                    <img id="product" src="resources/category4.jpg" alt="category4">
                    <h1>Category 4</h1>
                </div>
            </div>
            <div id="pricing">
                <div id="pricing-inside">
                    <h1 class="to-fade-in">Recommended by the experts who care for your health the most—trusted by doctors, made for people like you.</h1>
                    <div class="to-fade-in-750" id="certificates">
                        <div>
                            <img src="resources/cert1.png" alt="certificate_1">
                        </div>
                        <div>
                            <img src="resources/cert2.png" alt="certificate_2">
                        </div>
                        <div>
                            <img src="resources/cert3.png" alt="certificate_3">
                        </div>
                        <div>
                            <img src="resources/cert4.png" alt="certificate_4">
                        </div>
                    </div>
                    <!-- <div id="chart">
                        <div>
                            <h2>Tier</h2>
                            <h2>Price</h2>
                            <h2>Minimum Order</h2>
                        </div>
                        <div class="separator"></div>
                        <div>
                            <h2>Tier 1</h2>
                            <p>$100</p>
                            <p>10 units</p>
                        </div>
                        <div>
                            <h2>Tier 2</h2>
                            <p>$90</p>
                            <p>50 units</p>
                        </div>
                        <div>
                            <h2>Tier 3</h2>
                            <p>$80</p>
                            <p>100 units</p>
                        </div>
                    </div> -->
                </div>
            </div>
            <div id="contact-bg">
                <form id="contact">
                    <h2>Feel free to reach out to us for more information.</h2>
                    <p>Email: sampleemail@sampleorganization.com</p>
                    <p>Phone: +63 912 345 6789</p>
                    <div class="separator"></div>
                    <h2>Or, directly send us a message using this form.</h2>
                    <input type="text" name="name" placeholder="Your name" required>
                    <input type="email" name="email" placeholder="Your email" required>
                    <textarea name="message" rows="10" placeholder="Your message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
        <div id="subfooter">
            <div>
                <h2>About the shop</h2>
                <p>Sample Organization aims to showcase safe and effective medicinal products that anyone can buy with a click of a button.</p>
                <div>
                    <h2>Subscribe to our emails</h2>
                    <div>
                        <input type="email" placeholder="Enter your email" required>
                        <a>
                            <img src="resources/arrow_next.png" alt="arrow_next">
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2>Policies</h2>
                    <a href="#">Policy 1</a>
                    <a href="#">Policy 1</a>
                    <a href="#">Policy 1</a>
                    <a href="#">Policy 1</a>
                    <a href="#">Policy 1</a>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <a href="#">sampleemail@sampleorganization.com</a>
                    <a href="#">+63 912 345 6789</a>
                </div>
            </div>
        </div>
        <footer>
            <p>&copy; 2025 Sample Organization. All rights reserved.</p>
        </footer>
        <div id="drawer-shadow" onclick="hideMenu()"></div>
        <div id="drawer">
            <a href="#home">Home</a>
            <a href="products.html">Products</a>
            <a href="pricing.html">Pricing</a>
            <a href="contact.html">Contact</a>
        </div>
    </body>
    <script>
        const targets = document.querySelectorAll('.to-fade-in');
        const ll = target => {
            const io = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.disconnect();
                    }
                });
            });
            io.observe(target);
        };
        targets.forEach(ll);
        const targets750 = document.querySelectorAll('.to-fade-in-750');
        const ll750 = target => {
            const io = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-250');
                        observer.disconnect();
                    }
                });
            });
            io.observe(target);
        };
        targets750.forEach(ll750);
        window.onload = function (){
            if (window.location.hash.endsWith('products')) {
                window.scrollTo({ top: document.getElementById('products').offsetTop - 64, behavior: 'smooth' });
            }
            if (window.location.hash.endsWith('pricing')) {
                window.scrollTo({ top: document.getElementById('pricing').offsetTop - 56, behavior: 'smooth' });
            }
            if (window.location.hash.endsWith('contact')) {
                window.scrollTo({ top: document.getElementById('contact').offsetTop - 95, behavior: 'smooth' });
            }
        };
        function showMenu() {
            const drawer = document.getElementById('drawer');
            const drawer_shadow = document.getElementById('drawer-shadow');
            if (drawer.style.display === 'none' || drawer.style.display === '') {
                drawer.style.display = 'flex';
                drawer_shadow.style.display = 'flex';
                drawer.style.animation = 'slide-in 0.2s ease-out forwards';
                drawer_shadow.style.animation = 'fade-in-no-transform 0.2s ease-out forwards';
            }
        }
        function hideMenu() {
            const drawer = document.getElementById('drawer');
            const drawer_shadow = document.getElementById('drawer-shadow');
            drawer.style.animation = 'slide-out 0.2s ease-out forwards';
            drawer_shadow.style.animation = 'fade-out-no-transform 0.2s ease-out forwards';
            setTimeout(() => {
                drawer.style.display = 'none';
                drawer_shadow.style.display = 'none';
            }, 200);
        }
    </script>
</html>