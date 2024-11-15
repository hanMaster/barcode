import { onMount, type Component } from 'solid-js';
import styles from './App.module.css';

const App: Component = () => {
    let imageCapture: any;
    let videoRef: HTMLVideoElement;

    const startVideo = async () => {
        if (videoRef !== undefined) {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment',
                },
            });
            videoRef.srcObject = mediaStream;
            videoRef.play();
            const track = mediaStream.getVideoTracks()[0];
            try {
                imageCapture = new ImageCapture(track);
                if (!imageCapture) {
                    alert('нет imageCapture');
                }
            } catch (e) {
                alert(e);
            }
        } else {
            alert('No video');
        }
    };

    const detectBarcode = async () => {
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
                <video style={{ width: '100%', height: '50vh', border: '1px solid crimson' }} ref={videoRef!}></video>
                <br />
                <div class={styles.btns}>
                    <button class={styles.scan} onClick={startVideo}>
                        Start video
                    </button>
                    <button class={styles.scan} onClick={detectBarcode}>
                        Scan
                    </button>
                </div>
            </header>
        </div>
    );
};

export default App;