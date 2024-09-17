import {
  ArrowUturnLeftIcon,
  BookmarkIcon,
} from '@heroicons/react/20/solid'
import Link from "next/link";

export function Header({title, subtitle}) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {title}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BookmarkIcon aria-hidden="true" className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
            {subtitle}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <Link
          href={"/"}
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <ArrowUturnLeftIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
          Voltar
        </Link>
      </div>
    </div>
  )
}