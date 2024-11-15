import { onMount, type Component } from 'solid-js';
import styles from './App.module.css';

const App: Component = () => {
    const detectBarcode = async () => {
        if ('BarcodeDetector' in globalThis) {
            const barcodeDetector = new BarcodeDetector();
            try {
                const codes = await barcodeDetector?.detect([new ImageCapture().grabFrame()]);
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
                <button onClick={detectBarcode}>Scan</button>
            </header>
        </div>
    );
};

export default App;
