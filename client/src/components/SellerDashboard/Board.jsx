// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
// } from "@hello-pangea/dnd";
// import EditTaskModal from "@n/components/EditTaskModal";
// import Countdown from "@/components/Countdown";
// import {
//   FaPaperclip,
//   FaTasks,
//   FaRegCalendarAlt,
//   FaTag,
//   FaFlask,
//   FaUserCircle,
//   FaClock,
// } from "react-icons/fa";

// const columns = [
//   { id: "todo", title: "📝 To Do", color: "border-blue-500", bgColor: "bg-blue-50" },
//   { id: "inprogress", title: "⏳ In Progress", color: "border-yellow-600", bgColor: "bg-yellow-50" },
//   { id: "done", title: "✅ Done", color: "border-green-500", bgColor: "bg-green-50" },
// ];

// function GitaSection() {
//   const [verse, setVerse] = useState(null);
//   const fallback = {
//     text: "You have the right to work, but never to the fruit of work.",
//     reference: "Bhagavad Gita 2.47",
//   };

//   const fetchVerse = async () => {
//     try {
//       const res = await fetch("/api/gita");
//       const data = await res.json();
//       const text = data.slok || data.text || fallback.text;
//       const ref = `Chapter ${data.chapter_number || data.chapter}, Verse ${data.verse_number || data.verse}`;
//       setVerse({ text, reference: ref });
//     } catch {
//       setVerse(fallback);
//     }
//   };

//   useEffect(() => {
//     fetchVerse();
//     const interval = setInterval(fetchVerse, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="my-6 mx-auto max-w-xl bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md p-6 text-center border border-purple-200">
//       <h2 className="text-xl font-bold mb-3 text-purple-700">✨ Gita Wisdom for Your Day</h2>
//       <blockquote className="italic text-lg text-gray-800 mb-3 font-serif">
//         "{verse?.text || "Loading inspiring verse..."}"
//       </blockquote>
//       {verse?.reference && <div className="text-sm text-gray-600">{verse.reference}</div>}
//     </section>
//   );
// }

