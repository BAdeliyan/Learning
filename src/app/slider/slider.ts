import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.html',
  styleUrls: ['./slider.css'],
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  private autoPlayInterval: any = null;
  private currentIndex = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    // فقط در مرورگر اجرا شود
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSlider();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  private initializeSlider(): void {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!slides.length || !dots.length) {
      console.warn('اسلایدها یا اندیکاتورها پیدا نشدند!');
      return;
    }

    const showSlide = (index: number) => {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;

      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i]?.classList.remove('active');
      });

      slides[index].classList.add('active');
      dots[index]?.classList.add('active');

      this.currentIndex = index;
    };

    const nextSlide = () => showSlide(this.currentIndex + 1);
    const prevSlide = () => showSlide(this.currentIndex - 1);

    const startAutoPlay = () => {
      this.stopAutoPlay();
      this.autoPlayInterval = setInterval(nextSlide, 5000);
    };

    const stopAutoPlay = () => {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
    };

    // رویدادهای دکمه‌ها
    prevBtn?.addEventListener('click', () => {
      stopAutoPlay();
      prevSlide();
      startAutoPlay();
    });

    nextBtn?.addEventListener('click', () => {
      stopAutoPlay();
      nextSlide();
      startAutoPlay();
    });

    // کلیک روی اندیکاتورها
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index') || '0');
        stopAutoPlay();
        showSlide(index);
        startAutoPlay();
      });
    });

    // توقف خودکار هنگام هاور
    const container = document.querySelector('.slider-container');
    container?.addEventListener('mouseenter', stopAutoPlay);
    container?.addEventListener('mouseleave', startAutoPlay);

    // پشتیبانی از کیبورد
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
      } else if (e.key === 'ArrowLeft') {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
      }
    });

    // نمایش اسلاید اول
    showSlide(0);
    startAutoPlay();
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}
