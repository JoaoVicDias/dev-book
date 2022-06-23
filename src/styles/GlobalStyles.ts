import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button {
        border: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    h1 {
        font-family: 'Ubuntu';
        font-weight: 700;
        font-size: 2.25rem;
    }

    h2 {
        font-family: 'Ubuntu';
        font-weight: 500;
        font-size: 1.5rem;
    }

    h3 {
        font-family: 'Ubuntu';
        font-weight: 500;
        font-size: 1.125rem;
    }

    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.75rem;
    }

    @media(max-width:767px) {
        h1 {
            font-size: 1.75rem;
        }

        h2 {
            font-size: 1.25rem;
        }

        h3 {
            font-size: 1rem;
        }
    }
`;
