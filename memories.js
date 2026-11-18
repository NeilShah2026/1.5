/*
  ─────────────────────────────────────────────────────────────
   EDIT THIS FILE to fill in the site. (index.html runs the site.)
  ─────────────────────────────────────────────────────────────

  • Put photos/videos in the "photos" folder next to index.html.
  • media: one file  →  "photos/01.jpg"
           several   →  ["photos/01a.jpg", "photos/01b.mp4"]   (she can swipe between them)
           none yet  →  ""   (a soft placeholder shows instead)
    Videos: .mp4 works everywhere. (.mov from iPhone works in Safari, not always elsewhere.)
  • title: optional short headline for the month (e.g. "Our first date").
           Leave "" and it just shows the month name.
  • note:  your little message. To start a new line inside a note, type \n
*/

window.GIFT = {
  herName: "Anvi",              // shown on the envelope + header
  fromName: "Me",               // signs each note
  startDate: "2025-05-07",     // the day you two started dating (YYYY-MM-DD)

  // true  = each roll lands on a month she hasn't opened yet (until all 18 are found)
  // false = every roll is fully random (repeats can happen)
  onlyUnseen: true,

  months: [
    { media: "photos/web/01.jpg", title: "", note: "We go to your birthday (and first) Boston trip together!" },  // 1
    { media: "photos/web/02.jpg", title: "", note: "I forgot when this was after, but our method of pulling photos from videos worked!" },  // 2
    { media: "photos/web/03.jpg", title: "", note: "Our first time to the gym together! (I go to the gym every day tho too)" },  // 3
    { media: "photos/web/04.jpg", title: "", note: "CODE NINJASSSSSSSSSSSSS + Gyphon (Not Pictured Thankfully)" },  // 4
    { media: "photos/web/05.jpg", title: "", note: "First time at Garba! And we got to go again together last month!" },  // 5
    { media: "photos/web/06.jpg", title: "", note: "First Halloween together!! Also, did I return the shirt yet?" },  // 6
    { media: "photos/web/07.jpg", title: "", note: "I remember this day, but forget what time it was!!" },  // 7
    { media: "photos/web/08.jpg", title: "", note: "New hoodie!!" },  // 8
    { media: "photos/web/09.jpg", title: "", note: "Our first time going to a restaurant (even tho the Italian one had no lights)!" },  // 9
    { media: "photos/web/10.jpg", title: "", note: "SNOWWWWWW" },  // 10
    { media: "photos/web/11.jpg", title: "", note: "SNOWWWWWW 2x" },  // 11
    { media: "photos/web/12.jpg", title: "", note: "Only took a few 100 photos to get this one! (I loved them all tho)" },  // 12
    { media: "photos/web/13.jpg", title: "", note: "First time at Crecent Ridge!" },  // 13
    { media: "photos/web/14.jpg", title: "", note: "Prom!!" },  // 14
    { media: "photos/web/15.jpg", title: "", note: "My Graduation Party!" },  // 15
    { media: "photos/web/16.jpg", title: "", note: "Last day before I left for the Big B!" },  // 16
    { media: "photos/web/17.jpg", title: "", note: "Lepoard Print!!" },  // 17
    { media: ["photos/web/18a.jpg", "photos/web/18b.jpg"], title: "Tennis Club!", note: "Pumpkin Patch (First of Many!)" },  // 18
  ],

  // The secret "½" — unlocks after she has opened all 18 months.
  // Good spot for something about the future: a promise, a planned date, a coupon.
  half: {
    media: "",
    title: "The other half",
    note: "",
  },
};
