document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --bg: #f3f3f3;
      --pink: #efbec9;
      --pink-deep: #e8b9c3;
      --pink-strong: #d39db2;
      --card-bg: #d9d9d9;
      --card-soft: #d4d4d4;
      --text: #141414;
      --muted: #6a6a6a;
      --shadow: rgba(0, 0, 0, 0.08);
      --panel: #f1f1f1;
      --button: #f6f6f6;
    }

    * { box-sizing: border-box; }

    html, body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      font-family: 'Trebuchet MS', 'Segoe UI', sans-serif;
      background: var(--bg);
      color: var(--text);
    }

    body {
      display: block;
      min-height: 100vh;
    }

    .menu-page {
      background: var(--bg);
      min-height: 100vh;
    }

    .topbar {
      height: 92px;
      background: var(--pink);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 28px 0 22px;
      box-shadow: 0 1px 0 rgba(0,0,0,0.04);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 14px;
      font-weight: 900;
      font-size: clamp(1.7rem, 2.1vw, 3.2rem);
      letter-spacing: -0.06em;
      color: #fff;
      text-shadow: 0 2px 0 rgba(0,0,0,0.06);
    }

    .brand-mark {
      position: relative;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, #fbe7a7 0%, #d0f4cc 30%, #e0c1cf 100%);
      border: 3px solid #fff;
      box-shadow: 0 0 0 2px rgba(255,255,255,0.35);
      overflow: hidden;
      flex-shrink: 0;
    }

    .brand-mark::before,
    .brand-mark::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 50%;
    }

    .brand-mark::before {
      background: radial-gradient(circle at center, transparent 0 48%, #f8d7e6 48% 52%, transparent 52%);
      opacity: 0.9;
    }

    .brand-mark::after {
      background: radial-gradient(circle at center, transparent 0 39%, #6e8d54 39% 42%, transparent 42%);
      mix-blend-mode: multiply;
    }

    .brand-text {
      display: inline-block;
      transform: translateY(-2px);
      color: #fef8fa;
      font-family: 'Trebuchet MS', 'Segoe UI', sans-serif;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 54px;
      margin-right: 8px;
    }

    .nav a {
      text-decoration: none;
      color: #fff;
      font-weight: 900;
      font-size: clamp(1.2rem, 1.7vw, 3rem);
      letter-spacing: -0.06em;
      text-shadow: 0 2px 0 rgba(0,0,0,0.05);
    }

    .content {
      padding: 28px 40px 36px;
    }

    .title-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 28px;
    }

    .title {
      margin: 0;
      font-size: clamp(3.3rem, 6vw, 8rem);
      font-weight: 900;
      letter-spacing: -0.08em;
      line-height: 0.9;
      text-transform: uppercase;
    }

    .tabs {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin: 0 auto 32px;
    }

    .tab {
      width: 240px;
      height: 72px;
      border-radius: 18px;
      border: 3px solid rgba(18, 18, 18, 0.9);
      background: rgba(255,255,255,0.18);
      color: #1d1d1d;
      font-size: clamp(1.7rem, 2.3vw, 2.3rem);
      font-weight: 700;
      letter-spacing: -0.05em;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.02);
    }

    .tab.active {
      background: rgba(255,255,255,0.12);
    }

    .cards {
      max-width: 1160px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, minmax(300px, 1fr));
      gap: 30px 48px;
      padding: 4px 8px 10px;
    }

    .card {
      background: rgba(217, 217, 217, 0.56);
      border: 2px solid rgba(0,0,0,0.04);
      border-radius: 14px;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
      min-height: 240px;
      display: grid;
      grid-template-columns: 1.05fr 1.2fr;
      align-items: center;
      padding: 12px 18px 18px 18px;
      gap: 18px;
      overflow: hidden;
    }

    .card:nth-child(2n) .card-visual {
      order: 2;
    }

    .card:nth-child(2n) .card-copy {
      order: 1;
    }

    .card-visual {
      height: 170px;
      width: 100%;
      background: rgba(154, 154, 154, 0.65);
      border-radius: 10px;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
    }

    .card-copy {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      min-width: 0;
      padding-right: 6px;
    }

    .product-name {
      margin: 0;
      font-size: clamp(1.5rem, 2vw, 2rem);
      line-height: 1.12;
      letter-spacing: -0.05em;
      font-weight: 700;
      color: #1d1d1d;
    }

    .description {
      margin: 0;
      font-size: clamp(0.85rem, 1.2vw, 1.15rem);
      line-height: 1.42;
      color: rgba(0,0,0,0.8);
      letter-spacing: -0.02em;
    }

    .price {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      align-self: flex-start;
      min-width: 120px;
      padding: 10px 16px;
      background: rgba(255,255,255,0.26);
      border: 2px solid rgba(0,0,0,0.04);
      border-radius: 8px;
      margin-top: 6px;
      font-size: clamp(1.4rem, 1.8vw, 2rem);
      font-weight: 700;
      letter-spacing: -0.05em;
      color: #1d1d1d;
    }

    @media (max-width: 900px) {
      .topbar {
        height: auto;
        padding: 14px 18px 16px;
        gap: 14px;
        flex-wrap: wrap;
      }

      .nav {
        gap: 18px;
        margin-right: 0;
      }

      .title {
        font-size: clamp(2.5rem, 9vw, 5rem);
      }

      .tabs {
        gap: 16px;
        flex-wrap: wrap;
      }

      .tab {
        width: min(44vw, 240px);
      }

      .cards {
        grid-template-columns: 1fr;
        gap: 22px;
      }
    }

    @media (max-width: 560px) {
      .topbar {
        justify-content: center;
      }

      .brand {
        width: 100%;
        justify-content: center;
      }

      .nav {
        width: 100%;
        justify-content: center;
      }

      .content {
        padding: 20px 16px 30px;
      }

      .card {
        grid-template-columns: 1fr;
        min-height: 0;
        padding: 12px;
        gap: 14px;
      }

      .card-visual {
        order: 1;
        height: 150px;
      }

      .card-copy {
        order: 2;
        padding-right: 0;
      }

      .card:nth-child(2n) .card-visual,
      .card:nth-child(2n) .card-copy {
        order: unset;
      }

      .product-name {
        font-size: 1.7rem;
      }
    }
  `;
  document.head.appendChild(style);

  const page = document.createElement('div');
  page.className = 'menu-page';

  page.innerHTML = `
    <header class="topbar">
      <div class="brand" aria-label="Matcha and Co">
        <div class="brand-mark" aria-hidden="true"></div>
        <span class="brand-text">Matcha & Co</span>
      </div>
      <nav class="nav" aria-label="Main navigation">
        <a href="#">Menu</a>
        <a href="#">Merch</a>
      </nav>
    </header>

    <main class="content">
      <div class="title-wrap">
        <h1 class="title">OUR MENU</h1>
      </div>

      <div class="tabs" aria-label="Menu categories">
        <button class="tab active" type="button">Drinks</button>
        <button class="tab" type="button">Desserts</button>
      </div>

      <section class="cards" aria-label="Drink menu">
        <article class="card">
          <div class="card-visual" aria-hidden="true"></div>
          <div class="card-copy">
            <h2 class="product-name">Matcha Strawberry<br />Latte</h2>
            <p class="description">creamy, layered drink made with sweet strawberry puree, milk, and earthy green tea matcha</p>
            <div class="price">$4.90</div>
          </div>
        </article>

        <article class="card">
          <div class="card-visual" aria-hidden="true"></div>
          <div class="card-copy">
            <h2 class="product-name">Matcha Strawberry<br />Latte</h2>
            <p class="description">creamy, layered drink made with sweet strawberry puree, milk, and earthy green tea matcha</p>
            <div class="price">$4.90</div>
          </div>
        </article>

        <article class="card">
          <div class="card-visual" aria-hidden="true"></div>
          <div class="card-copy">
            <h2 class="product-name">Matcha Strawberry<br />Latte</h2>
            <p class="description">creamy, layered drink made with sweet strawberry puree, milk, and earthy green tea matcha</p>
            <div class="price">$4.90</div>
          </div>
        </article>

        <article class="card">
          <div class="card-visual" aria-hidden="true"></div>
          <div class="card-copy">
            <h2 class="product-name">Matcha Strawberry<br />Latte</h2>
            <p class="description">creamy, layered drink made with sweet strawberry puree, milk, and earthy green tea matcha</p>
            <div class="price">$4.90</div>
          </div>
        </article>
      </section>
    </main>
  `;

  document.body.appendChild(page);
});
