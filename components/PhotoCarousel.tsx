'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: '/images/image0.jpeg', alt: 'Child playing outdoors' },
  { src: '/images/image1.jpeg', alt: 'Kids playing on slide' },
  { src: '/images/1760.jpeg', alt: 'Children enjoying daycare activities' },
  { src: '/images/1762.jpeg', alt: 'Happy moments at Sunnyland' },
];

export default function PhotoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const scrollByPage = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: 'none' }}
      >
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative flex-shrink-0 basis-full sm:basis-[calc(50%-0.5rem)] h-[280px] sm:h-[380px] rounded-3xl overflow-hidden shadow-lg snap-start"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label="Scroll photos left"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-opacity focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
      )}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label="Scroll photos right"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-opacity focus:outline-none"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      )}
    </div>
  );
}
