// Basketball Einsatzreihe — client-side only, no backend, no tracking.
// Persists a personal "erledigt" stamp per Einsatz in this browser (localStorage),
// so the rail can show at a glance which briefings have already been read.

(function () {
  "use strict";

  var STORAGE_KEY = "basketball-einsatzreihe-status";

  function readStatus() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (err) {
      return {};
    }
  }

  function writeStatus(status) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(status));
    } catch (err) {
      /* localStorage unavailable (private mode etc.) — fail silently, no backend to fall back to */
    }
  }

  function paintRail() {
    var status = readStatus();
    document.querySelectorAll("[data-rail-status]").forEach(function (el) {
      var key = el.getAttribute("data-rail-status");
      var done = !!status[key];
      el.dataset.done = done ? "true" : "false";
      el.textContent = done ? "erledigt" : "offen";
    });
  }

  function initToggle() {
    var btn = document.querySelector("[data-stamp-toggle]");
    if (!btn) return;
    var key = btn.getAttribute("data-stamp-toggle");
    var status = readStatus();
    var done = !!status[key];
    setToggleState(btn, done);

    btn.addEventListener("click", function () {
      var current = readStatus();
      var next = !current[key];
      current[key] = next;
      writeStatus(current);
      setToggleState(btn, next);
      btn.classList.remove("is-stamping");
      // restart the snap animation
      void btn.offsetWidth;
      btn.classList.add("is-stamping");
      paintRail();
    });
  }

  function setToggleState(btn, done) {
    btn.setAttribute("aria-pressed", done ? "true" : "false");
    btn.textContent = done
      ? "Als erledigt gestempelt — zurücksetzen"
      : "Als erledigt stempeln";
  }

  document.addEventListener("DOMContentLoaded", function () {
    paintRail();
    initToggle();
  });
})();
