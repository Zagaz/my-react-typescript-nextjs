import React from 'react'

type Props = {
     children: React.ReactNode,
     users: React.ReactNode,
     revenue: React.ReactNode,
     notifications: React.ReactNode,
}

const style = {
     backgroundColor: '#f0e9cc',
}
const wrapper: React.CSSProperties = {
     display: 'grid',
     gridTemplateColumns: '2fr 1fr 1fr',
}


export default function DashboardLayout({ children, users, revenue, notifications }: Props) {
     return (
          <>
               <h3 style={style}>Products Detailes</h3>
               <div>
                    {children}
               </div>
               <div style={wrapper}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                    <div>{notifications}</div>
               </div>
          </>

     )
}