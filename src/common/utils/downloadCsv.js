export const downloadCsv = (data, email) => {
  const csvContent =
    "data:text/csv;charset=utf-8," +
    "order,title,type,answer\n" +
    [
      ...data,
      {
        order: data.length + 1,
        title: "Email",
        type: "email",
        answer: email,
      },
    ]
      .map((row) => Object.values(row).join(","))
      .join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "responses.csv");
  document.body.appendChild(link);

  link.click();
};
