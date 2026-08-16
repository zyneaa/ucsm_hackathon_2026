import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// ASSET IMPORTS
import NavTableSvg from '../assets/NavTable.svg';
import HeroBg from '../assets/HeroBg.png';
import HeroImg from '../assets/Hero.png';
import CelebrateBg from '../assets/CelebrateBg.png';
import BuildBg from '../assets/BuildBg.png';
import InnovateBg from '../assets/InnovateBg.png';
import HandImg from '../assets/Hand.png';
import CompeteBg from '../assets/CompeteBg.png';
import WinBg from '../assets/WinBg.png';
import WhereCodeBg from '../assets/WhereCodeBg.png';
import BarcodeSvg from '../assets/Barcode.svg';
import SkwedWiredFrameSvg from '../assets/SkwedWiredFrame.svg';
import FooterSvg from '../assets/Footer.svg';
import { GrandChallenge } from '../components/GrandChallenge';

export const Home: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full text-white overflow-x-hidden min-h-screen flex flex-col font-mono">

            {/* 1. NAVBAR SECTION */}
            {/* Mobile Nav (Hamburger) */}
            <header className="md:hidden flex justify-between items-center p-4 border-b border-white/20 bg-black sticky top-0 z-50">
                <span className="font-mono text-sm tracking-widest uppercase">UCSM AI 2026</span>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden flex flex-col bg-black border-b border-white/20 px-4 py-2 uppercase text-xs z-40">
                    <a href="#home" className="py-3 border-b border-white/10">Home</a>
                    <a href="#teams" className="py-3 border-b border-white/10">Teams</a>
                    <a href="#projects" className="py-3 border-b border-white/10">Projects</a>
                    <a href="#about" className="py-3 border-b border-white/10">About Us</a>
                    <a href="#contact" className="py-3 border-b border-white/10">Contact Us</a>
                    <a href="#sponsors" className="py-3">Our Sponsors</a>
                </div>
            )}

            {/* Desktop Nav using NavTable.svg */}

            <div className="w-full flex lg:flex-row flex-col py-2 bg-brand-primary">
                <div className="order-1 lg:order-2 w-[40%] pl-10">
                    <div
                        style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: 'cover' }}
                    >
                        <span className="left-4 -rotate-180 origin-top-left text-[50px] tracking-widest text-white/50 uppercase z-20">
                            UCSM AI HACKATHON 2026
                        </span>
                        <img src={HeroImg} alt="Hero Statue" className="relative z-10 w-full lg:max-w-full h-auto" />
                    </div>
                </div>

                <div className="order-2 lg:order-1 w-full bg-brand-primary">
                    <div className="flex flex-col h-full w-full relative overflow-visible">
                        <div
                            className="relative flex flex-col flex-grow bg-white h-[30%] overflow-visible p-3"
                        >
                            <span className="text-[10px] tracking-widest text-brand-secondary block mb-2 uppercase">UCSM . September 13</span>
                            <h1 className="font-serif font-[50] text-xl md:text-3xl lg:text-7xl text-brand-secondary uppercase">
                                Celebrating 29 years of academic excellence & technological innovation through artificial intelligence
                            </h1>
                            <span className="absolute top-4 right-4 text-[20px] text-brand-secondary">01</span>
                        </div>
                        <div className="h-[70%] relative overflow-visible">
                            <div className="absolute top-0 -right-6 -left-6 border-t border-brand-secondary/50 pointer-events-none z-20" />
                            <div className="absolute bottom-0 -right-6 -left-6 border-b border-brand-secondary/50 pointer-events-none z-20" />
                            <div className="flex flex-row overflow-visible snap-x snap-mandatory lg:grid lg:grid-cols-3 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-full">

                                <div
                                    className="min-w-[100vw] lg:min-w-0 snap-center relative p-4 h-full overflow-visible flex flex-col justify-between shrink-0"
                                    style={{ backgroundImage: `url(${InnovateBg})`, backgroundSize: 'cover' }}
                                >
                                    <div className="absolute -top-6 -bottom-6 right-0 border-r border-brand-secondary/50 pointer-events-none z-20" />
                                    <span className="text-[10px] md:text-[30px] relative z-10 text-brand-secondary/80">innovate</span>
                                    <img src={InnovateBg} alt="Innovate Hand" className="absolute inset-0 w-full h-full object-cover" />
                                    <span className="text-[10px] md:text-[30px] text-brand-secondary/80 relative z-10">04</span>
                                </div>

                                <div className="min-w-[100vw] lg:min-w-0 snap-center relative h-full flex overflow-visible">
                                    {/* Right Border Outbound Line */}
                                    <div className="absolute -top-6 -bottom-6 right-0 border-r border-brand-secondary/50 pointer-events-none z-20" />

                                    {/* Card Content */}
                                    <div
                                        className="h-full w-full bg-cover bg-center relative p-3 md:p-4"
                                        style={{ backgroundImage: `url(${BuildBg})` }}
                                    >
                                        {/* Number (Top-Left) */}
                                        <span className="absolute top-3 left-3 text-[10px] md:text-[30px] text-brand-secondary/80 leading-none">
                                            02
                                        </span>

                                        {/* Text (Bottom-Right) */}
                                        <span className="absolute bottom-3 right-3 text-[10px] md:text-[30px] text-brand-primary/80 leading-none">
                                            build
                                        </span>
                                    </div>
                                </div>
                                <div className="min-w-[100vw] lg:min-w-0 snap-center relative flex flex-col h-full shrink-0">
                                    {/* Compete */}
                                    <div className="h-[60%] relative">
                                        <div className="relative p-3 flex justify-between items-start bg-brand-primary bg-cover h-full" style={{ backgroundImage: `url(${CompeteBg})` }}>
                                            <span className="text-[10px] md:text-[30px] text-brand-secondary/80">compete</span>
                                            <span className="text-[10px] md:text-[30px] text-brand-secondary/80">03</span>
                                        </div>
                                        <div className="absolute bottom-0 -left-6 -right-6 border-b border-brand-secondary/40 pointer-events-none z-10" />
                                    </div>

                                    {/* Win Box with Outbound Top/Bottom Borders */}
                                    <div className="h-[40%] relative">
                                        <div className="p-3 flex justify-between items-end h-full" style={{ backgroundImage: `url(${WinBg})`, backgroundSize: 'cover' }}>
                                            <span className="text-[10px] md:text-[30px] text-brand-secondary/80">05</span>
                                            <span className="text-[10px] md:text-[30px] text-brand-secondary/80">win</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-6 -bottom-6 right-0 border-r border-brand-secondary/70 pointer-events-none z-20" />
                    </div>
                </div>
            </div>

            {/* 3. WHERE CODE BECOMES REALITY SECTION */}
            <section className="w-full h-full font-mono overflow-hidden pt-4 bg-brand-primary">
                <div className="mx-auto h-full">

                    {/* MAIN TICKET CONTAINER */}
                    <div className="relative border-t border-brand-secondary/50 flex flex-row items-stretch h-auto">

                        {/* 1. LEFT STUB: 29 YEARS */}
                        <div className="w-[15%] shrink-0 justify-center flex flex-col justify-between items-center p-4 bg-white relative border-r border-brand-secondary/50">
                            <span className="text-[10px] md:text-[30px] uppercase tracking-widest text-black/70 font-serif">
                                CELEBRATING
                            </span>
                            <div className="text-brand-primary w-full pb-6 flex items-center justify-center m-8">
                                <h1 className="font-serif text-4xl md:text-[250px] font-normal leading-none bg-brand-secondary p-3">
                                    29
                                </h1>
                            </div>
                            <span className="text-[10px] md:text-[30px] uppercase tracking-widest text-black/70 font-serif">
                                YEARS
                            </span>
                        </div>

                        {/* 2. MIDDLE CONTENT: Banner + Barcode + Meta */}
                        <div className="w-[55%] flex-grow flex flex-col justify-between relative ml-12 mt-[100px] py-4 bg-white h-full">
                            <div
                                className="relative bg-cover bg-center bg-no-repeat h-[350px] m-6 p-4 md:p-12 text-start flex flex-col justify-center"
                                style={{ backgroundImage: `url(${WhereCodeBg})` }}
                            >
                                <div className="absolute z-20 top-1/2 -translate-y-1/2 -left-24 w-[200vw] h-[1px] bg-brand-secondary/50 pointer-events-none" />

                                {/* Title Text */}
                                <h2 className="relative z-10 p-2 text-4xl sm:text-6xl md:text-8xl font-thin tracking-[0.2em] uppercase font-mono leading-tight">
                                    WHERE CODE<br />BECOMES REALITY
                                </h2>
                            </div>

                            {/* Barcode Section */}
                            <div className="my-3 relative z-10">
                                <img
                                    src={BarcodeSvg}
                                    alt="Barcode"
                                    className="w-full h-full object-cover grayscale"
                                />
                            </div>

                            {/* Hex & Status Tag Row */}
                            <div className="flex justify-between items-center text-[10px] md:text-[20px] pt-2 relative z-10 text-brand-secondary h-full">
                                <div className="absolute z-20 top-1/2 -translate-y-1/2 -left-24 w-[200vw] h-[1px] bg-brand-secondary/50 pointer-events-none" />
                                <span className="relative z-30 translate-y-3">0xb32122</span>
                                <span className="relative z-30 translate-y-3">0xa233da</span>
                                <span className="relative z-30 translate-y-3">// init hackathon //</span>
                            </div>

                            {/* CPU Registers Bottom Row with Intersecting Node Dots */}
                            <div className="relative pt-3 flex justify-between items-center text-[9px] md:text-[15px] text-black/80 font-mono pr-3">
                                <div className="absolute z-20 top-1/2 -translate-y-1/2 -left-24 w-[200vw] h-[1px] bg-brand-secondary/50 pointer-events-none" />
                                <span className="relative z-30 translate-y-3">RAX</span>
                                <span className="relative z-30 translate-y-3">RBX</span>
                                <span className="relative z-30 translate-y-3">RCX</span>
                                <span className="relative z-30 translate-y-3">RDX</span>
                                <span className="relative z-30 translate-y-3">RSI</span>
                                <span className="relative z-30 translate-y-3">RDI</span>
                                <span className="relative z-30 translate-y-3">RBP</span>
                            </div>
                        </div>

                        {/* 3. RIGHT STUB: Isometric Wireframe */}
                        <div className="w-[30%] shrink-0 border-l border-brand-secondary/50 flex bg-white relative z-10">
                            <div
                                className="w-1/2 h-full bg-contain bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${HandImg})` }}
                            />
                            <div className="w-[50%] flex flex-col gap-4 h-full">
                                <img
                                    src={SkwedWiredFrameSvg}
                                    alt="Wireframe"
                                    className="h-full object-cover"
                                />
                                <img
                                    src={SkwedWiredFrameSvg}
                                    alt="Wireframe"
                                    className="h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </section >

            {/* 4. GRAND CHALLENGE SECTION */}
            <GrandChallenge />

            {/* 5. FOOTER SECTION */}
            < footer className="w-full bg-[#0B0C10]" >
                <img src={FooterSvg} alt="Footer Logo/Graphics" className="w-full h-auto object-cover block" />
            </footer>

        </div >
    );
};
