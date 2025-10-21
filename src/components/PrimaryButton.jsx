const PrimaryButton = ({ label, onClick, type = "primary" }) => {
  const baseStyle = "px-6 py-2 rounded-lg font-semibold transition-all duration-200";
  const styles = {
    primary: `${baseStyle} bg-blue-700 text-white hover:bg-blue-800`,
    secondary: `${baseStyle} bg-gray-200 text-gray-800 hover:bg-gray-300`,
    outline: `${baseStyle} border border-blue-700 text-blue-700 hover:bg-blue-50`
  };

  return <button className={styles[type]} onClick={onClick}>{label}</button>;
};

export default PrimaryButton;
