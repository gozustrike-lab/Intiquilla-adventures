const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const tests = [
    { url: 'http://localhost:3459/tours/santa-cruz', name: 'Santa Cruz' },
    { url: 'http://localhost:3459/tours/laguna-69', name: 'Laguna 69' },
    { url: 'http://localhost:3459/tours/cordillera-huayhuash', name: 'Huayhuash' },
  ];
  for (const t of tests) {
    const page = await ctx.newPage();
    try {
      await page.goto(t.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.evaluate(() => {
        const g = document.getElementById('tour-gallery');
        if (g) g.scrollIntoView({ behavior: 'instant' });
      });
      await page.waitForTimeout(2000);
      const hero = await page.$eval('section#tour-hero img', el => ({
        s: el.src.split('/').pop().split('?')[0],
        w: el.naturalWidth, h: el.naturalHeight, v: el.offsetHeight > 0
      })).catch(() => ({ s: 'NONE', w: 0, h: 0, v: false }));
      const imgs = await page.$$('#tour-gallery img');
      let gal = [];
      for (const img of imgs) {
        const d = await img.evaluate(el => ({
          s: el.src.split('/').pop().split('?')[0],
          w: el.naturalWidth, h: el.naturalHeight, v: el.offsetHeight > 0
        }));
        gal.push(d);
      }
      console.log('\n=== ' + t.name + ' ===');
      console.log('Hero: ' + hero.s + ' (' + hero.w + 'x' + hero.h + ') ' + (hero.v ? 'VISIBLE' : 'HIDDEN'));
      console.log('Gallery: ' + gal.length + ' images');
      gal.forEach((g, i) => {
        const st = (g.w > 0 && g.v) ? 'OK' : 'FAIL';
        console.log('  [' + i + '] ' + g.s + ' ' + g.w + 'x' + g.h + ' ' + st);
      });
    } catch (e) {
      console.log(t.name + ' ERR: ' + e.message.slice(0, 120));
    }
    await page.close();
  }
  await browser.close();
  process.exit(0);
})();