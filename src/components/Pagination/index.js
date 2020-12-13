export default function Pagination({ number, totalPosts, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / number); i++) {
    pageNumber.push(i);
  }
  return (
    <nav className="flex justify-center items-center space-x-2">
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
    </nav>
  );
}
