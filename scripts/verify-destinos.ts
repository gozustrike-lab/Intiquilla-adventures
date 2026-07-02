import { chromium } from 'playwright';

const SITE = 'https://www.intiquilladventures.com/';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  console.log('📍 Navigating to homepage...');
  await page.goto(SITE, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);

  // Scroll to destinos section
  await page.locator('#destinos').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);

  // Find all destinos cards and check their background images
  const destinosSection = page.locator('#destinos');
  const cards = destinosSection.locator('a.group');
  const cardCount = await cards.count();
  console.log(`\n✅ Found ${cardCount} destination cards`);

  const expectedImages = [
    { name: 'Cordillera Blanca', expected: 'santa-cruz-new-1.webp' },
    { name: 'Laguna 69', expected: 'laguna69-new-1.webp' },
    { name: 'Cordillera Huayhuash', expected: 'huayhuash-new-01.webp' },
    { name: 'Chavin de Huantar', expected: 'tour-chavin.webp' },
  ];

  let allPass = true;
  for (let i = 0; i < cardCount; i++) {
    const card = cards.nth(i);
    const bgStyle = await card.locator('div').first().getAttribute('style');
    const nameText = await card.locator('h3').textContent();

    const expected = expectedImages[i];
    const matches = bgStyle?.includes(expected.expected) ?? false;

    if (matches) {
      console.log(`  ✅ ${expected.name}: ${expected.expected} — CORRECT`);
    } else {
      console.log(`  ❌ ${expected.name}: expected "${expected.expected}" in style="${bgStyle}"`);
      allPass = false;
    }
  }

  // Also take a screenshot of the destinos section
  const section = await page.locator('#destinos');
  await section.screenshot({ path: '/home/z/my-project/download/destinos-verification.png' });
  console.log('\n📸 Screenshot saved to /home/z/my-project/download/destinos-verification.png');

  await browser.close();
  console.log(allPass ? '\n🎉 All destinos images are correct!' : '\n⚠️ Some images do not match expected values');
  process.exit(allPass ? 0 : 1);
})();