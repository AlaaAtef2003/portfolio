export interface Iicons {

  left: number;
  class: string;   // مثال: 'fas fa-star'
  color: string;   // لون الأيقونة
  opacity: number;
  transform: string;
  top?: number;
  startY: number; // موقع البداية على المحور Y
  duration: number; // مدة الحركة بالثواني
}
