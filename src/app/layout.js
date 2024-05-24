import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "../providers/cart";
import { TonerProvider } from "../providers/toner";
import { OrderProvider } from "../providers/orders";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Discount Copier',
//   description: 'Local Copier Company',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <TonerProvider>
        <OrderProvider>
          <CartProvider>
            <body className={inter.className}>{children}</body>
          </CartProvider>
        </OrderProvider>
      </TonerProvider>
    </html>
  );
}
