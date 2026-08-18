/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./src/blocks/marquee/view.js ***!
  \************************************/
!function () {
  "use strict";

  let e = null,
    s = null,
    t = new Set();
  const a = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    n = window.matchMedia("(pointer: coarse)").matches,
    i = a => {
      t.delete(a), e && e.unobserve(a), 0 === t.size && (e && (e.disconnect(), e = null), s && (s.disconnect(), s = null)), a._kh_mq_abortController && (a._kh_mq_abortController.abort(), a._kh_mq_abortController = null), a._kh_mq_rafId && (cancelAnimationFrame(a._kh_mq_rafId), a._kh_mq_rafId = null), a.querySelectorAll(".kh-mq-marquee-group").forEach(e => {
        e._kh_mq_anim && (e._kh_mq_anim.cancel(), e._kh_mq_anim = null);
      }), a._kh_mq_progressSegments = null, a._kh_mq_indicator = null, a._kh_mq_items = null, a._kh_mq_lastSampleTime = 0, a._kh_mq_activeOriginIndex = -1, a.classList.remove("js-ready");
    },
    r = s => {
      if (s.classList.contains("js-ready")) return;
      s.classList.add("js-ready"), t.add(s), s._kh_mq_abortController = new AbortController();
      const {
        signal: i
      } = s._kh_mq_abortController;
      s.querySelectorAll("img").forEach(e => {
        e.addEventListener("error", () => {
          e.style.display = "none";
        }, {
          signal: i,
          passive: !0
        });
      });
      const r = s.querySelectorAll(".kh-mq-marquee-group");
      if (!a) try {
        let e = s.style.getPropertyValue("--kh-mq-duration");
        e || (e = window.getComputedStyle(s).getPropertyValue("--kh-mq-duration"));
        let t = parseFloat((e || "").replace(/[^\d.]/g, ""));
        (isNaN(t) || t <= 0) && (t = 30), t *= 1e3;
        const a = s.classList.contains("is-reversed");
        r.forEach(e => {
          e._kh_mq_anim = e.animate([{
            transform: "translateX(0)"
          }, {
            transform: "translateX(-100%)"
          }], {
            duration: t,
            iterations: 1 / 0,
            direction: a ? "reverse" : "normal"
          });
        }), s.classList.add("js-anim-active");
      } catch (e) {
        console.warn("Kinetic Marquee JS engine failed, delegating to CSS engine.");
      }
      if (!e && "IntersectionObserver" in window && (e = new IntersectionObserver(e => {
        e.forEach(e => {
          const s = e.target,
            t = s.querySelectorAll(".kh-mq-marquee-group");
          if (e.isIntersecting) {
            if (s._kh_mq_manuallyPaused) return;
            s.classList.remove("is-paused-by-js"), s.classList.contains("js-anim-active") && t.forEach(e => {
              e._kh_mq_anim && e._kh_mq_anim.play();
            }), o(s);
          } else s.classList.add("is-paused-by-js"), s.classList.contains("js-anim-active") && t.forEach(e => {
            e._kh_mq_anim && e._kh_mq_anim.pause();
          }), o(s);
        });
      }, {
        rootMargin: "100px 0px",
        threshold: 0
      })), e && e.observe(s), n && s.classList.contains("is-pause-hover") && s.addEventListener("click", e => {
        if (e.target.closest("a")) return;
        s.classList.toggle("is-paused-by-touch");
        const t = s.classList.contains("is-paused-by-touch");
        s._kh_mq_manuallyPaused = t, s.classList.contains("js-anim-active") && r.forEach(e => {
          e._kh_mq_anim && (t ? e._kh_mq_anim.pause() : e._kh_mq_anim.play());
        }), o(s);
      }, {
        signal: i
      }), !a) {
        const e = s.classList.contains("is-pause-hover"),
          t = s.classList.contains("is-slow-hover"),
          a = () => {
            s.classList.contains("js-anim-active") && r.forEach(e => {
              e._kh_mq_anim && (e._kh_mq_anim.playbackRate = .3);
            }), s.classList.add("is-slow-by-js"), o(s);
          },
          _ = () => {
            s.classList.contains("js-anim-active") && r.forEach(e => {
              e._kh_mq_anim && (e._kh_mq_anim.playbackRate = 1);
            }), s.classList.remove("is-slow-by-js"), o(s);
          },
          l = () => {
            s._kh_mq_manuallyPaused = !0, s.classList.add("is-paused-by-js"), s.classList.contains("js-anim-active") && r.forEach(e => {
              e._kh_mq_anim && e._kh_mq_anim.pause();
            }), o(s);
          },
          c = () => {
            s._kh_mq_manuallyPaused = !1, s.classList.remove("is-paused-by-js"), s.classList.contains("js-anim-active") && r.forEach(e => {
              e._kh_mq_anim && e._kh_mq_anim.play();
            }), o(s);
          };
        t && (s.addEventListener("pointerenter", () => {
          n || a();
        }, {
          passive: !0,
          signal: i
        }), s.addEventListener("pointerleave", () => {
          n || _();
        }, {
          passive: !0,
          signal: i
        }), s.addEventListener("focusin", a, {
          passive: !0,
          signal: i
        }), s.addEventListener("focusout", _, {
          passive: !0,
          signal: i
        })), e && (s.addEventListener("pointerenter", () => {
          n || l();
        }, {
          passive: !0,
          signal: i
        }), s.addEventListener("pointerleave", () => {
          n || c();
        }, {
          passive: !0,
          signal: i
        }), s.addEventListener("focusin", l, {
          passive: !0,
          signal: i
        }), s.addEventListener("focusout", c, {
          passive: !0,
          signal: i
        }));
      }
      s._kh_mq_progressEnabled = "true" === s.dataset.progressRail, s._kh_mq_indicatorEnabled = "true" === s.dataset.interactionIndicator, s._kh_mq_centerHighlightEnabled = "true" === s.dataset.activeCenterHighlight, s._kh_mq_originalCount = parseInt(s.dataset.originalCount || "0", 10) || 0, s._kh_mq_progressCount = parseInt(s.dataset.progressCount || "0", 10) || 0, s._kh_mq_progressSegments = s.querySelectorAll(".kh-mq-progress-segment"), s._kh_mq_indicator = s.querySelector(".kh-mq-interaction-indicator"), s._kh_mq_items = s.querySelectorAll(".kh-mq-marquee-item"), s._kh_mq_lastSampleTime = 0, s._kh_mq_activeOriginIndex = -1, s._kh_mq_rafId = null, o(s), _(s, !0), a || !s._kh_mq_progressEnabled && !s._kh_mq_centerHighlightEnabled || c(s);
    },
    o = e => {
      e && e._kh_mq_indicatorEnabled && e._kh_mq_indicator && (e.classList.contains("is-paused-by-js") || e.classList.contains("is-paused-by-touch") ? e._kh_mq_indicator.dataset.state = "paused" : e.classList.contains("is-slow-by-js") ? e._kh_mq_indicator.dataset.state = "slow" : e._kh_mq_indicator.dataset.state = "running");
    },
    _ = (e, s) => {
      if (!e || !e._kh_mq_items || !e._kh_mq_items.length) return;
      const t = performance.now();
      if (!s && t - e._kh_mq_lastSampleTime < 120) return;
      if (e._kh_mq_lastSampleTime = t, (e => !!e.classList.contains("is-paused-by-js") || !!e.classList.contains("is-paused-by-touch"))(e)) return;
      const a = e.getBoundingClientRect(),
        n = a.left + a.width / 2;
      let i = null,
        r = 1 / 0;
      for (let s = 0; s < e._kh_mq_items.length; s++) {
        const t = e._kh_mq_items[s],
          o = t.getBoundingClientRect();
        if (o.right < a.left || o.left > a.right) continue;
        const _ = o.left + o.width / 2,
          l = Math.abs(n - _);
        l < r && (r = l, i = t);
      }
      if (!i) return;
      const o = (e => {
        const s = e.getAttribute("data-kh-mq-origin-index") || e.dataset.khMqOriginIndex || "0",
          t = parseInt(s, 10);
        return Number.isNaN(t) ? 0 : t;
      })(i);
      e._kh_mq_centerHighlightEnabled && ((e => {
        e._kh_mq_items && e._kh_mq_items.length && e._kh_mq_items.forEach(e => e.classList.remove("is-center-active"));
      })(e), i.classList.add("is-center-active")), o !== e._kh_mq_activeOriginIndex && (e._kh_mq_activeOriginIndex = o, ((e, s) => {
        if (!e._kh_mq_progressEnabled || !e._kh_mq_progressSegments || !e._kh_mq_progressSegments.length) return;
        const t = ((e, s) => {
          const t = e._kh_mq_progressCount || 0,
            a = e._kh_mq_originalCount || 0;
          return t && a ? t === a ? s % t : Math.min(t - 1, Math.floor(s / a * t)) : 0;
        })(e, s);
        e._kh_mq_progressSegments.forEach((e, s) => {
          s === t ? e.classList.add("is-active") : e.classList.remove("is-active");
        });
      })(e, o));
    },
    l = e => {
      e && e.classList.contains("js-ready") && (o(e), _(e, !1), e._kh_mq_rafId = requestAnimationFrame(() => l(e)));
    },
    c = e => {
      e._kh_mq_rafId || (e._kh_mq_rafId = requestAnimationFrame(() => l(e)));
    },
    m = () => {
      document.querySelectorAll(".kh-mq-marquee-container:not(.js-ready)").forEach(r);
    };
  let d;
  "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", m) : m(), s = new MutationObserver(e => {
    let s = !1;
    e.forEach(e => {
      e.removedNodes.length && e.removedNodes.forEach(e => {
        1 === e.nodeType && (e.classList && e.classList.contains("kh-mq-marquee-container") ? i(e) : e.querySelectorAll && e.querySelectorAll(".kh-mq-marquee-container").forEach(i));
      }), e.addedNodes.length && e.addedNodes.forEach(e => {
        1 === e.nodeType && (e.classList && e.classList.contains("kh-mq-marquee-container") || e.querySelector && e.querySelector(".kh-mq-marquee-container")) && (s = !0);
      });
    }), s && (clearTimeout(d), d = setTimeout(m, 150));
  }), s.observe(document.body, {
    childList: !0,
    subtree: !0
  });
}();
/******/ })()
;
//# sourceMappingURL=view.js.map