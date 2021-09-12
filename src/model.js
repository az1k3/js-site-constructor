import image from './assets/image.jpg';
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks';
import {colAlign, colColors, colSize, colValue} from './utils';


const text = `Developed by <a href="https://github.com/az1k3/">az1k3</a>`;


export const model = [
    new TitleBlock('Конструктор сайтов на JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240);',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem',

        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '900px',
            height: 'auto'
        },
        alt: 'MirageWebs'
    }),
    new ColumnsBlock([
        colValue,
        colColors,
        colAlign,
        colSize
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold',
            'text-align': 'center',
        }
    }),
];