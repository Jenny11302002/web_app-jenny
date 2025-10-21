const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-blue-900 text-white shadow-lg">
    <h1 className="text-2xl font-bold">Ford</h1>
    <div className="space-x-6">
      <a href="/" className="hover:text-blue-300 transition">Home</a>
      <a href="/listing" className="hover:text-blue-300 transition">Cars</a>
      <a href="/order" className="hover:text-blue-300 transition">Order</a>
    </div>
  </nav>
);

export default Navbar;
