
import React from 'react';

export default function ProductCard(props) {
 const name = props.name

  return (
    <div className="group block">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src="/logo.png" 
          alt={name}
          className="object-cover object-center w-full h-full group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
    </div>
  );
}
