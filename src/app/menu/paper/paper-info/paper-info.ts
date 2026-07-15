import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-paper-info',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './paper-info.html',
  styleUrl: './paper-info.css',
})
export class PaperInfo implements OnInit {
  private route = inject(ActivatedRoute);
  paperId: string | null = null;
  paperTitle: string | null = null;
  papersummary: string | null = null;
  paperdate: string | null = null;

  ngOnInit(): void {
    // 1. ابتدا از مسیر (path) دریافت کن
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      const title = params.get('title');
      const summary = params.get('summary');
      const date = params.get('date');

      // فقط اگر از مسیر داینامیک آمده و مقدار دارد، ذخیره کن
      if (id) {
        this.paperId = id;
        this.paperTitle = title;
        this.papersummary = summary;
        this.paperdate = date;
      }
    });

    // 2. سپس queryParams را چک کن (اولویت با queryParams است)
    this.route.queryParams.subscribe((params) => {
      const id = params['id'];
      const title = params['title'];
      const summary = params['summary'];
      const date = params['date'];

      // اگر query param وجود دارد، مقدارها را بازنویسی کن (اولویت با queryParams)
      if (id) {
        this.paperId = id;
        this.paperTitle = title;
        this.papersummary = summary;
        this.paperdate = date;
      }
    });
  }
}
