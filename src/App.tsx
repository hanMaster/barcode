import { onMount, type Component } from 'solid-js';
import styles from './App.module.css';

const App: Component = () => {
    let imageCapture: any;

    onMount(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((mediaStream) => {
                const el = document.querySelector('video');
                alert(el);
                el!.srcObject = mediaStream;

                const track = mediaStream.getVideoTracks()[0];
                imageCapture = new ImageCapture(track);
                alert('imageCapture init success');
            })
            .catch((error) => alert(`onMount error: ${error}`));
    });

    const detectBarcode = async () => {
        alert('start');
        if ('BarcodeDetector' in globalThis) {
            const barcodeDetector = new BarcodeDetector();
            try {
                const image = await imageCapture.grabFrame();
                const codes = await barcodeDetector?.detect(image);
                codes.forEach((code: any) => {
                    alert(`Сканирован код: ${code.rawValue}`);
                });
            } catch (error) {
                alert(error);
            }
        } else {
            alert('Barcode not supported!');
        }
    };

    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <video style={{ width: '100%', height: '50vh', border: '1px solid crimson' }}></video>
                <br />
                <button class={styles.scan} onClick={detectBarcode}>
                    Scan
                </button>
            </header>
        </div>
    );
};

export default App;
