import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement("sidebar-button")
export default class SidebarButton extends LitElement {
    @property()
    icon = 'static/emojis/waving-hand.png';

    @property()
    title = 'Unknown button';

    render() {
        return html`
            <button>
                <img src="${this.icon}" alt="">

                <span>${this.title}</span>
            </button>
        `;
    };

    static styles = css`
        button {
            background-color: transparent;
            border: transparent;
            font-size: 100%;
            cursor: pointer;
            line-height: inherit;
            font-family: inherit;

            width: 100%;
            text-align: left;
            color: rgb(209, 213, 219);
            margin: 0.25rem 0;
            padding: 0.5rem 1.5rem;
            border-radius: 1rem;
        }

        img {
            display: inline;
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.25rem;
        }

        button:hover {
            background-color: rgb(39, 39, 42)
        }
    `;
};