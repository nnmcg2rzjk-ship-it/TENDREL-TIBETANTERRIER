// ハンバーガーメニューの開閉・サブメニュー展開
(function () {
  // ===== お問い合わせリンク（サイト全体でここ1箇所だけ定義） =====
  const CONTACT_URL = 'https://forms.gle/sCRfrAZbUC1sqBhH6';
  document.querySelectorAll('a.contact-btn').forEach((a) => {
    a.href = CONTACT_URL;
    a.target = '_blank';
    a.rel = 'noopener';
  });

  const body = document.body;
  const menuBtn = document.querySelector('.menu-btn');
  const drawer = document.getElementById('site-menu');
  const closers = document.querySelectorAll('[data-menu-close]');

  function openMenu() {
    body.classList.add('menu-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'メニューを閉じる');
    drawer.setAttribute('aria-hidden', 'false');
    document.querySelector('.menu-overlay').hidden = false;
  }

  function closeMenu() {
    body.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'メニューを開く');
    drawer.setAttribute('aria-hidden', 'true');
    // トランジション終了後にオーバーレイを非表示化
    setTimeout(() => {
      if (!body.classList.contains('menu-open')) {
        document.querySelector('.menu-overlay').hidden = true;
      }
    }, 320);
  }

  menuBtn.addEventListener('click', () => {
    body.classList.contains('menu-open') ? closeMenu() : openMenu();
  });
  closers.forEach((el) => el.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) closeMenu();
  });

  // MY DOG のサブメニュー展開
  const subToggle = document.querySelector('.sub-toggle');
  if (subToggle) {
    subToggle.addEventListener('click', () => {
      const li = subToggle.closest('.has-sub');
      const open = li.classList.toggle('sub-open');
      subToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
