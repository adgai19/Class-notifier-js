import { notify } from 'node-notifier';

const Class = "New Class";
notify({title: Class, message: "You have " + Class + " now"})
