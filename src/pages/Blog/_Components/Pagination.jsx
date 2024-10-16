import React from "react";

const Pagination = ({ children }) => {
  return <div className="flex items-center justify-center space-x-2">{children}</div>;
};

const PaginationContent = ({ children }) => {
  return <ul className="flex">{children}</ul>;
};

const PaginationItem = ({ children }) => {
  return <li className="mx-1">{children}</li>;
};

const PaginationLink = ({ href, children, isActive }) => {
  return (
    <a
      href={href}
      className={`px-4 py-2 border rounded-sm transition-colors ${
        isActive
          ? "bg-red-600 text-white border-red-600"
          : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
      }`}
    >
      {children}
    </a>
  );
};

const PaginationPrevious = ({ href }) => {
  return (
    <a
      href={href}
      className="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-white hover:text-black transition-colors"
    >
      Previous
    </a>
  );
};

const PaginationNext = ({ href }) => {
  return (
    <a
      href={href}
      className="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-white hover:text-black transition-colors"
    >
      Next
    </a>
  );
};

const PaginationEllipsis = () => {
  return (
    <span className="px-4 py-2 text-gray-600">...</span>
  );
};

export const PaginationDemo = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationDemo;
