import React, { useState } from "react";
import Cards from "../../components/molecules/Cards/Cards";
import CreateTodo from "../../components/organisms/Todo/createTodo/CreateTodo";
import HomeStyle from "./Home.module.css";

function Home() {
  const [columns, setColumns] = useState([
    {
      title: "Todo",
      tickets: [{ id: 1, priority: "Low", desc: "Wash the Pots" }],
    },
    {
      title: "In Progress",
      tickets: [{ id: 2, priority: "High", desc: "Complete exercises" }],
    },
    {
      title: "Completed",
      tickets: [{ id: 3, priority: "High", desc: "Complete exercises" }],
    },
  ]);

  function onSave(ticket, columnIndex) {
    const cols = [...columns];
    cols[ticket.status].tickets.push(ticket);
    setColumns(cols);
  }

  function onDelete(columnIndex, ticketIndex) {
    const cols = [...columns];
    cols[columnIndex].tickets.splice(ticketIndex, 1);
    setColumns(cols);
  }

  return (
    <div className={HomeStyle.Home}>
      <CreateTodo onSave={onSave} />
      {columns.map((column, columnIndex) => (
        <div key={column.title}>
          <h1>{column.title}</h1>
          {column.tickets.map((ticket, ticketIndex, value) => (
            <Cards
              key={ticket.id}
              description={ticket.desc}
              priority={ticket.priority}
              ticketTags={ticket.tags}
              status={ticket.status}
              displayDate={ticket.displayDate}
              onDelete={() => onDelete(columnIndex, ticketIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Home;
