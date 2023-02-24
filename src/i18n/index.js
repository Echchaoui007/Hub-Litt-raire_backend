import { createI18n } from "vue-i18n";

const messages = {
  en: {
    contact:{
        name:`Name`,
        email:`Email address`,
        phone:`Phone number`,
        message:`Message`,
        send:`Send`,
    },
    navbar:{
      contact: `Contact`,
      about:`About Us`,
    },
    about: {
      header: `Us from PARMEXPORT are guided firstly a sincere passion for our products that we
      market, we stock up from producers based in the food Valley Emiliana. Relying on us
      means being sure to try Italian products exclusively selected and reliable. We are able to
      offer the operators of the sector Ho.Re.Ca operating outside of the Italian territory, the best
      advice, optimising for the best timing of stock up, and thanks to our experienced logistics
      and collaborations with the best vectors, we are able to satisfy every need.
      PARMEXPORT wants to support their clients to make up any difficulty  of buying products
      in modest quantities with convenient prices, starting from these principles:`,
      sec2: `Best quality guarantee the most affordable price`,
      sec22: `Custom and research of products if asked by the client`,
      sec3: `Custom and research of products if asked by the client`,
      sec32: `Direct support fotlr the client`,
      sec4: `No minimum order constraint`,
      sec42: `Possibility of groupage of different types of goods (cold cuts,cheese,oil,wine ecc.)`,

    }
  },
  it: {
    contact:{
      name:`Nome`,
      email:`Indirizzo imail`,
      phone:`Numero di telefono`,
      message:`Messaggio`,
      send:`Inviare`,
  },
    navbar:{
      contact: `Contatti`,
      about:`Chi siamo`,
    },
    about: {
      header: `Noi di PARMEXPORT siamo guidati innanzitutto da una passione sincera per i prodotti italiani che
      commercializziamo, ci riforniamo da produttori ubicati nella Food Valley emiliana, promuovendo il
      più possibile le piccole imprese familiari.
      Affidarsi a noi significa essere certi di assaggiare prodotti italiani rigorosamente selezionati e
      garantiti.
      Siamo in grado di offrire agli operatori del settore Ho.Re.Ca. operanti fuori dal territorio italiano, la
      miglior consulenza, ottimizzando al meglio le tempistiche di approvvigionamento e grazie alla
      nostra esperienza logistica e la collaborazione con i migliori vettori siamo in grado di soddisfare
      ogni esigenza.
      PARMEXPORT vuole supportare i propri clienti a sopperire alla difficoltà di acquistare prodotti in
      quantità modeste a prezzi convenienti partendo da questi principi:`,
      sec2: ` Garanzia della migliore qualità al prezzo più conveniente `,
      sec22: `Ricerca di prodotti particolari su richiesta del cliente`,
      sec3: `Velocità nell'evasione dell'ordine `,
      sec32: `Supporto diretto al cliente`,
      sec4: ` Possibilità di groupage di diverse tipologie merceologiche (salumi, formaggi, olio, vini ecc)`,
      sec42: `Servizio di consulenza logistica e disbrigo eventuali pratiche doganali`,
    }
  }
}

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE, // <--- 1
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, // <--- 2
  legacy: false, // <--- 3,
  messages: messages
})