// export default function Board() {
//   const [tasks, setTasks] = useState([]);
//   const [editingTask, setEditingTask] = useState(null);
//   const notifiedTasks = useRef(new Set());
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if ("Notification" in window) {
//       Notification.requestPermission();
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       tasks.forEach((task) => {
//         if (task.dueDate && task.status !== "done") {
//           const due = new Date(task.dueDate);
//           const timeLeft = due.getTime() - Date.now();

//           if (
//             (timeLeft < 6 * 60 * 60 * 1000 && timeLeft > 0) ||
//             (timeLeft <= 0 && timeLeft > -24 * 60 * 60 * 1000)
//           ) {
//             if (!notifiedTasks.current.has(task.id)) {
//               if ("Notification" in window && Notification.permission === "granted") {
//                 const title = timeLeft <= 0 ? "🚨 Task Overdue!" : "🔔 Task Due Soon!";
//                 const body = `${task.title} is ${timeLeft <= 0 ? "overdue" : "due soon"}.`;
//                 new Notification(title, { body });
//               }
//               if (audioRef.current) {
//                 audioRef.current.play().catch(console.error);
//               }
//               notifiedTasks.current.add(task.id);
//             }
//           } else if (timeLeft > 6 * 60 * 60 * 1000) {
//             notifiedTasks.current.delete(task.id);
//           }
//         }
//       });
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [tasks]);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const res = await fetch("/api/tasks", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
//         },
//       });
//       const data = await res.json();
//       setTasks(data || []);
//     } catch (error) {
//       console.error("Fetch tasks error:", error);
//       setTasks([]);
//     }
//   };

//   const onDragEnd = async ({ destination, source, draggableId }) => {
//     if (!destination || destination.droppableId === source.droppableId) return;
//     const updatedTasks = tasks.map((task) =>
//       task.id === draggableId ? { ...task, status: destination.droppableId } : task
//     );
//     setTasks(updatedTasks);
//     try {
//       await fetch(`/api/tasks/${draggableId}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
//         },
//         body: JSON.stringify({ status: destination.droppableId }),
//       });
//       fetchTasks();
//       if (destination.droppableId === "done") {
//         notifiedTasks.current.delete(draggableId);
//       }
//     } catch (err) {
//       console.error("Drag update failed", err);
//       fetchTasks();
//     }
//   };

//   const handleDeleteTask = async (taskId) => {
//     try {
//       const res = await fetch(`/api/tasks/${taskId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
//         },
//       });
//       if (res.ok) {
//         setTasks(tasks.filter((t) => t.id !== taskId));
//         notifiedTasks.current.delete(taskId);
//       } else {
//         console.error("Delete failed");
//       }
//     } catch (err) {
//       console.error("Delete error", err);
//     }
//   };

//   return (
//     <div className="flex flex-col h-full bg-gradient-to-br from-gray-100 to-indigo-100">
//       <audio ref={audioRef} src="/alert.mp3" preload="auto" />
//       <GitaSection />
//       <div className="flex-grow overflow-auto p-4">
//         <DragDropContext onDragEnd={onDragEnd}>
//           <div className="flex flex-col md:flex-row gap-6 h-full items-start">
//             {columns.map((col) => (
//               <Droppable droppableId={col.id} key={col.id}>
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                     className={`bg-white rounded-2xl shadow-xl p-5 flex-1 min-w-[300px] max-w-[350px] ${col.bgColor}`}
//                   >
//                     <h2 className={`text-2xl font-bold mb-4 text-center border-b-2 ${col.color}`}>
//                       {col.title}
//                     </h2>
//                     <div className="space-y-4 overflow-y-auto">
//                       {tasks
//                         .filter((task) => task.status === col.id)
//                         .map((task, index) => (
//                           <Draggable key={task.id} draggableId={task.id} index={index}>
//                             {(provided) => (
//                               <div
//                                 ref={provided.innerRef}
//                                 {...provided.draggableProps}
//                                 {...provided.dragHandleProps}
//                                 className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400"
//                               >
//                                 <div className="font-semibold text-lg mb-1">{task.title}</div>
//                                 {task.dueDate && (
//                                   <div className="text-sm text-gray-600 flex items-center gap-1">
//                                     <FaRegCalendarAlt />
//                                     <span>{new Date(task.dueDate).toLocaleString()}</span>
//                                     <Countdown targetDate={new Date(task.dueDate)} />
//                                   </div>
//                                 )}
//                                 <div className="flex justify-end mt-3 gap-4">
//                                   <button
//                                     onClick={() => setEditingTask(task)}
//                                     className="text-blue-600 hover:underline text-sm"
//                                   >
//                                     ✏️ Edit
//                                   </button>
//                                   <button
//                                     onClick={() => handleDeleteTask(task.id)}
//                                     className="text-red-600 hover:underline text-sm"
//                                   >
//                                     🗑️ Delete
//                                   </button>
//                                 </div>
//                               </div>
//                             )}
//                           </Draggable>
//                         ))}
//                       {provided.placeholder}
//                     </div>
//                   </div>
//                 )}
//               </Droppable>
//             ))}
//           </div>
//         </DragDropContext>
//       </div>
//       {editingTask && (
//         <EditTaskModal
//           task={editingTask}
//           onClose={() => setEditingTask(null)}
//           onSave={fetchTasks}
//         />
//       )}
//     </div>
//   );
// }
















"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";
// import EditTaskModal from "@/components/EditTaskModal";
// import Countdown from "@/components/Countdown";
import EditTaskModal from "../EditTaskModal";
import Countdown from "../Countdown";

import {
  FaPaperclip,
  FaTasks,
  FaRegCalendarAlt,
  FaTag,
  FaFlask,
  FaUserCircle,
  FaClock,
} from "react-icons/fa";

const columns = [
  { id: "todo", title: "📝 To Do", color: "border-blue-500", bgColor: "bg-blue-50" },
  { id: "inprogress", title: "⏳ In Progress", color: "border-yellow-600", bgColor: "bg-yellow-50" },
  { id: "done", title: "✅ Done", color: "border-green-500", bgColor: "bg-green-50" },
];

function GitaSection() {
  const [verse, setVerse] = useState(null);
  const fallback = {
    text: "You have the right to work, but never to the fruit of work.",
    reference: "Bhagavad Gita 2.47",
  };

  const fetchVerse = async () => {
    try {
      const res = await fetch("/api/gita");
      const data = await res.json();
      const text = data.slok || data.text || fallback.text;
      const ref = `Chapter ${data.chapter_number || data.chapter}, Verse ${data.verse_number || data.verse}`;
      setVerse({ text, reference: ref });
    } catch {
      setVerse(fallback);
    }
  };

  useEffect(() => {
    fetchVerse();
    const interval = setInterval(fetchVerse, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-6 mx-auto max-w-xl bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md p-6 text-center border border-purple-200">
      <h2 className="text-xl font-bold mb-3 text-purple-700">✨ Gita Wisdom for Your Day</h2>
      <blockquote className="italic text-lg text-gray-800 mb-3 font-serif">
        "{verse?.text || "Loading inspiring verse..."}"
      </blockquote>
      {verse?.reference && <div className="text-sm text-gray-600">{verse.reference}</div>}
    </section>
  );
}

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const notifiedTasks = useRef(new Set());
  const audioRef = useRef(null);

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      tasks.forEach((task) => {
        if (task.dueDate && task.status !== "done") {
          const due = new Date(task.dueDate);
          const timeLeft = due.getTime() - Date.now();

          if (
            (timeLeft < 6 * 60 * 60 * 1000 && timeLeft > 0) ||
            (timeLeft <= 0 && timeLeft > -24 * 60 * 60 * 1000)
          ) {
            if (!notifiedTasks.current.has(task.id)) {
              if ("Notification" in window && Notification.permission === "granted") {
                const title = timeLeft <= 0 ? "🚨 Task Overdue!" : "🔔 Task Due Soon!";
                const body = `${task.title} is ${timeLeft <= 0 ? "overdue" : "due soon"}.`;
                new Notification(title, { body });
              }
              if (audioRef.current) {
                audioRef.current.play().catch(console.error);
              }
              notifiedTasks.current.add(task.id);
            }
          } else if (timeLeft > 6 * 60 * 60 * 1000) {
            notifiedTasks.current.delete(task.id);
          }
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [tasks]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch("/api/tasks", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      });
      const data = await res.json();
      setTasks(data || []);
    } catch (error) {
      console.error("Fetch tasks error:", error);
      setTasks([]);
    }
  };

  const onDragEnd = async ({ destination, source, draggableId }) => {
    if (!destination || destination.droppableId === source.droppableId) return;
    const updatedTasks = tasks.map((task) =>
      task.id === draggableId ? { ...task, status: destination.droppableId } : task
    );
    setTasks(updatedTasks);
    try {
      await fetch(`/api/tasks/${draggableId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
        body: JSON.stringify({ status: destination.droppableId }),
      });
      fetchTasks();
      if (destination.droppableId === "done") {
        notifiedTasks.current.delete(draggableId);
      }
    } catch (err) {
      console.error("Drag update failed", err);
      fetchTasks();
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      });
      if (res.ok) {
        setTasks(tasks.filter((t) => t.id !== taskId));
        notifiedTasks.current.delete(taskId);
      } else {
        console.error("Delete failed");
      }
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-gray-100 to-indigo-100">
      <audio ref={audioRef} src="/alert.mp3" preload="auto" />
      <GitaSection />
      <div className="flex-grow overflow-auto p-4">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex flex-col md:flex-row gap-6 h-full items-start">
            {columns.map((col) => (
              <Droppable droppableId={col.id} key={col.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`bg-white rounded-2xl shadow-xl p-5 flex-1 min-w-[300px] max-w-[350px] ${col.bgColor}`}
                  >
                    <h2 className={`text-2xl font-bold mb-4 text-center border-b-2 ${col.color}`}>
                      {col.title}
                    </h2>
                    <div className="space-y-4 overflow-y-auto">
                      {tasks
                        .filter((task) => task.status === col.id)
                        .map((task, index) => (
                          <Draggable key={task.id} draggableId={task.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-400"
                              >
                                <div className="font-semibold text-lg mb-1">{task.title}</div>
                                {task.dueDate && (
                                  <div className="text-sm text-gray-600 flex items-center gap-1">
                                    <FaRegCalendarAlt />
                                    <span>{new Date(task.dueDate).toLocaleString()}</span>
                                    <Countdown targetDate={new Date(task.dueDate)} />
                                  </div>
                                )}
                                <div className="flex justify-end mt-3 gap-4">
                                  <button
                                    onClick={() => setEditingTask(task)}
                                    className="text-blue-600 hover:underline text-sm"
                                  >
                                    ✏️ Edit
                                  </button>
                                  <button
                                    onClick={() => handleDeleteTask(task.id)}
                                    className="text-red-600 hover:underline text-sm"
                                  >
                                    🗑️ Delete
                                  </button>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={fetchTasks}
        />
      )}
    </div>
  );
}
