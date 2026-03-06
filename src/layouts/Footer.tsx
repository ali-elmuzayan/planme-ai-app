const Footer = () => {
  return (
    <footer className="mt-8 border-t border-black/5">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between py-4">
        <span>&copy; {new Date().getFullYear()} Maswada AI</span>
        <span className="hidden sm:inline">All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
