const fs = require("fs");
const f = "E:/tjsealogistics/lib/content.js";
let c = fs.readFileSync(f, "utf8");

const TEL = 'href=\\"tel:+916284900399\\"';
const A = (t) => `<a href=\\"tel:+916284900399\\" aria-label=\\"Call ${t}\\">${t}</a>`;
const N = "+91 628490 0399";

const subs = [
  // header top-bar (2x): "</svg> +91 628490 0399</span>"
  { from: `</svg> ${N}</span>`, to: `</svg> ${A(N)}</span>`, expect: 2 },
  // footer contact-item
  { from: `<span>${N}</span></div><div class=\\"contact-item\\"><span>info@`, to: `<span>${A(N)}</span></div><div class=\\"contact-item\\"><span>info@`, expect: 1 },
  // privacy policy + terms of service lists
  { from: `<li>Phone: ${N}</li>`, to: `<li>Phone: ${A(N)}</li>`, expect: 2 },
];

let total = 0;
for (const s of subs) {
  const parts = c.split(s.from);
  const n = parts.length - 1;
  if (n !== s.expect) {
    console.error(`MISMATCH for ${JSON.stringify(s.from.slice(0, 40))}: found ${n}, expected ${s.expect}`);
    process.exit(1);
  }
  c = parts.join(s.to);
  total += n;
}
fs.writeFileSync(f, c);

const visible = [...c.matchAll(new RegExp(N.replace(/ /g, "\\s"), "g"))].length;
const telAnchors = (c.match(/tel:\+916284900399/g) || []).length;
console.log(`replaced ${total} occurrences`);
console.log(`tel: anchors now = ${telAnchors}`);
console.log(`number mentions total = ${visible}`);
