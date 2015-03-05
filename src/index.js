var ads = [
  '<a href="http://goo.gl/yyLxOY" target="new">Like Android Wear? What about farts? Get the Remote Whoopee Cushion!</a>',
  '<a href="http://www.amazon.com/gp/product/B00DR0PDNE/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00DR0PDNE&linkCode=as2&tag=thatmikeflynn-20&linkId=TLLLAAAJ364BVC7W" target="new">Already using Chrome? Cast something!</a>',
  '<a href="http://www.amazon.com/gp/product/B00IYA2SMQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00IYA2SMQ&linkCode=as2&tag=thatmikeflynn-20&linkId=MLX6EXJQAV3NQMVK" target="new">Listening to Beats while listening with Beats is just want Dr. Dre wants.</a>',
  '<a href="http://www.amazon.com/gp/product/B005FOCNSS/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B005FOCNSS&linkCode=as2&tag=thatmikeflynn-20&linkId=6SQCT5G7G7KHLLK2" target="new">Listening at home? Just cave and buy these. Totally worth it.</a>',
  '<a href="http://amzn.to/1DOLA6x" target="new">"Dirty Work" is some of Norm MacDonald\'s finest work.</a>',
  '<a href="http://www.amazon.com/gp/product/B003L1ZYYM/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B003L1ZYYM&linkCode=as2&tag=thatmikeflynn-20&linkId=SLBWGPQKRWBYBGZY" target="new">You need more HDMI cables. Everyone does.</a>',
  '<a href="http://amzn.to/17TzgsS" target="new">I have a Fire TV Stick, and it\'s actually pretty great.</a>',
  '<a href="http://www.amazon.com/gp/product/B005TGLCUW/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B005TGLCUW&linkCode=as2&tag=thatmikeflynn-20&linkId=KDAV5LCOUOQHJDSB" target="new">How do you not own this Li\'l Sebastian shirt?!</a>',
  '<a href="http://www.amazon.com/gp/prime/pipeline/prime_gifting_landing/?ref_=assoc_tag_ph_1415183446617&ie=UTF8&camp=1789&creative=9325&linkCode=pf4&tag=thatmikeflynn-20&linkId=RLNQUE7GO5OPRM2N" target="new">Give your friend Amazon Prime and get back to your music.</a>',
  '<a href="http://goo.gl/AXo9qV" target="new">Follow me on Twitter, then listen to The Smashing Pumpkins while you read my tweets.</a>'
];

function updateAd() {
  document.querySelector('#ad').innerHTML = ads[Math.floor(Math.random() * ads.length)];
}

window.onresize = function(event) {
  document.querySelector('#frame').style.width = window.innerWidth + "px";
  document.querySelector('#frame').style.height = window.innerHeight - 36 + "px";
};

window.onload = function(event) {
  document.querySelector('#backBtn').addEventListener("click", function(e) {
    document.querySelector('#frame').back();
  });

  document.querySelector('#forwardBtn').addEventListener("click", function(e) {
    document.querySelector('#frame').forward();
  });

  updateAd();
  window.setInterval(function() { updateAd(); }, 1000 * 60 * 3);
};