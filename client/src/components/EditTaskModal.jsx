import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

// No TypeScript types — instead, use comments for clarity

export default function EditTaskModal({ task, onClose, onSave, onDelete }) {
  if (!task) return null; // Safety check for null/undefined task

  return (
    <Dialog.Root open={!!task} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
        <Dialog.Content asChild>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed top-1/2 left-1/2 w-[90%] max-w-md bg-white p-6 rounded shadow-md -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <Dialog.Title className="text-lg font-bold mb-4">
              Edit Task
            </Dialog.Title>

            <input
              className="w-full border rounded px-3 py-2 mb-4"
              value={task.title}
              onChange={(e) => onSave({ ...task, title: e.target.value })}
            />

            <select
              className="w-full border rounded px-3 py-2 mb-4"
              value={task.status}
              onChange={(e) => onSave({ ...task, status: e.target.value })}
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <div className="flex justify-between">
              <button
                onClick={() => onDelete(task.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
              <Dialog.Close asChild>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Save
                </button>
              </Dialog.Close>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
