export const templateToArray = (template: string) => {
  return template
    .split("\n")
    .map((item) => {
      if (item.trim() === "") {
        return null;
      }
      return item
        .trim()
        .replace(/\"/g, "")
        .split(" ");
    })
    .filter((row) => !!row);
};

export const arrayToTemplate = (arr: string[][]) => {
  return arr
    .map((row) => {
      return `"${row.join(" ")}"`;
    })
    .join("\n");
};
