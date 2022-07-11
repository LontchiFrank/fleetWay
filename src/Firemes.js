import { getMessaging, getToken, onMessage } from "firebase/messaging";

const messaging = getMessaging(firebaseApp);

export default messaging;
