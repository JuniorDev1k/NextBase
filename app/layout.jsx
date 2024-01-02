import "@styles/globals.css";

// metadata :
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI propmt",
};

const RootLayouts = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayouts;
