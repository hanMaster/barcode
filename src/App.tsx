import { onMount, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
    onMount(() => {
        // check compatibility
        if (!('BarcodeDetector' in globalThis)) {
            console.log('Barcode Detector is not supported by this browser.');
            alert('Barcode Detector is not supported by this browser.');
        } else {
            console.log('Barcode Detector supported!');
            alert('Barcode Detector supported!');

            // create new detector
            const barcodeDetector = new BarcodeDetector({
                formats: ['code_39', 'codabar', 'ean_13'],
            });
            // check supported types
            BarcodeDetector.getSupportedFormats().then((supportedFormats: any) => {
                supportedFormats.forEach((format: any) => alert(format));
            });
        }
    });
    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <img src={logo} class={styles.logo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a class={styles.link} href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">
                    Learn Solid
                </a>
            </header>
        </div>
    );
};

export default App;
