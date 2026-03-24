'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Bir Hata Oluştu</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        Beklenmedik bir sorunla karşılaştık. Lütfen tekrar deneyin.
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-lg hover:bg-[var(--primary-dark)] transition-colors"
      >
        Tekrar Dene
      </button>
    </div>
  );
}
