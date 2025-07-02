// app/confirm-email/page.tsx
export default function ConfirmEmailPage() {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10 max-w-lg text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">📧 Check Your Email</h1>
          <p className="text-gray-700 text-lg">
            We've sent you a confirmation link.
          </p>
          <p className="text-gray-500">
            Once you click the link in your email, a new tab will open to continue.
          </p>
          <p className="text-gray-400 italic">
            You can safely close this page — you're all set!
          </p>
          <div className="mt-4 text-blue-600 font-medium animate-pulse">
            Waiting for you to confirm...
          </div>
        </div>
      </main>
    );
  }
  