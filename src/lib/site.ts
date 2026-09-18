/**
 * Yksi paikka Jeren muokattaville tiedoille.
 * Vaihda sähköposti tähän kun domain-posti on valmis.
 */
export const site = {
  name: "Laatusivut",
  person: "Jere Karvinen",
  city: "Jyväskylä",
  // Vaihda tähän esim. jere@laatusivut.fi
  email: "jerekarvinen08@gmail.com",
  phoneDisplay: "046 667 6653",
  phoneTel: "+358466676653",
  url: "https://laatusivut.fi",
  /** Tyhjä = lomake vahvistetaan ja ohjataan kiitos-sivulle. Laita tähän Formspree/Netlify-osoite kun kytket. */
  formEndpoint: "",
  vatNote:
    "Hintoihin lisätään ALV, jos laskutuspalvelu sen veloittaa. Saat tarkan luvun kartoituksessa.",
} as const;

export const packages = [
  {
    id: "startti",
    name: "Startti",
    price: 1490,
    featured: false,
    duration: "noin 2–3 viikkoa sisällöistä",
    pages: "1–5 sivua",
    blurb: "Yksi selkeä polku yhteydenottoon. Ammattimainen läsnäolo, ei templaattia.",
    who: "Yksinyrittäjälle, joka tarvitsee sivun nyt.",
    items: [
      "Räätälöity ulkoasu",
      "Toimii puhelimessa",
      "Yhteydenottolomake",
      "Perus-SEO",
      "Lakisivut",
      "6 kk pienet päivitykset",
    ],
  },
  {
    id: "yritys",
    name: "Yrityssivusto",
    price: 2890,
    featured: true,
    duration: "noin 3–5 viikkoa sisällöistä",
    pages: "Täysi sivusto",
    blurb:
      "Etusivu, palvelut, hinnasto tai prosessi, UKK, yhteystiedot ja lakisivut. Sivu jolla voi mainostaa.",
    who: "Pk-yritykselle, joka haluaa sivun joka tekee työtä.",
    items: [
      "Kaikki Startista",
      "Laajempi rakenne",
      "Apu teksteihin",
      "Hakukone-metat joka sivulle",
      "Evästelogiikka",
      "6 kk pienet päivitykset",
    ],
  },
  {
    id: "kasvu",
    name: "Kasvu",
    price: 4490,
    featured: false,
    duration: "tyypillisesti 5–8 viikkoa",
    pages: "Laajempi sivusto",
    blurb:
      "Yrityssivusto plus tilaa kasvaa: lisää sivuja, artikkelipohja tai yksi integraatio, esimerkiksi ajanvaraus.",
    who: "Kun sivu on osa myyntiä, ei vain käyntikortti.",
    items: [
      "Kaikki Yrityssivustosta",
      "Lisäsivut tarpeen mukaan",
      "Artikkelipohja tai yksi integraatio",
      "6 kk pienet päivitykset",
    ],
  },
] as const;

export const aftercare = {
  freeMonths: 6,
  smallChange: 89,
  monthly: 69,
};

export const processSteps = [
  {
    n: "01",
    title: "Kartoitus",
    text: "30 minuuttia. Kerrot mitä myyt ja kenelle. Lähetän kirjallisen hinta-arvion saman tai seuraavan arkipäivän aikana. Ei velvoitetta.",
  },
  {
    n: "02",
    title: "Rakenne ja luonnos",
    text: "Sovitaan sivut, tekstit ja ulkoasu. Näet luonnoksen ennen kuin koodia kirjoitetaan valmiiksi.",
  },
  {
    n: "03",
    title: "Toteutus",
    text: "Rakennan sivuston, lomakkeen, lakitekstit ja hakukone-metat. Saat väliversion kommentoitavaksi.",
  },
  {
    n: "04",
    title: "Julkaisu ja tuki",
    text: "Julkaistaan kun sisältö on kohdallaan. Pienet korjaukset kuuluvat kuuteen kuukauteen.",
  },
] as const;

export const faqs = [
  {
    q: "Mitä kartoitus maksaa?",
    a: "Ei mitään. Se on 30 minuutin puhelu tai videoyhteys. Kysyn tarpeen ja lähetän kirjallisen hinta-arvion saman tai seuraavan arkipäivän aikana. Ei velvoitetta.",
  },
  {
    q: "Kauanko sivuston tekeminen kestää?",
    a: "Startti noin 2–3 viikkoa, Yrityssivusto 3–5 viikkoa, Kasvu 5–8 viikkoa. Aika alkaa siitä kun tarvittavat sisällöt ovat kasassa. Jos kuvia tai tekstejä odotetaan, aikataulu venyy.",
  },
  {
    q: "Mitä minun pitää toimittaa?",
    a: "Logo jos sellainen on, yhteystiedot, lyhyt kuvaus palveluista, ja kuvia jos niitä on. Tekstejä voin auttaa kirjoittamaan. Jos logoa ei ole, sivusto rakennetaan typografisesti ilman keksittyä merkkiä.",
  },
  {
    q: "Mitä kuuluu kuuden kuukauden ilmaiseen tukeen?",
    a: "Pienet muutokset: tekstit, kuvat, aukioloajat, yhteystiedot, kirjoitusvirheet. Ei uusia sivuja, ei uutta visuaalista ilmettä, ei uutta palvelua.",
  },
  {
    q: "Entä kuuden kuukauden jälkeen?",
    a: `Pieni muutos maksaa ${aftercare.smallChange.toLocaleString("fi-FI")} € kertana. Vaihtoehtoisesti tuki ${aftercare.monthly.toLocaleString("fi-FI")} € kuukaudessa, jolloin pienet muutokset kuuluvat sopimukseen. Uusi sivu tai visuaalinen uusinta on aina erillinen tarjous.`,
  },
  {
    q: "Oletko yritys?",
    a: "Toimin kevytyrittäjänä Jyväskylästä. Laskutus kulkee laskutuspalvelun kautta. Sivulla ei ole Y-tunnusta, koska minulla ei ole osakeyhtiötä eikä toiminimeä.",
  },
  {
    q: "Entä jos en osaa päivittää sivua itse?",
    a: "Et tarvitse osata. Kuuden kuukauden ajan pienet muutokset kuuluvat hintaan. Sen jälkeen joko kertaveloitus tai kuukausituki. En jätä sinua yksin koodin kanssa.",
  },
  {
    q: "Teetkö verkkokauppaa?",
    a: "En myy verkkokauppaa pääpalveluna. Jos tarvitset pienen kaupan, kysy kartoituksessa. Usein yrityssivusto ja selkeä yhteydenotto riittää pidemmälle kuin puolivalmis kauppa.",
  },
] as const;

export const nav = [
  { to: "/palvelut", label: "Palvelut" },
  { to: "/hinnasto", label: "Hinnasto" },
  { to: "/miten-toimimme", label: "Miten toimimme" },
  { to: "/minusta", label: "Minusta" },
  { to: "/ukk", label: "UKK" },
] as const;

export const legalNav = [
  { to: "/tietosuoja", label: "Tietosuoja" },
  { to: "/evasteet", label: "Evästeet" },
  { to: "/kayttoehdot", label: "Käyttöehdot" },
  { to: "/saavutettavuus", label: "Saavutettavuus" },
] as const;
