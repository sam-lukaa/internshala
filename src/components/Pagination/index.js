export default function Pagination({
  number,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / number); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="flex justify-center items-center space-x-2">
      {pageNumber.includes(currentPage - 1) && (
        <a
          href="!#"
          onClick={() => {
            setCurrentPage(currentPage - 1);
            paginate(currentPage - 1);
          }}
        >
          Previous
        </a>
      )}
      {pageNumber.map((number) => (
        <div key={number}>
          <a
            href="!#"
            onClick={() => paginate(number)}
            className="text-gray-800"
          >
            {number}
          </a>
        </div>
      ))}
      {pageNumber.includes(currentPage + 1) && (
        <a
          href="!#"
          onClick={() => {
            setCurrentPage(currentPage + 1);
            paginate(currentPage + 1);
          }}
        >
          Next
        </a>
      )}
    </nav>
  );
}
