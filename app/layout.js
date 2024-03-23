import "@styles/globals.css";
// metadata :
export const metadata = {
  // mmetadata for the whole application
  title: "E-Booking",
  description: "Discover related book in the field",
};

const RootLayouts = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayouts;
