import { onMount, type Component } from 'solid-js';
import styles from './App.module.css';

const App: Component = () => {
    let imageCapture: any;

    onMount(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((mediaStream) => {
                document.querySelector('video')!.srcObject = mediaStream;

                const track = mediaStream.getVideoTracks()[0];
                imageCapture = new ImageCapture(track);
            })
            .catch((error) => alert(`onMount error: ${error}`));
    });

    const detectBarcode = async () => {
        if ('BarcodeDetector' in globalThis) {
            const barcodeDetector = new BarcodeDetector();
            try {
                const codes = await barcodeDetector?.detect([imageCapture?.grabFrame()]);
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
                <video></video>
                <button onClick={detectBarcode}>Scan</button>
            </header>
        </div>
    );
};

export default App;
