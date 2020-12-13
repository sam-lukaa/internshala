export default function Posts({ posts, loading }) {
  const renderTableHeader = () => {
    if (posts[0]) {
      let header = Object.keys(posts[0]);
      return header.map((key, index) => {
        return (
          <th key={index} className="border border-gray-800">
            {key.toUpperCase()}
          </th>
        );
      });
    }
  };

  const renderTableData = () => {
    return posts.map((person, index) => {
      const { id, name, email, company, job, city, phone } = person;
      const fav = person["Fav Movie"];
      return (
        <tr key={id}>
          <td className="border border-gray-800">{id}</td>
          <td className="border border-gray-800">{name}</td>
          <td className="border border-gray-800">{email}</td>
          <td className="border border-gray-800">{company}</td>
          <td className="border border-gray-800">{job}</td>
          <td className="border border-gray-800">{city}</td>
          <td className="border border-gray-800">{phone}</td>
          <td className="border border-gray-800">{fav}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto border-collapse border mb-6">
          <thead>
            <tr>{renderTableHeader()}</tr>
          </thead>

          <tbody>{renderTableData()}</tbody>
        </table>
      )}
    </div>
  );
}
