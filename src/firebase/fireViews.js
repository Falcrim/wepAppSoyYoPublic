import { db } from "./firebase";
import { collection, addDoc, updateDoc, doc, getDoc, setDoc} from "firebase/firestore";
/*const storage = getStorage(fireApp);*/

/*const docRef = doc(dbase, 'PaginasCounter', 'usuario3')
updateDoc(docRef, {
  perfilPublico: +1,
  kilacute: 0
})
setDoc(docRef, {
  perfilPublico: 0,
  kilacute: 0
});*/
export function addCollection(){
  addDoc(collection(db, "VisitsCounter"),{});
}

export function addUser(idUser){
  const docRef = doc(db, "VisitsCounter", idUser);
  setDoc(docRef, {
    publicProfile: null,
    whatsapp: null,
    instagram: null,
    phone: null,
    email: null,
    linkedin: null,
    twitch: null,
    twitter: null,
    tiktok: null,
    facebook: null,
    qrOffline: null,
    shareRRSS: null
  });
}

export function addVista(socialMedia, idUser) {
  const docRef = doc(db, 'VisitsCounter', idUser)
  let listaVistas = [];
  let numeroVistas = 0;
  getDoc(docRef)
    .then((doc) => {
      listaVistas = doc.data();
      switch (socialMedia) {
        case 'publicProfile':
          numeroVistas = listaVistas.perfilPublico;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            perfilPublico: numeroVistas
          });
          break;
        case 'whatsapp':
          numeroVistas = listaVistas.whatsapp;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            whatsapp: numeroVistas
          });
          break;
        case 'phone':
          numeroVistas = listaVistas.telefono;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            telefono: numeroVistas
          });
          break;
        case 'maps':
          numeroVistas = listaVistas.mapa;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            mapa: numeroVistas
          });
          break;
        case 'instagram':
          numeroVistas = listaVistas.instagram;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            instagram: numeroVistas
          });
          break;
        case 'linkedin':
          numeroVistas = listaVistas.linkedin;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            linkedin: numeroVistas
          });
          break;
        case 'email':
          numeroVistas = listaVistas.correo;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            correo: numeroVistas
          });
          break;
        case 'tiktok':
          numeroVistas = listaVistas.tiktok;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            tiktok: numeroVistas
          });
          break;
          case 'twitter':
          numeroVistas = listaVistas.twitter;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            twitter: numeroVistas
          });
          break;
          case 'facebook':
          numeroVistas = listaVistas.facebook;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            facebook: numeroVistas
          });
          break;
          case 'twitch':
          numeroVistas = listaVistas.twitch;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            twitch: numeroVistas
          });
          break;
          case 'qrOffline':
          numeroVistas = listaVistas.qrOffline;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            qrOffline: numeroVistas
          });
          case 'shareRRSS':
          numeroVistas = listaVistas.shareRRSS;
          numeroVistas = notNull(numeroVistas);
          updateDoc(docRef, {
            shareRRSS: numeroVistas
          });
          break;
        default:
          break;
      }
    })
    .catch(err => {
      console.log(err);
    });

}

function notNull(numero) {
  if (isNaN(parseFloat(numero))) {
    numero = 1;
  } else {
    numero++;
  }
  return numero;
}
