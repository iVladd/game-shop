import React, { useState } from "react";
import styles from "./pagination.module.scss";

const Pagination = ({ pagesCount }) => {
  const [items] = useState(Array.from({ length: pagesCount }, (_, i) => i + 1));

  console.log(items);

  return <button>Pagf</button>;
};

export default Pagination;
