(function () {
    var _current = null;

    function getURLParameter(param) {
        if (!window.location.search) {
            return;
        }

        var m = new RegExp(param + '=([^&]*)').exec(window.location.search.substring(1));
        if (!m) {
            return;
        }

        return decodeURIComponent(m[1]);
    }

    var header = {
        setActive: function (_class) {
            var li = document.querySelector("li." + _class);
            if (li && li.classList) {
                li.classList.add("active");
            }
        }
    };

    var usermanual = {
        buildMenu: function (url) {
            var els = document.querySelectorAll("nav.usermanual li");
            for (var i = 0; i < els.length; i++) {
                var li = els[i];
                var expander = li.firstElementChild;
                if (li.querySelectorAll("ul li").length > 0) {
                    if (expander.classList) {
                        // closed by default
                        expander.classList.add("closed");
                        li.classList.add("closed");

                        // toggle on click
                        expander.addEventListener("click", function (e) {
                            var li = e.currentTarget.parentNode;
                            usermanual.toggle(e.currentTarget);
                            usermanual.toggle(li);
                            e.preventDefault();
                            return false;
                        }, true);
                    }
                } else {
                    expander.classList.add("hidden");
                }

                // Find the current page and expand all parents
                var a = li.querySelector("a.page-link");
                if (a) {
                    var re;
                    re = new RegExp("^" + a.getAttribute("href") + ".*");
                    if (re.test(url)) {
                        li = a.parentNode;
                        expander = a.parentNode.firstElementChild;
                        usermanual.toggle(li);
                        usermanual.toggle(expander);
                    }

                    re = new RegExp("^" + a.getAttribute("href") + "/$");
                    if (re.test(url)) {
                        a.classList.add("current");
                        _current = a;
                    }
                }
            }
        },

        setNextPrevButtons: function () {
            var search = function (e) {
                var parent = e.parentNode;
                while (!parent.matches("li")) {
                    parent = parent.parentNode;
                }
                return parent;
            };

            var next = document.getElementById("next");
            if (next) {
                next.addEventListener("click", function (e) {
                    var a;
                    var li = _current.parentNode;
                    if (li.nextElementSibling) {
                        a = li.nextElementSibling.querySelector("a.page-link");
                        window.location.href = a.getAttribute("href");
                    } else {
                        li = search(li);
                        if (li.nextElementSibling) {
                            a = li.nextElementSibling.querySelector("a.page-link");
                            window.location.href = a.getAttribute("href");
                        } else {
                            li = search(li);
                            if (li.nextElementSibling) {
                                a = li.nextElementSibling.querySelector("a.page-link");
                                window.location.href = a.getAttribute("href");
                            }
                        }
                    }
                }, true);
            }
        },

        // open/close a menu item
        toggle: function (e) {
            if (e.classList) {
                if (e.classList.contains("closed")) {
                    e.classList.remove("closed");
                    e.classList.add("open");
                } else {
                    e.classList.remove("open");
                    e.classList.add("closed");
                }
            }
        },

        next: function () {

        }
    };

    var tutorials = {
        tags: [],
        attach: function () {
            var checkboxes = document.querySelectorAll('.tutorial-checkbox');
            checkboxes.forEach(function (cb) {
                if (cb.classList.contains('disabled')) return;
                cb.addEventListener('click', function (e) {
                    var i = tutorials.tags.indexOf(cb.dataset.tag);
                    if (i < 0) {
                        tutorials.tags.push(cb.dataset.tag);
                    } else {
                        tutorials.tags.splice(i, 1);
                    }
                    tutorials.filter();
                    e.preventDefault();
                });
            });

            var filters = document.querySelectorAll('.tutorial-filter-text');
            filters.forEach(function (filter) {
                if (filter.classList.contains("disabled")) return;
                filter.addEventListener('click', function (e) {
                    if (tutorials.tags.length === 1 && tutorials.tags[0] === filter.dataset.tag) {
                        tutorials.tags = []; // toggle off
                    } else {
                        tutorials.tags = [filter.dataset.tag]; // toggle on
                    }
                    tutorials.filter();
                    e.preventDefault();
                });
            });

            window.addEventListener('popstate', function () {
                tutorials.filterFromUrl();
            });
            tutorials.filterFromUrl();
        },

        filterFromUrl: function () {
            var params = getURLParameter('tags');
            if (params && params.length) {
                tutorials.tags = params.split(',');
            } else {
                tutorials.tags = [];
            }

            tutorials.filter(true);
        },

        enableTag: function (tag) {
            var checkbox = document.querySelector('.tutorial-checkbox[data-tag="' + tag + '"');
            if (checkbox) {
                checkbox.classList.add('on');
            }
        },

        disableTag: function (tag) {
            var checkbox = document.querySelector('.tutorial-checkbox[data-tag="' + tag + '"');
            if (checkbox) {
                checkbox.classList.remove('on');
            }
        },

        enableTags: function (tags) {
            var checkboxes = document.querySelectorAll('.tutorial-checkbox');
            checkboxes.forEach(function (cb) {
                if (tags.indexOf(cb.dataset.tag) >= 0) {
                    cb.classList.add('on');
                } else {
                    cb.classList.remove('on');
                }
            });
        },

        clearTags: function () {
            var checkboxes = document.querySelectorAll('.tutorial-checkbox');
            checkboxes.forEach(function (cb) {
                cb.classList.remove('on');
            });
        },

        // filter based on current tutorials.tags property
        filter: function (nopush) {
            tutorials.clearTags();
            tutorials.enableTags(tutorials.tags);

            var tutorialEnabledCount = 0;
            var demoEnabledCount = 0;

            if (!nopush) {
                var search = "?tags=" + tutorials.tags.join(',');
                var url = document.location.pathname + search;
                window.history.pushState({}, document.title, url);
            }

            var items = document.querySelectorAll(".tutorial-cloud-item");
            items.forEach(function (item) {
                var itemTags = item.dataset.tags.split(',');

                var match = itemTags.filter(function (tag) {
                    return (tutorials.tags.indexOf(tag) >= 0);
                });

                if (match.length === tutorials.tags.length) {
                    item.classList.remove('hidden');
                    if (itemTags.indexOf('_tutorial') >= 0) {
                        tutorialEnabledCount += 1;
                    }

                    if (itemTags.indexOf('_demo') >= 0) {
                        demoEnabledCount += 1;
                    }
                } else {
                    item.classList.add('hidden');
                }
            });

            // Hide the Getting Started section if there's a filter in place
            var gettingStartedTitle = document.getElementById('getting-started-title');
            var gettingStartedContent = document.getElementById('getting-started-content');
            if (gettingStartedTitle && gettingStartedContent) {
                if (tutorials.tags.length > 0) {
                    gettingStartedTitle.classList.add('hidden');
                    gettingStartedContent.classList.add('hidden');
                } else {
                    gettingStartedTitle.classList.remove('hidden');
                    gettingStartedContent.classList.remove('hidden');
                }
            }

            var noTutorialsMessage = document.getElementById('no-tutorials-message');
            if (noTutorialsMessage) {
                if (tutorialEnabledCount > 0) {
                    noTutorialsMessage.classList.add('hidden');
                } else {
                    noTutorialsMessage.classList.remove('hidden');
                }
            }

            var demosTitle = document.getElementById('project-demos-title');
            if (demosTitle) {
                if (demoEnabledCount > 0) {
                    demosTitle.classList.remove('hidden');
                } else {
                    demosTitle.classList.add('hidden');
                }
            }
        },

        setCurrentNavbar: function (url) {
            var level = null;

            // tutorials
            if (url.indexOf("beginner") >= 0) {
                level = "beginner";
            } else if (url.indexOf("intermediate") >= 0) {
                level = "intermediate";
            } else if (url.indexOf("advanced") >= 0) {
                level = "advanced";
            }

            var el = document.querySelector("#tutorials-navbar-" + level);
            if (el && el.classList)
                el.classList.add("active");
        },

        setCurrentSidebar: function (url) {
            var level = null;
            if (url.indexOf("beginner") >= 0) {
                level = "beginner";
            } else if (url.indexOf("intermediate") >= 0) {
                level = "intermediate";
            } else if (url.indexOf("advanced") >= 0) {
                level = "advanced";
            }

            // show the correct sidebar
            var el = document.querySelector("ul." + level);
            if (el) {
                el.style.display = "block";
            }

            // set the active tutorial
            var nav = document.querySelector("nav.tutorial");
            if (nav) {
                var links = nav.querySelectorAll("a");
                for (var i = 0; i < links.length; i++) {
                    if (url.indexOf(links[i].getAttribute("href")) >= 0) {
                        if (links[i].parentNode.classList) {
                            links[i].parentNode.classList.add("active");
                        }
                    }
                }
            }
        }
    };

    function ready(fn) {
        if (document.readyState != 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    ready(function () {
        var i;
        var url = window.location.pathname;

        if (url.indexOf("/video/") >= 0) {
            header.setActive("video");
        } else if (url.indexOf("/tutorials/") >= 0) {
            tutorials.attach();
            header.setActive("tutorials");
        } else if (url.indexOf("/user-manual/") >= 0) {
            // usermanual
            header.setActive("user-manual");

            usermanual.buildMenu(url);
            usermanual.setNextPrevButtons();
        } else if (url.indexOf("/shader-editor/") >= 0) {
            // shader editor
            header.setActive("shader-editor");

            usermanual.buildMenu(url);
            usermanual.setNextPrevButtons();
        }

        // search
        var search = document.getElementById("search");
        if (search) {
            search.addEventListener("keydown", function (e) {
                if (e.which === 13 || e.keyCode === 13) {
                    window.location.href = "/search/?q=" + e.target.value;
                }
            }, true);
        }


        // script highlighting
        var codes = document.querySelectorAll("pre code");
        for (i = 0; i < codes.length; i++) {
            if (codes[i].classList.contains("lang-javascript")) {
                codes[i].classList.add("javascript");
            }
            hljs.highlightBlock(codes[i]);
        }

        // language buttons
        var flags = document.querySelectorAll(".flags > a");
        for (i = 0; i < flags.length; i++) {
            flags[i].addEventListener("click", function (e) {
                var url = window.location.pathname;
                window.location.href = url.replace(/\/(en|ja|ru|zh)\//, "/" + e.currentTarget.dataset.lang + "/");
                e.preventDefault();
            });

            var locale = window.location.pathname.slice(1, 3);
            if (flags[i].dataset.lang !== locale) {
                flags[i].classList.add("inactive");
            }
        }
    });
})();
