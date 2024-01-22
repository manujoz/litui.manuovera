import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "mjo-litui/mjo-textfield";

@customElement("my-component")
export class MyComponent extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `,
    ];

    render() {
        return html`<p>My component</p>
            <p>
                <mjo-textfield required error label="Nombre" counter selectOnFocus helperText="Este es el texto de ayuda" color="secondary"></mjo-textfield>
            </p>`;
    }
}
