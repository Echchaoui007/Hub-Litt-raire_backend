import { createI18n } from "vue-i18n";

const messages = {
  en: {
    cookie: {
      content: `We use cookies We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from.`,
      yes: `I agree`,
      nop: `I decline`,
    },
    contact: {
      first: `ASK US FOR OUR UPDATED CATALOGS`,
      second: ` REQUEST A CUSTOMIZED COMMERCIAL PROPOSAL`,
      third: `A DEDICATED LOGISTICS SERVICE`,
      fourth: ` WE WILL REPLY YOU WITHIN 24 HOURS!!!!!`,
      send: `Contact us`,
    },
    navbar: {
      contact: `Contact`,
      about: `About Us`,
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
    cookie: {
      content: `Noi usiamo i cookies Noi usiamo i cookies e altre tecniche di
      tracciamento per migliorare la tua esperienza di navigazione nel nostro sito, per mostrarti contenuti
      personalizzati e annunci mirati, per analizzare il traffico sul nostro sito, e per capire da dove arrivano i
      nostri visitatori.`,
      yes: `Accetto`,
      nop: `Rifiuto`,
      contact: {
        first: `RICHIEDI I NOSTRI CATALOGHI AGGIORNATI `,
        second: ` UNA PROPOSTA COMMERCIALE PERSONALIZZATA`,
        third: `UN SERVIZIO LOGISTICO DEDICATO `,
        fourth: `TI RISPONDEREMO ENTRO 24 ORE!!!`,
        send: `Contattaci`,
      },

      navbar: {
        contact: `Contatti`,
        about: `Chi siamo`,
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
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE, // <--- 1
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, // <--- 2
    legacy: false, // <--- 3,
    messages: messages
  })