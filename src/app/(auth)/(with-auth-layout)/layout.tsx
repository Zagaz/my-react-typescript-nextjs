
export const metadata = {
     title: 'Auth Layout',
     description: 'A layout for auth pages',
     };

     const style = {
          backgroundColor: '#f0e9cc',
          padding : '10px',
          };


export default function AuthLayout({ children  }: {children: React.ReactNode}) {
  return (
    <>
      <h3 style = {style}>Auth Layout</h3>
      {children}
    </>
  );
}

