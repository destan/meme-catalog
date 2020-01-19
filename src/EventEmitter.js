import EventEmitter from 'eventemitter3'

const EE = new EventEmitter();


export const EVENT = {
    FILES_CHANGED: 'FILES_CHANGED',
};

export default EE;