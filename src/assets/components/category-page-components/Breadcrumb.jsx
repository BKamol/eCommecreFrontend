import React from 'react'

const Breadcrumb = ({ items }) => {
    return (
      <nav className="flex px-10 lg:px-16" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1">
          {items.map((item, index) => (
            <li key={index} className="flex items-center last:opacity-100">
              {index > 0 && (
                <svg
                  className="h-5 w-5 text-black opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-black opacity-60 hover:opacity-100"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-sm text-black opacity-60">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  };

export default Breadcrumb