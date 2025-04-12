type TableProps = {
    headers: string[];
    rows: React.ReactNode[][];
  };
  
  const Table = ({ headers, rows }: TableProps) => {
    return (
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full text-sm">
          <thead className="bg-[var(--color-light-cyan)]/30">
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="text-left font-medium text-gray-700 px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  