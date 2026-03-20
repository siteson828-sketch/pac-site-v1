// ============================================================
//  PUBLIC ART COLLECTIONS — API KEYS
//  publicartcollections.org
// ============================================================
//  Only 3 keys needed. Everything else is already working.
//  Replace the placeholders below, save, re-upload to GitHub.
// ============================================================

const PAC_API_KEYS = {

  // EUROPEANA — 50 million works (Louvre, Prado, V&A, British Library...)
  // Get free key: https://pro.europeana.eu/page/get-api
  // Without key: 100 searches/day.  With key: 10,000/day.
  EUROPEANA: 'lindiscomel',

  // SMITHSONIAN — 2.8 million objects, 19 museums
  // Get free key: https://api.data.gov/signup/
  // (NOT api.si.edu — the key registration is at api.data.gov)
  SMITHSONIAN: 'AXWbdMwHM3mCBAabPUH98Gsg6lMNsIh8qx1kElgq',

  // HARVARD ART MUSEUMS — 250,000+ works, full gigapixel IIIF
  // Get free key: https://harvardartmuseums.org/collections/api
  // Harvard is DISABLED until a key is added here.
  HARVARD: 'd682a152-4b0b-4a83-b8f5-f9aa86d81372',

  // ✅ NO KEY NEEDED — already fully working:
  // Rijksmuseum (800k+) · Met Museum (470k+) · Art Inst. Chicago (100k+)
  // Cleveland (61k+) · National Gallery (56k+) · Getty (88k+) · V&A (1.2M+)
  //
  // RIGHTS: All results are filtered to CC0 / Public Domain only.
  // Non-commercial and restricted works are automatically excluded.

};

window.PAC_KEYS = PAC_API_KEYS;
