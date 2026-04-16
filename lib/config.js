// lib/config.js
// Map friendly names to their internal Notion Page IDs.
// To find the ID, click on the page in your current website and copy the long string of letters and numbers from the URL.

export const customSlugMap = {
  // Example: 'friendly-url': '1234567890abcdef1234567890abcdef'
  'home': '10955b017282822f8be1017711359004',
  'works': '6c155b017282838b8bbf017bd5ab65d6',
  'CV': '32b55b017282822cadc4019343892b97',
  'A-Trip-to-the-Moon': 'b2c55b01728283d29f8e81bff95bd0db',
  'Abolish-the-Capital': '32855b01728280f697bfd2a79d95e5de',
  'YEEDORA': '32755b01728280dca38be4d272ee02',
  'How-to-Erase-The-Mekong-Dams': '32755b0172828007871ec009a2cbacfa',
  'In-Parallel-Universe': '32755b017282802d8a06ffaee4daaff9',
  'Across-the-River-Border': '32855b01728280e0bedaf76d1bbcae56',
  'FOLLYFOLLYFOLLY': '32855b017282807d88feea5014b10c87',
  'I-Run-Therefore-I-Am': '32855b01728280348e0fc1893d38806d',
  'Sound-of-Niarto': '32855b01728280248a41c2f1aba867cb',
  'Equinoctial': '32855b01728280488af6e61f8af8f880'
};

// Create a reverse map for rendering pretty links automatically
export const inverseSlugMap = Object.fromEntries(
  Object.entries(customSlugMap).map(([slug, id]) => [id, slug])
);
