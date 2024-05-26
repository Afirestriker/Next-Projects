import "./globals.css";

export const metadata = {
    title: "Next-Tabulator",
    description: "Display Data In Tabular View Using Tabulator",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
