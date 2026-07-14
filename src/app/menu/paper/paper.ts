import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paper',
  imports: [RouterLink],
  templateUrl: './paper.html',
  styleUrl: './paper.css',
})
export class Paper {
  papers = [
    { id: 1, title: 'مقدمه‌ای بر انگولار', summary: 'آشنایی با مفاهیم پایه', date: '۱۴۰۵/۰۴/۲۳' },
    {
      id: 2,
      title: 'مدیریت وضعیت در انگولار',
      summary: 'استفاده از سرویس‌ها و RxJS',
      date: '۱۴۰۵/۰۴/۲۴',
    },
    {
      id: 3,
      title: 'فرم‌های واکنشی در انگولار',
      summary: 'ساخت فرم‌های پویا و اعتبارسنجی',
      date: '۱۴۰۵/۰۴/۲۵',
    },
    {
      id: 4,
      title: 'مدیریت وضعیت در انگولار',
      summary: 'استفاده از سرویس‌ها و RxJS',
      date: '۱۴۰۵/۰۴/۲۴',
    },
    {
      id: 5,
      title: 'فرم‌های واکنشی در انگولار',
      summary: 'ساخت فرم‌های پویا و اعتبارسنجی',
      date: '۱۴۰۵/۰۴/۲۵',
    },
    {
      id: 6,
      title: 'مدیریت وضعیت در انگولار',
      summary: 'استفاده از سرویس‌ها و RxJS',
      date: '۱۴۰۵/۰۴/۲۴',
    },
    {
      id: 7,
      title: 'فرم‌های واکنشی در انگولار',
      summary: 'ساخت فرم‌های پویا و اعتبارسنجی',
      date: '۱۴۰۵/۰۴/۲۵',
    },
    {
      id: 8,
      title: 'مدیریت وضعیت در انگولار',
      summary: 'استفاده از سرویس‌ها و RxJS',
      date: '۱۴۰۵/۰۴/۲۴',
    },
    {
      id: 9,
      title: 'فرم‌های واکنشی در انگولار',
      summary: 'ساخت فرم‌های پویا و اعتبارسنجی',
      date: '۱۴۰۵/۰۴/۲۵',
    },
    {
      id: 10,
      title: 'مدیریت وضعیت در انگولار',
      summary: 'استفاده از سرویس‌ها و RxJS',
      date: '۱۴۰۵/۰۴/۲۴',
    },
    {
      id: 11,
      title: 'فرم‌های واکنشی در انگولار',
      summary: 'ساخت فرم‌های پویا و اعتبارسنجی',
      date: '۱۴۰۵/۰۴/۲۵',
    },
  ];
}
