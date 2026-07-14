import { Component, inject, OnInit } from '@angular/core'; // inject و OnInit را اضافه کنید
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-paper-info',
  standalone: true, // نیازی به نوشتن دوباره نیست، قبلاً دارید
  imports: [RouterLink], // اگر در قالب از چیزی مثل RouterLink استفاده نمی‌کنید، خالی بماند
  templateUrl: './paper-info.html',
  styleUrl: './paper-info.css',
})
export class PaperInfo implements OnInit {
  // implements OnInit را اضافه کنید
  private route = inject(ActivatedRoute);
  paperId: string | null = null;

  ngOnInit(): void {
    this.paperId = this.route.snapshot.paramMap.get('id');
  }
}
