import { waitForElement } from "../scripts/waitForElement.js";


(() => {
    console.log('Loading compact view components...');

    waitForElement('._1Ky59qmywxOUtNcI1cgmkX._3s0lkohH8wU2do0K1il28Y').then(async (_, element) => {

        const parent = document.querySelector('._1Ky59qmywxOUtNcI1cgmkX._3s0lkohH8wU2do0K1il28Y');
        parent.append(...document.querySelector('._2D64jIEK7wpUR_NlObDW76').children);

        parent.insertAdjacentHTML('afterbegin', `
        <div title="Go back" class="button" id="back">
            <div class="icon">
                <!---->
            </div>
        </div>
        `);

        document.querySelector('#back').addEventListener('click', () => {
            window.opener.MainWindowBrowserManager.m_history.goBack()
        })

        document.querySelector('._19axKcqYRuaJ8vdYKYmtTQ, ._19axKcqYRuaJ8vdYKYmtTQ span')
            .style.fontFamily = '"Segoe UI Variable Text", "Segoe UI" !important';


        document.querySelector('._1ENHEsrSLcTRtPQFl1F-wL ._3cykd-VfN_xBxf3Qxriccm').insertAdjacentHTML('afterbegin', `
            <div class="_2Szzh5sKyGgnLUR870zbDE downloadsButton" id="downloads">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" class="_34bQcTHo5QKzuujoEyU1tm"></svg>
            </div>
            <div class="_2Szzh5sKyGgnLUR870zbDE friendsButton" id="friends">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" class="_34bQcTHo5QKzuujoEyU1tm"></svg>
            </div>
        `);

        const dowBut = document.querySelector("#downloads");
        dowBut.addEventListener("click", () => {
            window.opener.SteamUIStore.Navigate('/library/Downloads');
        })

        const friends = document.querySelector("#friends");
        friends.addEventListener("click", () => {
            window.opener.window.open('steam://open/friends/')
        })
    })

    waitForElement('div#sidebar').then(async (_, element) => {
        document.querySelector('div#sidebar').remove();
    })
    waitForElement('.activeIndicator').then(async (_, element) => {
        document.querySelector('.activeIndicator').remove();
    })
})()