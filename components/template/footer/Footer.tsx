function Footer() {
  return (
    <footer className="w-full bg-primary-tint-1 py-6" dir="rtl">
      <div className="flex flex-col items-center justify-center px-6 text-center text-sm text-gray-700">
        <p className="font-medium text-gray-800">توسعه‌دهندگان پروژه</p>

        <div className="mt-3 space-y-2">
          <h2>ساخته شده توسط</h2>
          <p>
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              className="mx-1 text-sky-600"
            >
              امیرحسین
            </a>
          </p>

          <p>
            <a
              href="https://github.com/FRIEND_GITHUB_USERNAME"
              target="_blank"
              className="mx-1 text-sky-600"
            >
              سپهر
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
