"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[21], {
    209: function(A, e, t) {
        t.r(e),
        t.d(e, {
            default: function() {
                return c
            }
        });
        var a = t(9268)
          , s = t(5156)
          , i = t.n(s)
          , r = t(4021)
          , l = t(5846)
          , n = t.n(l)
          , o = t(1033);
        function c(A) {
            let {data: e} = A;
            return (0,
            a.jsxs)("div", {
                className: "mx-auto my-6 flex w-full max-w-4xl flex-col items-center justify-center gap-6",
                children: [(0,
                a.jsxs)("div", {
                    style: i().style,
                    className: "w-[95%] text-justify print:hidden",
                    children: [(0,
                    a.jsxs)("h3", {
                        className: "capitalize",
                        children: ["Dear ", e.fullName, ","]
                    }), (0,
                    a.jsxs)("p", {
                        className: "my-4",
                        children: ["Thank you for expressing your interest in the", " ", (0,
                        a.jsxs)("b", {
                            children: ["Governor Sindh's Initiative for “Artificial Intelligence, Web 3.0, and Metaverse”, ", (0,
                            a.jsx)("i", {
                                children: "A Nation Building Program By Honorable"
                            }), " ", "Governor Sindh Kamran Khan Tessori."]
                        })]
                    }), (0,
                    a.jsxs)("p", {
                        children: ["We have received your application. Please note your Registration Number: ", "".concat(e.studentId).padStart(8, "0")]
                    }), (0,
                    a.jsx)("p", {
                        className: "my-4",
                        children: "Now that you've applied, the next step will be the entrance exam. The details of the entrance exam, including the venue and date will be emailed to you. If you haven't already downloaded your admit card please download it and save it. You'll need it when you come for the entrance exam. Please click the download button below to save your admit card."
                    }), (0,
                    a.jsx)("p", {
                        children: "While applications are being accepted, we encourage you to begin preparing for the entrance exam. The entrance exam will be split into 3 parts:"
                    }), (0,
                    a.jsxs)("ul", {
                        className: "my-4 list-[upper-roman]",
                        children: [(0,
                        a.jsx)("li", {
                            className: "ml-14 pl-6",
                            children: "English (Reading & Vocabulary)"
                        }), (0,
                        a.jsx)("li", {
                            className: "ml-14 pl-6",
                            children: "Mathematics (10th Grade Math)"
                        }), (0,
                        a.jsx)("li", {
                            className: "ml-14 pl-6",
                            children: "Intelligence Quotient (IQ)"
                        })]
                    }), (0,
                    a.jsxs)("p", {
                        children: ["For those students who are new to the computer field, you can get a jump start on your learning immediately by starting HTML and CSS:", " "]
                    }), (0,
                    a.jsxs)("ul", {
                        children: [(0,
                        a.jsxs)("li", {
                            className: "my-4",
                            children: [(0,
                            a.jsx)("span", {
                                className: "block",
                                children: "Learn HTML by Hira Khan (Watch Recorded Videos)"
                            }), (0,
                            a.jsx)(n(), {
                                className: "text-main underline",
                                href: "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6",
                                target: "_blank",
                                children: "youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                            })]
                        }), (0,
                        a.jsxs)("li", {
                            children: [(0,
                            a.jsx)("span", {
                                className: "block",
                                children: "Learn CSS Intro by Hira Khan (Watch Recorded Videos)"
                            }), (0,
                            a.jsx)(n(), {
                                className: "text-main underline",
                                href: "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob",
                                target: "_blank",
                                children: "youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                            })]
                        })]
                    }), (0,
                    a.jsxs)("p", {
                        className: "mt-4",
                        children: ["Regards,", (0,
                        a.jsx)("b", {
                            className: "block font-bold",
                            children: "Governor's Initiative for AI, Web 3.0 & Metaverse"
                        }), (0,
                        a.jsxs)(n(), {
                            className: "mt-4 flex items-center text-main underline",
                            href: "mailto:education@governorsindh.com",
                            target: "_blank",
                            children: [(0,
                            a.jsx)(o.Dme, {
                                className: "mr-3 h-6 w-6 text-main"
                            }), "education@governorsindh.com"]
                        })]
                    }), (0,
                    a.jsx)("p", {
                        className: "my-4",
                        children: "To stay up to date on the latest updates from the Governor's Initiative, please follow us on your favorite social media channels:"
                    }), (0,
                    a.jsx)(r.PJ, {})]
                }), (0,
                a.jsx)(r.Kn, {
                    data: e
                }), (0,
                a.jsx)(r.yl, {
                    data: e
                }), (0,
                a.jsx)("button", {
                    className: "mt-5 w-[95%] bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 print:hidden sm:w-52 sm:py-4 sm:text-base",
                    onClick: () => window.print(),
                    children: "DOWNLOAD"
                })]
            })
        }
    },
    8206: function(A, e, t) {
        t.r(e);
        var a = t(9268)
          , s = t(7377)
          , i = t.n(s)
          , r = t(6006);
        e.default = function() {
            let[A,e] = (0,
            r.useState)(!1);
            return (0,
            r.useEffect)( () => {
                let A = setTimeout( () => {
                    e(!0)
                }
                , 1e3);
                return () => clearTimeout(A)
            }
            , []),
            (0,
            a.jsx)("div", {
                className: "fixed top-0 w-screen h-screen ".concat(A ? "flex" : "hidden", " justify-center items-center bg-black bg-opacity-60 backdrop-blur-sm z-50"),
                children: (0,
                a.jsxs)("div", {
                    className: "bg-white rounded-lg p-5 md:p-8 !pt-16 w-[95%] md:w-[600px] max-h-[95vh] overflow-y-auto relative",
                    children: [(0,
                    a.jsx)("span", {
                        onClick: () => e(!1),
                        className: "absolute top-5 right-5 cursor-pointer text-xl font-semibold w-[25px] h-[25px] flex justify-center items-center bg-red-400 rounded-full",
                        children: "x"
                    }), (0,
                    a.jsxs)("p", {
                        className: "text-lg text-right leading-loose ".concat(i().className),
                        children: ["پیارے طالب علم، گورنر سندھ آئی ٹی انیشی ایٹو میں آپ کی گہری دلچسپی اور بھروسے کا تعلق برقرار رکھنے کے لیے تہے دل سے مشکور ہیں۔ گورنر سندھ جناب کامران ٹیسوری آپ کے بہترین مستقبل اور پاکستان کو اگے بڑھانے کے لئے ہر ممکن کوشاں ہیں گورنر  سندھ 4 جون 2024 بروز منگل دوپہر   3:00 بجے حیدرآباد پریٹ اباد ہوم اسٹیٹ ہال (حسرت موہانی لائبریری ) نزد ایم کیو ایم ڈسٹرکٹ آفس کا دورہ کریں گے۔ گورنر صاحب حیدرآباد کے طلبہ کے لیے اہم اعلان کریں گے۔ آپ شرکت کو یقینی بنائیں- گورنر سندھ جناب کامران ٹسوری کی دلی نیک تمنائیں آپ سب کے ساتھ ہیں", (0,
                        a.jsx)("br", {}), "شکریہ"]
                    })]
                })
            })
        }
    },
    2087: function(A, e, t) {
        t.r(e),
        t.d(e, {
            default: function() {
                return p
            }
        });
        var a = t(9268)
          , s = t(6394)
          , i = t.n(s)
          , r = t(5846)
          , l = t.n(r)
          , n = t(6006)
          , o = t(2943)
          , c = t(3743)
          , d = t(5462)
          , h = t(1747)
          , m = t(9796)
          , x = t(654)
          , u = t(5459)
          , g = t(1684)
          , f = t(6008)
          , w = function(A) {
            let {screen: e, open: t, setOpen: s} = A
              , i = (0,
            f.usePathname)();
            return (0,
            a.jsxs)(c.v, {
                children: [(0,
                a.jsx)("div", {
                    className: "".concat("small" === e && "py-5 border-b border-[#1468a5]"),
                    children: (0,
                    a.jsx)(d.j, {
                        className: "",
                        as: h.z,
                        rightIcon: (0,
                        a.jsx)(u.v, {}),
                        children: "Courses"
                    })
                }), (0,
                a.jsxs)(m.q, {
                    className: "bg-zinc-50 box_shadow h-[300px] sm:h-auto overflow-y-auto text-zinc-800 p-7 sm:p-4 ".concat("small" === e && "w-[90vw]"),
                    children: [(0,
                    a.jsxs)("div", {
                        className: "pb-5 border-b border-zinc-300",
                        children: [(0,
                        a.jsx)("h1", {
                            className: "sm:text-xl text-lg font-bold text-zinc-800 mb-2",
                            children: "Core Courses"
                        }), g.dm.map( (A, e) => {
                            let t = i.startsWith("/compulsory/".concat(A.id));
                            return (0,
                            a.jsx)(l(), {
                                onClick: () => s(!1),
                                href: "/compulsory/".concat(A.id),
                                children: (0,
                                a.jsx)(x.s, {
                                    className: "text-zinc-600 sm:text-base text-sm ".concat(t ? "bg-zinc-200" : "hover:text-main", " pl-2 py-[5px]"),
                                    children: A.text
                                })
                            }, e)
                        }
                        )]
                    }), (0,
                    a.jsxs)("div", {
                        className: "mt-5",
                        children: [(0,
                        a.jsx)("h1", {
                            className: "sm:text-xl text-lg font-bold text-zinc-800 mb-2",
                            children: "Advanced Courses"
                        }), g.RJ.map( (A, e) => {
                            let t = i.startsWith("/tracks/".concat(A.id));
                            return (0,
                            a.jsx)(l(), {
                                onClick: () => s(!1),
                                href: "/tracks/".concat(A.id, "/4"),
                                children: (0,
                                a.jsx)(x.s, {
                                    className: "text-zinc-600 sm:text-base text-sm ".concat(t ? "bg-zinc-200" : "hover:text-main", " pl-2 py-[5px]"),
                                    children: A.name
                                })
                            }, e)
                        }
                        )]
                    })]
                })]
            })
        }
          , b = t(3393)
          , z = t(5590)
          , E = t(6338);
        let O = [{
            title: "home",
            link: "/",
            id: "1"
        }, {
            title: "apply",
            link: "/apply",
            id: "3"
        }, {
            title: "jobs",
            link: "/jobs",
            id: "4"
        }, {
            title: "result",
            link: "/result",
            id: "2"
        }];
        var p = function() {
            let[A,e] = (0,
            n.useState)(!1)
              , [t,s] = (0,
            n.useState)(!1);
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("div", {
                    className: "fixed left-0 top-0 z-40 h-full w-full bg-main print:hidden ".concat(!A && "hidden"),
                    children: [(0,
                    a.jsx)("div", {
                        className: "absolute right-5 top-5 ",
                        children: (0,
                        a.jsx)(z.ySC, {
                            className: "text-white",
                            size: 25,
                            onClick: () => e(!1)
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "m-auto mt-20 flex w-[90%] flex-col text-base font-normal text-white",
                        children: [O.map(A => (0,
                        a.jsx)(l(), {
                            href: A.link,
                            onClick: () => e(!1),
                            children: (0,
                            a.jsx)("div", {
                                className: "border-b border-[#1468a5] py-5 capitalize",
                                children: A.title
                            })
                        }, A.id)), (0,
                        a.jsx)("div", {
                            className: "py-5 ".concat(!t && "border-b", " border-[#1468a5]"),
                            onClick: () => s(!t),
                            children: (0,
                            a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: ["Courses", (0,
                                a.jsx)(E.OId, {
                                    size: 16
                                })]
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "overflow-y-auto rounded-xl bg-[#216fa7] ".concat(t ? "h-[250px]" : "h-0 overflow-hidden"),
                            children: [(0,
                            a.jsx)("h1", {
                                className: "mt-3 px-2 text-center text-lg font-bold text-white",
                                children: "Core Courses"
                            }), g.dm.map( (A, t) => (0,
                            a.jsx)(l(), {
                                onClick: () => e(!1),
                                href: "/compulsory/".concat(A.id),
                                children: (0,
                                a.jsx)("div", {
                                    className: "border-b border-[#3695d8] py-3 pl-2 text-sm text-white sm:text-base",
                                    children: A.text
                                })
                            }, t)), (0,
                            a.jsx)("h1", {
                                className: "mt-3 px-2 text-center text-lg font-bold text-white",
                                children: "Advanced Courses"
                            }), g.RJ.map( (A, t) => (0,
                            a.jsx)(l(), {
                                onClick: () => e(!1),
                                href: "/tracks/".concat(A.id, "/4"),
                                children: (0,
                                a.jsx)("div", {
                                    className: "border-b border-[#3695d8] py-3 pl-2 text-sm text-white sm:text-base",
                                    children: A.name
                                })
                            }, t))]
                        })]
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "sticky top-0 z-30 w-full bg-main backdrop-blur-3xl print:hidden",
                    children: (0,
                    a.jsxs)("div", {
                        className: "m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]",
                        children: [(0,
                        a.jsx)(l(), {
                            href: "/",
                            children: (0,
                            a.jsx)(i(), {
                                src: o.default,
                                alt: "logo",
                                width: 90,
                                className: "mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]"
                            })
                        }), (0,
                        a.jsx)("h1", {
                            className: "text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl",
                            children: "Tuition Free Education Program on Latest Technologies"
                        }), (0,
                        a.jsxs)("h1", {
                            className: "text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden",
                            children: ["Tuition Free Program", " "]
                        }), (0,
                        a.jsxs)("div", {
                            className: "hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10",
                            children: [O.map(A => (0,
                            a.jsx)(l(), {
                                href: A.link,
                                children: (0,
                                a.jsx)("div", {
                                    className: "menu_btns capitalize",
                                    children: A.title
                                })
                            }, A.id)), (0,
                            a.jsx)(w, {
                                screen: "large",
                                open: A,
                                setOpen: e
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "block sm:hidden",
                            children: (0,
                            a.jsx)(b.cur, {
                                size: 24,
                                className: "text-white",
                                onClick: () => e(!0)
                            })
                        })]
                    })
                })]
            })
        }
    },
    9854: function(A, e, t) {
        t.r(e),
        t.d(e, {
            default: function() {
                return l
            }
        });
        var a = t(9268)
          , s = t(6006)
          , i = t(5674)
          , r = t(4021);
        function l(A) {
            var e;
            let {register: t, errors: l, watch: n, occupiedErr: o, setOccupiedErr: c} = A
              , d = (0,
            i.p)()
              , [h,m] = (0,
            s.useState)(!1)
              , [x,u] = (0,
            s.useState)(!0)
              , g = async () => {
                let A = n("email");
                if (!l.email && A) {
                    m(!0);
                    try {
                        let e = await fetch("/api/sendotp", {
                            body: JSON.stringify({
                                email: A
                            }),
                            method: "POST"
                        })
                          , t = await e.json();
                        if (!e.ok)
                            throw Error(t.message);
                        u(!1),
                        d({
                            title: "".concat(t.message),
                            status: "success",
                            duration: 5e3,
                            isClosable: !0
                        })
                    } catch (A) {
                        d({
                            title: "".concat(A.message || "Unknown Error"),
                            status: "error",
                            duration: 5e3,
                            isClosable: !1
                        })
                    } finally {
                        m(!1)
                    }
                }
            }
            ;
            return (0,
            a.jsxs)("div", {
                children: [(0,
                a.jsxs)("div", {
                    className: "my-6",
                    children: [(0,
                    a.jsx)("label", {
                        htmlFor: "email",
                        className: "mb-6 mt-4 text-slate-700 md:text-xl",
                        children: "Email *"
                    }), (0,
                    a.jsxs)("div", {
                        className: "mb-2 mt-1 flex",
                        children: [(0,
                        a.jsx)("input", {
                            type: "email",
                            id: "email",
                            className: "block h-12 w-full border border-gray-400 bg-gray-100 p-3 ".concat((null == l ? void 0 : l.email) || (null == o ? void 0 : o.email) ? "border-red-400 ring-red-500" : "focus:border-sub focus:ring-sub", " rounded-l outline-none focus:ring-1 md:text-xl"),
                            placeholder: "Email",
                            ...t("email"),
                            onFocus: (null == o ? void 0 : o.email) ? () => {
                                c({
                                    email: "",
                                    otp: ""
                                })
                            }
                            : () => {}
                        }), (0,
                        a.jsx)("button", {
                            type: "button",
                            onClick: g,
                            disabled: !x || h,
                            className: "flex w-[30%] flex-col items-center justify-center rounded-r bg-main text-xs !leading-none text-white disabled:opacity-60 disabled:hover:cursor-not-allowed xs:text-base",
                            children: x ? h ? (0,
                            a.jsx)(r.aN, {
                                width: "w-4",
                                height: "h-4"
                            }) : (0,
                            a.jsx)("span", {
                                children: "Send OTP"
                            }) : (0,
                            a.jsxs)(a.Fragment, {
                                children: [(0,
                                a.jsx)("span", {
                                    children: "Resend OTP"
                                }), (0,
                                a.jsx)(r.ah, {
                                    duration: 60,
                                    func: () => u(!0)
                                })]
                            })
                        })]
                    }), ((null == l ? void 0 : l.email) || (null == o ? void 0 : o.email)) && (0,
                    a.jsx)("p", {
                        className: "mb-4 text-red-400",
                        children: "".concat((null == l ? void 0 : null === (e = l.email) || void 0 === e ? void 0 : e.message) || (null == o ? void 0 : o.email))
                    })]
                }), (0,
                a.jsx)(r.II, {
                    type: "tel",
                    id: "otp",
                    placeholder: "OTP",
                    required: !0,
                    register: t,
                    errors: l,
                    occupiedErr: o,
                    setOccupiedErr: c
                })]
            })
        }
    },
    1800: function(A, e, t) {
        t.r(e),
        t.d(e, {
            default: function() {
                return i
            }
        });
        var a = t(9268)
          , s = t(6006);
        function i(A) {
            let {duration: e, func: t} = A
              , [i,r] = (0,
            s.useState)(e);
            return (0,
            s.useEffect)( () => {
                let A = setInterval( () => r(A => A - 1), 1e3);
                return () => clearInterval(A)
            }
            , []),
            (0,
            s.useEffect)( () => {
                0 === i && t()
            }
            , [i, t]),
            (0,
            a.jsx)("div", {
                children: "".concat(Math.floor(i / 60), ":").concat((i % 60).toString().padStart(2, "0"))
            })
        }
    },
    4396: function(A, e, t) {
        t.r(e),
        t.d(e, {
            default: function() {
                return g
            }
        });
        var a = t(9268)
          , s = t(6394)
          , i = t.n(s)
          , r = t(6006);
        t(1973),
        t(8382);
        var l = t(8563)
          , n = {
            src: "/_next/static/media/slideShow1.6f890b58.jpg",
            height: 809,
            width: 1280,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBAEFAAAAAAAAAAAAAAABAAIDEQUEEhQhYf/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAaEQACAgMAAAAAAAAAAAAAAAABAgARAzHB/9oADAMBAAIRAxEAPwCVBh9RzmuOUmBi3vBY0C+ro+IiIxgL1GFxqRfTP//Z",
            blurWidth: 8,
            blurHeight: 5
        }
          , o = {
            src: "/_next/static/media/slideShow2.ce4d5430.jpg",
            height: 1068,
            width: 1600,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAbEAACAwADAAAAAAAAAAAAAAAAAQIDEQQScf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhEDEQA/AI27i003yh0TxRfurQALMhv/2Q==",
            blurWidth: 8,
            blurHeight: 5
        }
          , c = {
            src: "/_next/static/media/slideShow3.0006489a.jpg",
            height: 900,
            width: 1600,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAACAgEFAQAAAAAAAAAAAAABAgADBAUREhMicf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADBBES/9oADAMBAAIRAxEAPwCRk6L0qgty7blUgcWd9j99REQtzFSNR2OiuD0J/9k=",
            blurWidth: 8,
            blurHeight: 5
        }
          , d = {
            src: "/_next/static/media/slideShow4.d9ba1e2d.jpg",
            height: 608,
            width: 1080,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABAwMFAAAAAAAAAAAAAAABAAIDBBEhEiIxYaH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEBAQADAAAAAAAAAAAAAAAAAQACEUH/2gAMAwEAAhEDEQA/AJqmoW1UTYtZYZQ27wN18+Y47REQK7ZMuX//2Q==",
            blurWidth: 8,
            blurHeight: 5
        }
          , h = {
            src: "/_next/static/media/slideShow5.b502aa01.jpg",
            height: 521,
            width: 1156,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAACAgIDAQAAAAAAAAAAAAABAgADBAUREiFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABMf/aAAwDAQACEQMRAD8Ak67Y5RxHyHtZzXTY/RiSrEeDkfAPIiIbpv/Z",
            blurWidth: 8,
            blurHeight: 4
        }
          , m = {
            src: "/_next/static/media/slideShow6.03103579.jpg",
            height: 906,
            width: 960,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAcEAACAgMBAQAAAAAAAAAAAAABAgARAwQhBTH/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/EABgRAAMBAQAAAAAAAAAAAAAAAAABIQID/9oADAMBAAIRAxEAPwCj1d3R2FwqcRAVWNoSAxvl8+1ERE0oT/ebP//Z",
            blurWidth: 8,
            blurHeight: 8
        }
          , x = {
            src: "/_next/static/media/slideShow7.9e3fcc75.jpg",
            height: 900,
            width: 1600,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAABAwUBAAAAAAAAAAAAAAABAAMEAgURISLB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhEDEQA/AJSTbYrcIvhvoinWsdHHqIiAVbW//9k=",
            blurWidth: 8,
            blurHeight: 5
        }
          , u = {
            src: "/_next/static/media/slideShow8.4b79537a.jpg",
            height: 1068,
            width: 1600,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDIQQRBRIxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEBAQACAwAAAAAAAAAAAAAAAQIAERJB8P/aAAwDAQACEQMRAD8Ag4XGxsxnSDpqFtARi91Z+36iIhFar3WWzJwHWf/Z",
            blurWidth: 8,
            blurHeight: 5
        };
        class g extends r.Component {
            render() {
                return (0,
                a.jsx)("div", {
                    className: "mt-10 w-full",
                    children: (0,
                    a.jsx)(l.Z, {
                        dots: !0,
                        dotsClass: "slick-dots line-indicator",
                        infinite: !0,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: !1,
                        autoplay: !0,
                        responsive: [{
                            breakpoint: 1100,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: !0,
                                dots: !0
                            }
                        }],
                        customPaging: A => (0,
                        a.jsx)("div", {
                            className: "-mt-2 text-xs opacity-0",
                            children: A
                        }),
                        className: "w-full",
                        children: [{
                            img: n,
                            title: "Students learning Web3 basics",
                            text: "Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah on December 28th, where he assured the PIAIC management team of his full support for the national cause and offered space at all the public universities in Sindh."
                        }, {
                            img: c,
                            title: "First meeting with the President.",
                            text: "First official PIAIC meeting on November 1st, 2018. From left to right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad Ghazzal (COO Saylani Welfare Trust)."
                        }, {
                            img: o,
                            title: "President launching the PIAIC website.",
                            text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust)."
                        }, {
                            img: d,
                            title: "President launching the PIAIC website.",
                            text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust)."
                        }, {
                            img: h,
                            title: "President launching the PIAIC website.",
                            text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust)."
                        }, {
                            img: m,
                            title: "President launching the PIAIC website.",
                            text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust)."
                        }, {
                            img: x,
                            title: "President launching the PIAIC website.",
                            text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust)."
                        }, {
                            img: u,
                            title: "President launching the PIAIC website.",
                            text: "President Dr. Arif Alvi launching the official website of the PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange), Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani Welfare Trust)."
                        }].map( (A, e) => (0,
                        a.jsx)("div", {
                            className: "px-3 xl-lg:px-1 group mb-2 md:mb-5  relative overflow-hidden cursor-pointer outline-none",
                            children: (0,
                            a.jsx)("div", {
                                className: "relative bg-slate-900 rounded-lg overflow-hidden",
                                children: (0,
                                a.jsx)(i(), {
                                    src: A.img,
                                    className: "w-full h-[300px]  md:h-[600px] object-cover",
                                    alt: A.title
                                })
                            })
                        }, e))
                    })
                })
            }
        }
    },
    6926: function(A, e, t) {
        t.r(e),
        t.d(e, {
            default: function() {
                return x
            }
        });
        var a = t(9268)
          , s = t(7690)
          , i = t(7525)
          , r = t(6024)
          , l = t(8615)
          , n = t(9395)
          , o = t(4353)
          , c = t(6470)
          , d = t(4115)
          , h = t(1199)
          , m = t(1684);
        function x(A) {
            let {activeStep: e} = A
              , t = "#044e83";
            return (0,
            a.jsx)(s.v, {
                index: e,
                className: "w-[90%] lg:w-[800px] !justify-center mx-auto !flex-wrap",
                color: t,
                colorScheme: t,
                children: m.KT.map(A => (0,
                a.jsxs)(i.h, {
                    children: [(0,
                    a.jsx)(r.O, {
                        children: (0,
                        a.jsx)(l.k, {
                            complete: (0,
                            a.jsx)(n.Z, {}),
                            incomplete: (0,
                            a.jsx)(o.E, {}),
                            active: (0,
                            a.jsx)(o.E, {})
                        })
                    }), (0,
                    a.jsx)(c.xu, {
                        flexShrink: "0",
                        children: (0,
                        a.jsx)(d.r, {
                            className: "capitalize",
                            children: A.platform
                        })
                    }), (0,
                    a.jsx)(h.F, {})]
                }, A.id))
            })
        }
    },
    9399: function(A, e, t) {
        t.r(e),
        t.d(e, {
            default: function() {
                return h
            }
        });
        var a = t(9268)
          , s = t(3072)
          , i = t.n(s)
          , r = t(5846)
          , l = t.n(r)
          , n = t(6006)
          , o = t(1684)
          , c = t(4021)
          , d = t(9901);
        function h(A) {
            let {setShowSocialInvitation: e} = A
              , [t,s] = (0,
            n.useState)({
                facebook: "",
                youtube: "",
                twitter: "",
                instagram: ""
            })
              , {activeStep: r, setActiveStep: h} = (0,
            d.h)({
                index: 0,
                count: o.KT.length
            });
            (0,
            n.useEffect)( () => {
                let A = localStorage.getItem("facebook")
                  , e = localStorage.getItem("youtube")
                  , t = localStorage.getItem("twitter")
                  , a = localStorage.getItem("instagram");
                A && "y" === A && s(A => ({
                    ...A,
                    facebook: "y"
                })),
                e && "y" === e && s(A => ({
                    ...A,
                    youtube: "y"
                })),
                t && "y" === t && s(A => ({
                    ...A,
                    twitter: "y"
                })),
                a && "y" === a && s(A => ({
                    ...A,
                    instagram: "y"
                }))
            }
            , []);
            let m = (A, e) => {
                A && (window.open(A, "_blank"),
                setTimeout( () => {
                    h(A => 3 < A ? A : A + 1),
                    localStorage.setItem(e, "y"),
                    s(A => ({
                        ...A,
                        [e]: "y"
                    }))
                }
                , 2e3))
            }
            ;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)("div", {
                    className: "z-10 mx-4 my-10 flex w-full max-w-2xl flex-col items-center justify-center gap-5 rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-14 md:p-16",
                    children: [(0,
                    a.jsxs)("h2", {
                        className: "text-center text-xl text-main xs:text-3xl",
                        style: i().style,
                        children: ["Before continuing to the application please subscribe on these social media platforms.", " "]
                    }), (0,
                    a.jsx)("div", {
                        className: "mt-5 flex gap-3  md:text-sm",
                        children: (0,
                        a.jsx)("div", {
                            onClick: () => m(o.KT[r].link, o.KT[r].platform),
                            className: "flex h-8 w-8 cursor-pointer items-center justify-center ".concat(o.KT[r].class, " rounded-full text-white"),
                            children: o.KT[r].icon
                        }, o.KT[r].id)
                    }), t.facebook && t.youtube && t.instagram && t.twitter ? (0,
                    a.jsx)("button", {
                        onClick: () => e(!1),
                        className: "w-full bg-main py-4 text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed xs:w-52",
                        style: i().style,
                        children: "CONTINUE"
                    }) : (0,
                    a.jsxs)("div", {
                        className: "group w-full xs:w-52",
                        children: [(0,
                        a.jsx)("div", {
                            className: "popover rounded-lg bg-white px-4 py-2 text-center text-sm text-red-500 opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100",
                            children: (0,
                            a.jsx)("p", {
                                children: "Click the icon above first."
                            })
                        }), (0,
                        a.jsx)("button", {
                            disabled: !0,
                            className: "w-full bg-main py-4 text-center font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed xs:w-52",
                            style: i().style,
                            children: "CONTINUE"
                        })]
                    }), (0,
                    a.jsxs)("p", {
                        className: "text-center",
                        children: ["Already applied?", " ", (0,
                        a.jsx)(l(), {
                            className: "text-blue-400 underline",
                            href: "/admit-card",
                            children: "Get Admit Card"
                        })]
                    })]
                }), (0,
                a.jsx)(c.r6, {
                    activeStep: r
                })]
            })
        }
    },
    254: function(A, e, t) {
        t.r(e),
        t.d(e, {
            default: function() {
                return i
            }
        });
        var a = t(9268)
          , s = t(3277);
        function i(A) {
            let {children: e} = A;
            return (0,
            a.jsx)(s.x, {
                children: e
            })
        }
    },
    4021: function(A, e, t) {
        t.d(e, {
            Kn: function() {
                return x
            },
            Fg: function() {
                return c.default
            },
            v9: function() {
                return b.default
            },
            PJ: function() {
                return O
            },
            II: function() {
                return s
            },
            aN: function() {
                return o
            },
            ah: function() {
                return w.default
            },
            yl: function() {
                return f
            },
            r6: function() {
                return p.default
            },
            f3: function() {
                return z.default
            }
        }),
        t(254);
        var a = t(9268);
        function s(A) {
            var e;
            let {id: t, placeholder: s, type: i, required: r, register: l, errors: n, occupiedErr: o, setOccupiedErr: c} = A
              , d = A => {
                !A.ctrlKey && (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(A.key) || ["Backspace", "Tab", "Delete", "ArrowLeft", "ArrowRight", "Control", "Enter"].includes(A.key) || A.preventDefault())
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: "my-6",
                children: [(0,
                a.jsxs)("label", {
                    htmlFor: t,
                    className: "mb-6 mt-4 text-slate-700 md:text-xl",
                    children: [s, " ", r ? "*" : "(optional)"]
                }), (0,
                a.jsxs)("div", {
                    className: "".concat("phoneNumber" === t ? "mb-2 mt-1 flex" : ""),
                    children: ["phoneNumber" === t ? (0,
                    a.jsx)("div", {
                        className: "flex h-12 w-10 flex-shrink-0 items-center justify-center rounded-l border border-r-0 border-gray-400 bg-gray-100 p-3 text-gray-400 xs:w-[10%] md:text-xl",
                        children: "+92"
                    }) : "", (0,
                    a.jsx)("input", {
                        type: i,
                        onKeyDown: "cnic" === t || "phoneNumber" === t || "otp" === t || "regNo" === t ? d : () => {}
                        ,
                        id: t,
                        maxLength: "cnic" === t ? "13" : "phoneNumber" === t ? 10 : "otp" === t ? 6 : "regNo" === t ? 10 : "",
                        max: "date" === i ? "".concat(new Date().getFullYear() - 13, "-12-29") : "",
                        className: "block h-12 w-full border border-gray-400 bg-gray-100 p-3 ".concat((null == n ? void 0 : n[t]) || (null == o ? void 0 : o[t]) ? "border-red-400 ring-red-500" : "focus:border-sub focus:ring-sub", " outline-none focus:ring-1 md:text-xl ").concat("phoneNumber" === t ? "rounded-r" : "mb-2 mt-1 rounded"),
                        placeholder: " ".concat(s),
                        ...l(t, {
                            valueAsNumber: "cnic" === t || "phoneNumber" === t
                        }),
                        onFocus: (null == o ? void 0 : o[t]) ? () => {
                            c && c({
                                phoneNumber: "",
                                cnic: "",
                                email: "",
                                otp: "",
                                regNo: ""
                            })
                        }
                        : () => {}
                    })]
                }), ((null == n ? void 0 : n[t]) || (null == o ? void 0 : o[t])) && (0,
                a.jsx)("p", {
                    className: "mb-4 text-red-400",
                    children: "".concat((null == n ? void 0 : null === (e = n[t]) || void 0 === e ? void 0 : e.message) || (null == o ? void 0 : o[t]))
                })]
            })
        }
        t(2087);
        var i = t(6394)
          , r = t.n(i);
        t(6006);
        var l = t(5846)
          , n = t.n(l);
        function o(A) {
            let {width: e, height: t} = A;
            return (0,
            a.jsx)("div", {
                className: "flex items-center justify-center",
                children: (0,
                a.jsx)("div", {
                    className: "inline-block ".concat(t, " ").concat(e, " animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"),
                    role: "status",
                    children: (0,
                    a.jsx)("span", {
                        className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
                        children: "Loading..."
                    })
                })
            })
        }
        t(499),
        t(7386),
        t(6047),
        t(7911),
        t(5828),
        t(3721),
        t(9808),
        t(6638),
        t(4009),
        t(6760),
        t(1684),
        t(8198),
        t(4945),
        t(7642),
        t(4396);
        var c = t(209)
          , d = t(7294)
          , h = t.n(d)
          , m = t(2943);
        function x(A) {
            let {data: e} = A;
            return (0,
            a.jsxs)("div", {
                className: "w-[95%] max-w-4xl border-2 border-gray-800 p-3 print:hidden xs:p-10",
                children: [(0,
                a.jsxs)("div", {
                    className: "flex items-center justify-evenly",
                    children: [(0,
                    a.jsx)(r(), {
                        src: m.default,
                        alt: "govt sindh logo",
                        width: 90,
                        className: "w-[70px] sm:w-[80px] md:w-[90px]"
                    }), (0,
                    a.jsxs)("h1", {
                        style: h().style,
                        className: "text-center text-lg font-bold text-main md:text-3xl",
                        children: ["Governor Sindh Initiative for", (0,
                        a.jsx)("br", {
                            className: "hidden md:block"
                        }), "Artificial Intelligence, Web 3.0 & Metaverse"]
                    }), (0,
                    a.jsx)("div", {})]
                }), (0,
                a.jsx)("h2", {
                    style: h().style,
                    className: "my-7 text-center text-sm font-bold text-black xs:text-lg md:text-3xl",
                    children: "Entry Test Admit Card"
                }), (0,
                a.jsxs)("div", {
                    className: "mb-6 flex flex-col items-center justify-evenly border-b border-zinc-500 pb-6 md:flex-row",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "image flex h-40 w-32 items-center justify-center border-2 border-dotted border-gray-900 text-center md:order-last md:w-40",
                        children: ["Paste", (0,
                        a.jsx)("br", {}), "Photograph", (0,
                        a.jsx)("br", {}), "1 X 1"]
                    }), (0,
                    a.jsxs)("div", {
                        className: "fields",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "my-1 flex text-lg",
                            children: [(0,
                            a.jsx)("h6", {
                                className: "w-40 font-bold min-[375px]:w-48 md:w-52",
                                children: "Student Name :"
                            }), (0,
                            a.jsxs)("p", {
                                className: "w-32 border-b-2 border-gray-700  capitalize xs:w-48 md:w-60",
                                children: [e.fullName, (0,
                                a.jsx)("span", {
                                    className: "h-[2px] w-full bg-gray-700"
                                })]
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "my-1 flex text-lg",
                            children: [(0,
                            a.jsx)("h6", {
                                className: "w-40 font-bold min-[375px]:w-48 md:w-52",
                                children: "Father's Name :"
                            }), (0,
                            a.jsxs)("p", {
                                className: "w-32 border-b-2 border-gray-700  capitalize xs:w-48 md:w-60 ",
                                children: [e.fatherName, (0,
                                a.jsx)("span", {
                                    className: "h-[2px] w-full bg-gray-700"
                                })]
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "my-1 flex text-lg",
                            children: [(0,
                            a.jsx)("h6", {
                                className: "w-40 font-bold min-[375px]:w-48 md:w-52",
                                children: "Student CNIC No :"
                            }), (0,
                            a.jsx)("p", {
                                className: "w-32 border-b-2 border-gray-700  capitalize xs:w-48 md:w-60",
                                children: e.cnic
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "my-1 flex  text-lg",
                            children: [(0,
                            a.jsx)("h6", {
                                className: "w-40 font-bold min-[375px]:w-48 md:w-52",
                                children: "Student Reg No :"
                            }), (0,
                            a.jsx)("p", {
                                className: "w-32 border-b-2 border-gray-700 capitalize xs:w-48 md:w-60",
                                children: "".concat(e.studentId).padStart(8, "0")
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "my-1 flex text-lg",
                            children: [(0,
                            a.jsx)("h6", {
                                className: "w-40 font-bold min-[375px]:w-48 md:w-52",
                                children: "Date of Registration :"
                            }), (0,
                            a.jsxs)("p", {
                                className: "w-32 border-b-2 border-gray-700  capitalize xs:w-48 md:w-60",
                                children: ["".concat(new Date(e.dateOfRegistration).toLocaleDateString()), (0,
                                a.jsx)("span", {
                                    className: "h-[2px] w-full bg-gray-700"
                                })]
                            })]
                        })]
                    })]
                }), (0,
                a.jsx)("h2", {
                    className: "my-2 text-lg font-bold",
                    children: "Instructions :"
                }), (0,
                a.jsxs)("ul", {
                    className: "my-2 pl-6",
                    children: [(0,
                    a.jsx)("li", {
                        children: "Please bring your original CNIC or B-Form and admit card hard copy."
                    }), (0,
                    a.jsx)("li", {
                        children: "Details and date of the entrance exam will be emailed to you."
                    })]
                })]
            })
        }
        var u = t(4146)
          , g = t.n(u);
        function f(A) {
            let {data: e} = A;
            return (0,
            a.jsxs)("div", {
                className: "hidden w-[800px] border-2 border-gray-800 bg-red-400 p-10 print:block",
                children: [(0,
                a.jsxs)("div", {
                    className: "flex items-center",
                    children: [(0,
                    a.jsx)(r(), {
                        src: m.default,
                        alt: "govt sindh logo",
                        width: 90,
                        className: "w-[70px] sm:w-[80px] md:w-[90px]"
                    }), (0,
                    a.jsxs)("h1", {
                        style: g().style,
                        className: "text-center text-3xl font-bold text-main",
                        children: ["Governor Sindh Initiative for", (0,
                        a.jsx)("br", {}), "Artificial Intelligence, Web 3.0 & Metaverse"]
                    })]
                }), (0,
                a.jsx)("h2", {
                    style: g().style,
                    className: "my-7 text-center text-3xl font-bold text-black",
                    children: "Entry Test Admit Card"
                }), (0,
                a.jsxs)("div", {
                    className: "mb-6 flex items-center justify-evenly border-b border-zinc-500 pb-6",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "fields",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "my-1 flex text-lg",
                            children: [(0,
                            a.jsx)("h6", {
                                className: "w-52 font-bold",
                                children: "Student Name :"
                            }), (0,
                            a.jsx)("p", {
                                className: "w-60 border-b-2 border-gray-700 capitalize",
                                children: e.fullName
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "my-1 flex text-lg",
                            children: [(0,
                            a.jsx)("h6", {
                                className: "w-52 font-bold",
                                children: "Father's Name :"
                            }), (0,
                            a.jsx)("p", {
                                className: "w-60 border-b-2 border-gray-700 capitalize",
                                children: e.fatherName
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "my-1 flex text-lg",
                            children: [(0,
                            a.jsx)("h6", {
                                className: "w-52 font-bold",
                                children: "Student CNIC Number :"
                            }), (0,
                            a.jsx)("p", {
                                className: "w-60 border-b-2 border-gray-700 capitalize",
                                children: e.cnic
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "my-1 flex text-lg",
                            children: [(0,
                            a.jsx)("h6", {
                                className: "w-52 font-bold",
                                children: "Student Reg Number :"
                            }), (0,
                            a.jsx)("p", {
                                className: "w-60 border-b-2 border-gray-700 capitalize",
                                children: "".concat(e.studentId).padStart(8, "0")
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "my-1 flex text-lg",
                            children: [(0,
                            a.jsx)("h6", {
                                className: "w-52 font-bold",
                                children: "Date of Registration :"
                            }), (0,
                            a.jsx)("p", {
                                className: "w-60 border-b-2 border-gray-700 capitalize",
                                children: "".concat(new Date(e.dateOfRegistration).toLocaleDateString())
                            })]
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "image order-last flex h-40 w-40 items-center justify-center border-2 border-dotted border-gray-900 text-center",
                        children: ["Paste", (0,
                        a.jsx)("br", {}), "Photograph", (0,
                        a.jsx)("br", {}), "1 X 1"]
                    })]
                }), (0,
                a.jsx)("h2", {
                    className: "my-2 text-lg font-bold",
                    children: "Instructions :"
                }), (0,
                a.jsxs)("ul", {
                    className: "my-2 pl-6",
                    children: [(0,
                    a.jsx)("li", {
                        children: "Please bring your original CNIC or B-Form and admit card hard copy."
                    }), (0,
                    a.jsx)("li", {
                        children: "Details and date of the entrance exam will be emailed to you."
                    })]
                })]
            })
        }
        var w = t(1800)
          , b = t(9854)
          , z = t(9399)
          , E = t(2801);
        function O() {
            return (0,
            a.jsxs)("div", {
                className: "my-5 flex gap-3  md:text-sm",
                children: [(0,
                a.jsx)(n(), {
                    href: "https://www.facebook.com/TeamKTessori",
                    target: "_blank",
                    className: "flex h-8 w-8 items-center justify-center rounded-full bg-[#4267B2] text-white",
                    children: (0,
                    a.jsx)(E.tBk, {
                        className: "h-5 w-5"
                    })
                }), (0,
                a.jsx)(n(), {
                    href: "https://www.youtube.com/@KamranTessorikk",
                    target: "_blank",
                    className: "flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white",
                    children: (0,
                    a.jsx)(E.V2E, {
                        className: "h-5 w-5"
                    })
                }), (0,
                a.jsx)(n(), {
                    href: "https://twitter.com/KamranTessoriPk",
                    target: "_blank",
                    className: "flex h-8 w-8 items-center justify-center rounded-full bg-[#1DA1F2] text-white",
                    children: (0,
                    a.jsx)(E.fWC, {
                        className: "h-5 w-5"
                    })
                }), (0,
                a.jsx)(n(), {
                    href: "https://instagram.com/KamranTessoriPk",
                    target: "_blank",
                    className: "instagram flex h-8 w-8 items-center justify-center rounded-full text-white",
                    children: (0,
                    a.jsx)(E.Zf_, {
                        className: "h-5 w-5"
                    })
                }), (0,
                a.jsx)(n(), {
                    href: "https://tiktok.com/@KamranTessoriPk",
                    target: "_blank",
                    className: "flex h-8 w-8 items-center justify-center rounded-full bg-[#171515] text-white",
                    children: (0,
                    a.jsx)(E.nTm, {
                        className: "h-5 w-5"
                    })
                })]
            })
        }
        var p = t(6926);
        t(8206)
    },
    1684: function(A, e, t) {
        t.d(e, {
            dm: function() {
                return s
            },
            P: function() {
                return r
            },
            DQ: function() {
                return i
            },
            KT: function() {
                return c
            },
            RJ: function() {
                return a
            }
        });
        let a = [{
            id: "wmd",
            name: "Web 3 and Metaverse"
        }, {
            id: "cnc",
            name: "Cloud-Native Computing"
        }, {
            id: "ai",
            name: "Artificial Intelligence (AI) and Deep Learning"
        }, {
            id: "iot",
            name: "Ambient Computing and IoT"
        }, {
            id: "gbs",
            name: "Genomics and Bioinformatics"
        }, {
            id: "npa",
            name: "Network Programmability and Automation"
        }]
          , s = [{
            id: "1",
            text: "Programming Fundamentals"
        }, {
            id: "2",
            text: "Web2 Using NextJS"
        }, {
            id: "3",
            text: "Earn as You Learn"
        }]
          , i = ["Under middle (Under grade 8)", "Matric / O Levels", "Intermediate / A Levels", "Undergraduate (Bachelor's)", "Graduate (Master's)", "Post-Graduate (PhD)"]
          , r = ["Badin", "Bhirkan", "Rajo Khanani", "Chak", "Dadu", "Digri", "Diplo", "Dokri", "Ghotki", "Haala", "Hyderabad", "Islamkot", "Jacobabad", "Jamshoro", "Jungshahi", "Kandhkot", "Kandiaro", "Kashmore", "Keti Bandar", "Khairpur", "Kotri", "Larkana", "Matiari", "Mehar", "Mirpur Khas", "Mithani", "Mithi", "Mehrabpur", "Moro", "Nagarparkar", "Naudero", "Naushahro Feroze", "Naushara", "Nawabshah", "Nazimabad", "Qambar", "Qasimabad", "Ranipur", "Ratodero", "Rohri", "Sakrand", "Sanghar", "Shahbandar", "Shahdadkot", "Shahdadpur", "Shahpur Chakar", "Shikarpaur", "Sukkur", "Tangwani", "Tando Adam Khan", "Tando Allahyar", "Tando Muhammad Khan", "Thatta", "Umerkot", "Warah"];
        var l = t(9268)
          , n = t(2801)
          , o = t(4526);
        let c = [{
            id: 1,
            platform: "facebook",
            link: "https://www.facebook.com/TeamKTessori",
            class: "bg-[#4267B2]",
            icon: (0,
            l.jsx)(n.tBk, {
                className: "h-5 w-5"
            })
        }, {
            id: 2,
            platform: "youtube",
            link: "https://www.youtube.com/channel/UCFo-Z1Tp-Tus4D-YQNlue6A?sub_confirmation=1",
            class: "bg-[#FF0000]",
            icon: (0,
            l.jsx)(n.V2E, {
                className: "h-5 w-5"
            })
        }, {
            id: 3,
            platform: "twitter",
            link: "https://twitter.com/KamranTessoriPk",
            class: "bg-[#1DA1F2]",
            icon: (0,
            l.jsx)(n.fWC, {
                className: "h-5 w-5"
            })
        }, {
            id: 4,
            platform: "instagram",
            link: "https://www.instagram.com/KamranTessoriPk/",
            class: "instagram",
            icon: (0,
            l.jsx)(n.Zf_, {
                className: "h-5 w-5"
            })
        }, {
            id: 5,
            platform: "Apply",
            link: "",
            class: "bg-green-500 !cursor-not-allowed",
            icon: (0,
            l.jsx)(o.pkh, {
                size: 14
            })
        }]
    },
    5828: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/AI.39397d24.jpg",
            height: 768,
            width: 1152,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDEQQFEyFRsf/EABUBAQEAAAAAAAAAAAAAAAAAAAAF/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAIRAVH/2gAMAwEAAhEDEQA/AJfSY0D8qXWGMcb4w4uoXfR8+IiKgq5wSn//2Q==",
            blurWidth: 8,
            blurHeight: 5
        }
    },
    6760: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/automation.a77dbbe8.jpg",
            height: 768,
            width: 1152,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABAwMFAAAAAAAAAAAAAAACAAEDBBESBSEiMVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAwDAQACEQMRAD8Ai2GKq0YJTE8hlZrZ8Xa3ltukREZV4Bf/2Q==",
            blurWidth: 8,
            blurHeight: 5
        }
    },
    9808: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/cloudComputing.7260492c.jpg",
            height: 768,
            width: 1152,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAABBAIDAAAAAAAAAAAAAAABAAIDBAUhETGB/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAaEQACAgMAAAAAAAAAAAAAAAABAgADESEx/9oADAMBAAIRAxEAPwCOxskFqpNJk64vPEfMZe4tLT1sjZ9KIioVqpGxBuTns//Z",
            blurWidth: 8,
            blurHeight: 5
        }
    },
    499: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/cover.1d863e39.png",
            height: 1212,
            width: 1600,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAM1BMVEUyMjJOTWwDAQAwNFJbTVgeJlUNAgABAAFNQ2NUIQMYBwEAAACpf4w1GRtAJRoWEjKaUC43/cjDAAAADXRSTlMBxaryVn1x/CeLsSxi9kgzNgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJxjYGBg4WNjAAMeAU4Ig4OXC8Jg5WdnAjMYednZOUAyzOzs7NwMABPHAMmgf/beAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 6
        }
    },
    7911: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/earn_as_your_learn.b8248a49.jpg",
            height: 768,
            width: 1152,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAAABgIDAAAAAAAAAAAAAAAAAQMEBRECURIUIf/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQIAEf/aAAwDAQACEQMRAD8Alph2k2jUHHVTyUOy5Wd692AAEqnXXUg83//Z",
            blurWidth: 8,
            blurHeight: 5
        }
    },
    4009: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/genomics.b87789f1.jpg",
            height: 768,
            width: 1152,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAwEBAAAAAAAAAAAAAAAAAwECERIx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQADAQAAAAAAAAAAAAAAAAAAAjEh/9oADAMBAAIRAxEAPwCcospdcWmteZ93ZkAENtDU/9k=",
            blurWidth: 8,
            blurHeight: 5
        }
    },
    8198: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/imageWebsite.5c6ae62f.jpg",
            height: 896,
            width: 1088,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABAwMFAAAAAAAAAAAAAAABAAIEAwUTEjFBUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8Al5F/i4KMYW0HJTOV7iBqPDmgbe9oiJ2CWUf/2Q==",
            blurWidth: 8,
            blurHeight: 7
        }
    },
    4945: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/imageWebsite2.a102c7b5.jpg",
            height: 375,
            width: 500,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAABAwUBAAAAAAAAAAAAAAAAAQMRAhITFDEi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AJorjGolOL1b2E5AALDH/9k=",
            blurWidth: 8,
            blurHeight: 6
        }
    },
    7642: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/imageWebsite3.b845fe78.jpg",
            height: 896,
            width: 1088,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAACAQQDAQAAAAAAAAAAAAABAgADBAURE0FRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGxEBAAICAwAAAAAAAAAAAAAAAgEDABEEEiH/2gAMAwEAAhEDEQA/AI65jGXCW7NTulauGAqkhuNh1onZH3fkREq4dYsEyzv3BvlFR1Ws/9k=",
            blurWidth: 8,
            blurHeight: 7
        }
    },
    6638: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/iot.16f7b003.jpg",
            height: 768,
            width: 1152,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBAEFAAAAAAAAAAAAAAADAAECBBEFBhMhgf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAQUAAAAAAAAAAAAAAAAAAAECAyEy/9oADAMBAAIRAxEAPwCLq98YtvVSBqwHZk3GU7PmU2xnzt0RFQ5bDjyf/9k=",
            blurWidth: 8,
            blurHeight: 5
        }
    },
    2943: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/logo.9ff76f62.png",
            height: 176,
            width: 140,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAALVBMVEVMaXGBpYqou6yguqeXtJ5slnaVsJtijm2MqpO5yr5gjGuQrJa4x7Wju6p3nYDotA/XAAAADnRSTlMA/mz8/P5u1P1jxGBFdUG/hU4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicHcq5EQAgDASxPRswr/svl4FIiQAbAFbcYMldh1lLz3gog1W9Z4Mt/doMLhdFAN6gSdtrAAAAAElFTkSuQmCC",
            blurWidth: 6,
            blurHeight: 8
        }
    },
    3721: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/metaverse.06eccb60.jpg",
            height: 768,
            width: 1152,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAABAwIHAAAAAAAAAAAAAAACAAEEAwUREiEiMVGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAZEQEAAwEBAAAAAAAAAAAAAAABAAIDESH/2gAMAwEAAhEDEQA/AIW0tGmyqNvOKIBnxeoD736508RERppYfGVVoJ2f/9k=",
            blurWidth: 8,
            blurHeight: 5
        }
    },
    6047: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/nextjs.3dff0f70.jpg",
            height: 768,
            width: 1152,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAACAQUBAAAAAAAAAAAAAAABAgADBAURIYH/xAAVAQEBAAAAAAAAAAAAAAAAAAACBf/EABYRAQEBAAAAAAAAAAAAAAAAAAEAMf/aAAwDAQACEQMRAD8An2NQNbVS/VV+60CfYiIDWoOF/9k=",
            blurWidth: 8,
            blurHeight: 5
        }
    },
    7386: function(A, e, t) {
        t.r(e),
        e.default = {
            src: "/_next/static/media/programming_fundamentals.49cca4e9.jpg",
            height: 768,
            width: 1152,
            blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAABBAMBAAAAAAAAAAAAAAACAAEDEQQVIUH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABkRAAIDAQAAAAAAAAAAAAAAAAACARESIf/aAAwDAQACEQMRAD8AldtJJhlmuJPNIZATkbld9vvvUREleaothW7J/9k=",
            blurWidth: 8,
            blurHeight: 5
        }
    }
}]);








