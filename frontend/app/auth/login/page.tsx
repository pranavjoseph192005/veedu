import { login } from '@/app/api/auth/signin';
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        action={login}
        className="w-full max-w-xl bg-white border border-gray-200 rounded-2xl shadow-xl p-6 space-y-6 animate-fade-in"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">
            Don't have an account?{" "}
            <Link
              href="/auth/sign-up"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Log in
        </button>
      </form>
    </main>
  );
}
