import html2pdf from 'html2pdf.js';

const generatePDF = () => {
  const element = document.getElementById('pdf') as HTMLElement;

  const options = {
    margin:       1,           // Отступы в дюймах
    filename:     'cv.pdf',    // Имя сохраняемого PDF
    image:        { type: 'jpeg', quality: 1 }, // Настройки изображения
    html2canvas:  { scale: 2, useCORS: true },
    enableLinks: true,        
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }, // Настройки jsPDF
    pageBreak: { mode: ['css'] }
  }; 

  html2pdf()
    .from(element)               // Указываем элемент для конвертации
    .set(options)                // Устанавливаем опции
    .save()                      // Сохраняем PDF
    .catch((err: any) => console.error('Error generating PDF:', err)); // Обработка ошибок
}

export default generatePDF;
