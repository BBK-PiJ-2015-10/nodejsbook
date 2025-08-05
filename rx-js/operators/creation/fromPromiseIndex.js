import {from} from 'rxjs';
import {readFile} from 'fs/promises';

// This is promise
from(readFile('input.txt', 'utf-8'))
    .subscribe((content => {
        console.log(`file: `, content);
    }))