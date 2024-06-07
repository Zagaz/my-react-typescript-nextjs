import Link from "next/link";

const navLinks = [
     {name: "Register" , href : "/register"},
     {name: "Login" , href : "/login"},
     {name: "Forgot Password" , href : "/forgot-password"},
];

export default function AuthLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <>
               <header>
                    <nav>
                         <ul>
                              {navLinks.map((link) => (
                                   <li key={link.href}>
                                        <Link href={link.href}>{link.name}</Link>
                                   </li>
                              ))}
                         </ul>
                    </nav>
               </header>
               {children}
          </>
     );
}