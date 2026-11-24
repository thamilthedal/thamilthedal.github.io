(function () {
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  };
  var link = function (url, html) {
    return url ? '<a href="' + esc(url) + '" target="_blank" rel="noopener">' + html + '</a>' : html;
  };

  var IC = {
    top: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    about: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
    skills: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    experience: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2"/><path d="M3 13h18"/>',
    tools: '<path d="M4 6l6 6-6 6"/><path d="M13 18h7"/>',
    publications: '<path d="M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z"/><path d="M5 18a2 2 0 012-2h12"/>',
    'contact-me': '<path d="M5 4h14a2 2 0 012 2v9a2 2 0 01-2 2h-6l-5 4v-4H5a2 2 0 01-2-2V6a2 2 0 012-2z"/><path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    linkedin: '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>',
    medium: '<circle cx="7" cy="12" r="5"/><ellipse cx="16.5" cy="12" rx="2.5" ry="5"/><path d="M22 7v10"/>',
    whatsapp: '<path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.6z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
    flow: '<path d="M3 8h11a3 3 0 10-3-3"/><path d="M3 12h16a3 3 0 11-3 3"/><path d="M3 16h8"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    download: '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'
  };

  function ico(k) {
    return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + (IC[k] || '') + '</svg>';
  }

  var sections = [
    {
      id: "skills",
      label: "Skills",
      title: "Skills",
      data: SITE.skills,
      row: function (s) {
        return '<h3>' + ico(s.icon || 'skills') + esc(s.group) + '</h3><p>' + esc(s.items) + '</p>';
      }
    },
    {
      id: "experience",
      label: "Experience",
      title: "Previous experience",
      data: SITE.experience,
      row: function (e) {
        return '<span class="when">' + esc(e.period) + '</span><div class="body"><p class="big">' + esc(e.title) + ', ' + esc(e.org) + '</p><p>' + esc(e.text) + '</p></div>';
      }
    },
    {
      id: "tools",
      label: "CLI tools",
      title: "CLI tools I’ve built",
      data: SITE.tools,
      row: function (t) {
        return '<div><code>' + ico('tools') + link(t.url, esc(t.name)) + '</code></div><div class="body"><p>' + esc(t.desc) + '</p><small>$ ' + esc(t.example) + '</small></div>';
      }
    },
    {
      id: "publications",
      label: "Publications",
      title: "Publications",
      data: SITE.publications,
      row: function (p) {
        return '<span class="when">' + esc(p.year) + '</span><div class="body"><p class="big">' + link(p.url, esc(p.title)) + '</p><p>' + esc(p.authors) + '. ' + esc(p.venue) + '.</p></div>';
      }
    }
  ].filter(function (s) {
    return s.data && s.data.length;
  });

  document.title = "Thamil" + " – CFD Engineer";

  var A = SITE.about;
  var aboutHtml = A
    ? '<section id="about"><h2>' + ico('about') + 'About me</h2><div class="about">' +
      (PHOTO ? '<img src="' + PHOTO + '" alt="Portrait of ' + esc(SITE.name) + '" width="270" height="261">' : '') +
      '<div><ul class="stats">' +
      (A.stats || []).map(function (t) {
        return '<li>' + (t.icon ? ico(t.icon) : '') + '<div><b>' + esc(t.value) + '</b><span>' + esc(t.label) + '</span></div></li>';
      }).join("") +
    '</ul><p>' + esc(A.text) + '</p><a class="cta" href="#contact-me">' + ico('contact-me') + 'Contact me</a>' +
    '  <a class="cta" href="src/CV_Thamilmani_2026.pdf" target="blank">' + ico('download') + 'Download CV</a></div></div></section>'
    : "";

  document.getElementById("name").textContent = SITE.name;
  document.getElementById("role").textContent = SITE.role;

  var items = [{ id: 'top', label: 'Home' }].concat(
    A ? [{ id: 'about', label: 'About' }] : [],
    sections,
    [{ id: 'contact-me', label: 'Contact' }]
  );

  document.getElementById("nav").innerHTML = items.map(function (s) {
    return '<a href="#' + s.id + '" data-id="' + s.id + '" aria-label="' + esc(s.label) + '" title="' + esc(s.label) + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + (IC[s.id] || '') + '</svg></a>';
  }).join("");

  setTimeout(function () {
    var links = document.querySelectorAll('#nav a');
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) {
            a.classList.toggle('on', a.dataset.id === e.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    links.forEach(function (a) {
      var el = document.getElementById(a.dataset.id);
      if (el) io.observe(el);
    });
  }, 0);

  document.getElementById("content").innerHTML = aboutHtml + sections.map(function (s) {
    return '<section id="' + s.id + '"><h2>' + ico(s.id) + esc(s.title) + '</h2><ol class="list">' +
      s.data.map(function (d, i) {
        var h = s.row(d);
        if (d.details) {
          h = h.replace(/<\/div>$/, '<button type="button" class="peek" data-s="' + s.id + '" data-i="' + i + '">' + ico('eye') + 'Preview</button></div>');
        }
        return '<li class="item">' + h + '</li>';
      }).join("") + '</ol></section>';
  }).join("");

  document.getElementById("content").insertAdjacentHTML(
    "beforeend",
    '<section id="contact-me"><h2>' + ico('contact-me') + 'Contact me</h2><p class="big">' + esc(SITE.contactText) + '</p><ul class="clist">' +
    (SITE.contact || []).map(function (c) {
      return '<li><span>' + ico((c.type || '').toLowerCase()) + esc(c.type) + '</span>' + link(c.url, esc(c.label)) + '</li>';
    }).join("") + '</ul></section>'
  );

  var dlg = document.createElement("dialog");
  dlg.id = "peek";
  dlg.setAttribute("aria-label", "Preview");
  document.body.appendChild(dlg);

  function openPeek(sec, i) {
    var d = (SITE[sec] || [])[i];
    if (!d) return;
    var meta = sec === "tools"
      ? '<code>$ ' + esc(d.example) + '</code>'
      : '<p class="pmeta">' + esc(d.authors) + ' · ' + esc(d.venue) + ' · ' + esc(d.year) + '</p>';
    dlg.innerHTML = '<button type="button" class="pclose" aria-label="Close">×</button><h3>' + esc(d.title || d.name) + '</h3>' + meta + '<p>' + esc(d.details) + '</p>' +
      ((d.tags || []).length ? '<ul class="tags">' + d.tags.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join("") + '</ul>' : '') +
      (d.url ? '<a class="plink" href="' + esc(d.url) + '" target="_blank" rel="noopener">Open link ↗</a>' : '');
    dlg.showModal();
  }

  document.getElementById("content").addEventListener("click", function (ev) {
    var b = ev.target.closest(".peek");
    if (b) openPeek(b.dataset.s, +b.dataset.i);
  });

  dlg.addEventListener("click", function (ev) {
    if (ev.target === dlg || ev.target.closest(".pclose")) dlg.close();
  });

  document.getElementById("contact").innerHTML = "© " + new Date().getFullYear() + "Theadl Flow Code";
})();

