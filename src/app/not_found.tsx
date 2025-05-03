"use client";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
