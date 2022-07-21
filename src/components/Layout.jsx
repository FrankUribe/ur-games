import { useEffect } from 'react'

export default function Layout({children, title}) {
  useEffect(() =>{
    document.title = title || 'Ur Games';
  },[])
  return (
    <div className="container py-2 px-4">
      {children}
    </div>
  )
}
