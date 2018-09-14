const cpx = require("cpx");

cpx.copy(
  "node_modules/source-serif-pro/**/*",
  "static/fonts/source-serif"
)

cpx.copy(
  "node_modules/@ibm/plex/IBM-Plex-Sans/fonts/**/*",
  "static/fonts/plex/IBM-Plex-Sans/fonts/"
)

cpx.copy(
  "node_modules/@ibm/plex/IBM-Plex-Sans-Condensed/fonts/**/*",
  "static/fonts/plex/IBM-Plex-Sans-Condensed/fonts"
)

cpx.copy(
  "node_modules/@ibm/plex/IBM-Plex-Serif/fonts/**/*",
  "static/fonts/plex/IBM-Plex-Serif/fonts"
)