/* Light / dark toggle: remembers the choice, otherwise follows the device setting */
(function () {
  var root = document.documentElement,
    btn = document.getElementById('theme'),
    mq = window.matchMedia('(prefers-color-scheme: dark)');

  function cur() {
    return root.getAttribute('data-theme') || (mq.matches ? 'dark' : 'light');
  }

  function paint() {
    var d = cur() === 'dark';
    btn.textContent = d ? '☀︎' : '☾';
    btn.setAttribute('aria-label', d ? 'Switch to light mode' : 'Switch to dark mode');
    btn.title = btn.getAttribute('aria-label');
  }

  try {
    var s = localStorage.getItem('theme');
    if (s === 'light' || s === 'dark') root.setAttribute('data-theme', s);
  } catch (e) {}

  btn.addEventListener('click', function () {
    var n = cur() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', n);
    try {
      localStorage.setItem('theme', n);
    } catch (e) {}
    paint();
    window.dispatchEvent(new Event('resize'));
  });

  if (mq.addEventListener) mq.addEventListener('change', paint);
  paint();
})();

/* Flow animation (decorative): air passing a cylinder */
(function () {
  var c = document.getElementById('flow'),
    x = c.getContext('2d'),
    W, H, R, cx, cy,
    U = 1.6,
    P = [],
    N = 360;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function css(n) {
    return getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  }

  function size() {
    var d = window.devicePixelRatio || 1,
      r = c.getBoundingClientRect();
    W = r.width;
    H = r.height;
    c.width = W * d;
    c.height = H * d;
    x.setTransform(d, 0, 0, d, 0, 0);
    var narrow = W < 700;
    var tb = document.querySelector('.hero .wrap').offsetHeight + 40,
      avail = Math.max(H - tb, 140);
    document.getElementById('top').style.setProperty('--scrim', (tb + 40) + 'px');
    R = Math.min(avail * .32, W * (narrow ? .2 : .13));
    cx = narrow ? W * .5 : W * .74;
    cy = avail * .5;
  }

  function vel(px, py) {
    var dx = px - cx,
      dy = py - cy,
      r2 = dx * dx + dy * dy,
      r4 = r2 * r2,
      k = R * R;
    if (r2 < k) return [0, 0];
    return [U * (1 - k * (dx * dx - dy * dy) / r4), -U * 2 * k * dx * dy / r4];
  }

  function spawn(p, anywhere) {
    p.x = anywhere ? Math.random() * W : -10;
    p.y = Math.random() * H;
    p.age = 0;
  }

  function frame() {
    x.fillStyle = css('--bg');
    x.globalAlpha = reduce ? 1 : .12;
    x.fillRect(0, 0, W, H);
    x.globalAlpha = 1;
    var acc = css('--accent'),
      hot = css('--hot');
    for (var i = 0; i < P.length; i++) {
      var p = P[i],
        v = vel(p.x, p.y),
        nx = p.x + v[0] * 2.2,
        ny = p.y + v[1] * 2.2,
        s = Math.hypot(v[0], v[1]);
      x.strokeStyle = s > U * 1.25 ? hot : acc;
      x.lineWidth = 1.2;
      x.globalAlpha = .75;
      x.beginPath();
      x.moveTo(p.x, p.y);
      x.lineTo(nx, ny);
      x.stroke();
      p.x = nx;
      p.y = ny;
      if (p.x > W + 10 || p.y < -10 || p.y > H + 10 || ++p.age > 900) spawn(p, false);
    }
    x.globalAlpha = 1;
    x.beginPath();
    x.arc(cx, cy, R, 0, 6.2832);
    x.fillStyle = css('--ink');
    x.fill();
  }

  function init() {
    size();
    P = [];
    for (var i = 0; i < N; i++) {
      var p = {};
      spawn(p, true);
      P.push(p);
    }
    x.fillStyle = css('--bg');
    x.fillRect(0, 0, W, H);
    if (reduce) {
      for (var k = 0; k < 260; k++) frame();
    }
  }

  init();
  var t;
  window.addEventListener('load', init);
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(init, 150);
  });
  if (!reduce) {
    (function loop() {
      frame();
      requestAnimationFrame(loop);
    })();
  }
})();
