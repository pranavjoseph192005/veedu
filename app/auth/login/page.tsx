import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <form className="max-w-sm mx-auto mt-10 flex flex-col gap-4 p-4 border rounded-md shadow-sm">
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div className="flex gap-2">
        <button
          formAction={login}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Log in
        </button>
        <button
          formAction={signup}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
