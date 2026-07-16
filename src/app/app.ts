// import { Component, signal } from '@angular/core';
// import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
// import { Footer } from './footer/footer';

// @Component({
//   selector: 'app-root',
//   standalone: true, // <-- حتماً این خط را داشته باشد
//   imports: [RouterOutlet, RouterLink, RouterLinkActive, Footer],
//   templateUrl: './app.html',
//   styleUrl: './app.css',
// })
// export class App {
//   protected readonly title = signal('bahram');
// }

import { Component, signal, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Footer } from './footer/footer';
// SweetAlert2 رو ایمپورت کن
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('bahram');

  ngOnInit(): void {
    // بعد از ۳ ثانیه پیام رو نشون بده
    setTimeout(() => {
      Swal.fire({
        title: '🎉 خوش آمدید!',
        html: `
          <div style="direction:rtl; font-family:'Vazir', 'Tahoma', sans-serif; padding: 10px;">
            <h2 style="color:#2c3e50; font-size:28px; margin-bottom:10px;">
              به سایت <span style="color:#e74c3c; font-weight:bold;">دوپان جکت</span> خوش آمدید
            </h2>
            <p style="color:#7f8c8d; font-size:18px; margin:5px 0;">
              🌟 از حضور شما در جمع ما بسیار خوشحالیم!
            </p>
            <div style="margin-top:20px; padding-top:15px; border-top: 2px dashed #ecf0f1;">
              <p style="color:#95a5a6; font-size:14px;">
                💡 با ما همراه باشید تا تجربه‌ای بی‌نظیر داشته باشید.
              </p>
            </div>
          </div>
        `,
        icon: 'success',
        confirmButtonText: 'شروع کن 🚀',
        confirmButtonColor: '#e74c3c',
        background: '#ffffff',
        backdrop: 'rgba(0,0,0,0.6)',
        timer: 6000,
        timerProgressBar: true,
        showClass: {
          popup: 'animate__animated animate__fadeInUp',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDown',
        },
        customClass: {
          popup: 'custom-welcome-popup',
          confirmButton: 'custom-welcome-btn',
        },
      });
    }, 3000);
  }
}
