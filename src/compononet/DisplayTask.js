import React from "react";

const DisplayTask = ({ allTasks }) => {
  return (
    <div>
      {allTasks?.length > 0 ? (
        allTasks?.map((item, idx) => (
          <div className="task-container" key={idx}>
            <div className="task">
              <h3>{item.title}</h3>
              <p>{item.task}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No Task found...</p>
      )}
    </div>
  );
};

export default DisplayTask;
