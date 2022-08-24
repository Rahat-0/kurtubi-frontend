let swUrl = `${process.env.PUBLIC_URL}/sw.js`

export default function swDev() {
    console.log('working');
    navigator.serviceWorker.register(swUrl, (res) => {
        console.log('response', res);
    })
}