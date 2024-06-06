import EventEmitter from "events";
const bus = new EventEmitter();
bus.setMaxListeners(20); // Aumenta o Limite de Listeners
export default bus;

