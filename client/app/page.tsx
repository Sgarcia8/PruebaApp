//app\page.tsx
import Link from "next/link";
import Productos from "./components/tabladedatos";
import { Spinner } from "./components/spinner";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className='bg-blue-400 h-screen content-center'>
      <div className="w-screen py-20 flex justify-center flex-col items-center">
        <div className="flex items-center justify-between gap-1 mb-5">
          <h1 className="text-4xl font-bold">Gestión de productos</h1>
        </div>
        <div className="overflow-x-auto">
          <div className="mb-2 w-full text-right">
            <Link
              href="/producto/create"
              className="btn btn-primary m-2">
              Crear producto
            </Link>
            <Link
              href="/marca"
              className="btn btn-primary m-2">
              Listar marcas
            </Link>
          </div>
          <Suspense fallback={<Spinner />}>
            <Productos />
          </Suspense>
        </div>
      </div>
    </div>
  );
}