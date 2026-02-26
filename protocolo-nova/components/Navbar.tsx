import Link from "next/link"

export const Navbar = () => {
  return (
    <div className=" flex justify-between bg-white p-5 text-emerald-500">


      <p> Protocolo Nova</p>
      <div className="flex gap-4 text-2xl font-bold underline"> 
        <Link href="/monitoreo">Monitoreo</Link>
        <Link href="/tripulacion">Tripulacion</Link>
      </div>


    </div>
  )
}
