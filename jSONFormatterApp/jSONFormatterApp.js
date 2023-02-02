import { LightningElement } from 'lwc';

export default class JSONFormatterApp extends LightningElement {

    handleFormat(){
    const inputJsonField = this.refs.inputArea.value;
    const formatted = JSON.stringify(JSON.parse(inputJsonField), null, 4);
    this.refs.outputArea.value = formatted;
    }

    handleMinify(){
        const inputJsonField = this.refs.inputArea.value;
        const minified = JSON.stringify(JSON.parse(inputJsonField));
        this.refs.outputArea.value = minified;
    }

    handlePrettify(){
        const inputJsonField = this.refs.inputArea.value;
        const prettify = JSON.stringify(JSON.parse(inputJsonField),null,2);
        this.refs.outputArea.value = prettify;
    }
}