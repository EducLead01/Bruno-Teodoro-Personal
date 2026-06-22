import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BT Personal - Coxas e Glúteos PRO",
  description:
    "Programa especializado para mulheres que querem coxas e glúteos maiores e mais definidos em poucas semanas, com técnicas que quase ninguém ensina.",
  openGraph: {
    title: "BT Personal - Coxas e Glúteos PRO",
    description:
      "Programa especializado para mulheres que querem coxas e glúteos maiores e mais definidos em poucas semanas.",
    images: [
      "https://res.cloudinary.com/dhyeghmuy/image/upload/w_1200,q_90/v1770738834/hero-bruno_oeihj5.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '929176678557585');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}}
            src="https://www.facebook.com/tr?id=929176678557585&ev=PageView&noscript=1" />
        </noscript>
      </body>
    </html>
  );
}
