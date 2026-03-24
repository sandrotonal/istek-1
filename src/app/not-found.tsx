import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-bold text-[var(--primary)] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Sayfa Bulunamadı
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanım dışı olabilir.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-lg hover:bg-[var(--primary-dark)] transition-colors shadow-lg shadow-[var(--primary)]/20"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
