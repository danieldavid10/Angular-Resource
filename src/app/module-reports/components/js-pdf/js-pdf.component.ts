import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-js-pdf',
  templateUrl: './js-pdf.component.html',
  styleUrls: ['./js-pdf.component.scss']
})
export class JsPdfComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  name = 'Daniel David Alvarez Rivero'

  constructor() { }

  ngOnInit() {
  }

  downloadPDF() {

    var data = document.getElementById('content');
    html2canvas(data).then(canvas => {
      // Few necessary setting options 
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF 
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF  
    });
  }

}
