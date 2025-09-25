import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    CheckSquare,
    Square,
    Trash2,
    Edit3,
    Save,
    X,
    GripVertical
} from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Task } from '../../types';
import { Button, Input } from '../index';

interface TaskItemProps {
    task: Task;
    onToggle: (taskId: string) => void;
    onDelete: (taskId: string) => void;
    onEdit: (taskId: string, newTitle: string) => void;
    index: number;
}

const TaskItem = ({ task, onToggle, onDelete, onEdit, index }: TaskItemProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: task.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const categoryColors = {
        Work: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
        Study: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
        Personal: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    };

    const handleSaveEdit = () => {
        if (editTitle.trim() && editTitle.trim() !== task.title) {
            onEdit(task.id, editTitle.trim());
        }
        setIsEditing(false);
        setEditTitle(task.title);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditTitle(task.title);
    };

    const handleDeleteClick = () => {
        if (showDeleteConfirm) {
            onDelete(task.id);
        } else {
            setShowDeleteConfirm(true);
            // Auto-hide confirmation after 3 seconds
            setTimeout(() => setShowDeleteConfirm(false), 3000);
        }
    };

    return (
        <motion.div
            ref={setNodeRef}
            style={style}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className={`group flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 ${task.completed
                ? 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-md'
                } ${isDragging ? 'shadow-lg scale-105 rotate-2' : ''}`}
        >
            {/* Drag Handle */}
            <div
                {...attributes}
                {...listeners}
                className="flex-shrink-0 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100"
            >
                <GripVertical size={16} className="text-gray-400" />
            </div>

            {/* Checkbox */}
            <button
                onClick={() => onToggle(task.id)}
                className="flex-shrink-0 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                {task.completed ? (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                        <CheckSquare size={20} className="text-green-500" />
                    </motion.div>
                ) : (
                    <Square size={20} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                )}
            </button>

            {/* Task Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <span
                        className={`text-sm px-2 py-1 rounded-full font-medium ${categoryColors[task.category]}`}
                    >
                        {task.category}
                    </span>
                </div>

                {isEditing ? (
                    <div className="flex items-center gap-2">
                        <Input
                            value={editTitle}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditTitle(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') handleSaveEdit();
                                if (e.key === 'Escape') handleCancelEdit();
                            }}
                            className="flex-1"
                            autoFocus
                        />
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleSaveEdit}
                            className="text-green-600 hover:text-green-700"
                        >
                            <Save size={16} />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleCancelEdit}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X size={16} />
                        </Button>
                    </div>
                ) : (
                    <>
                        <p
                            className={`font-medium ${task.completed
                                ? 'line-through text-gray-500 dark:text-gray-400'
                                : 'text-gray-900 dark:text-white'
                                }`}
                        >
                            {task.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Created {task.createdAt.toLocaleDateString()}
                            {task.completedAt && (
                                <span> • Completed {task.completedAt.toLocaleDateString()}</span>
                            )}
                        </p>
                    </>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {!isEditing && !task.completed && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsEditing(true)}
                        className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                        <Edit3 size={16} />
                    </Button>
                )}

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDeleteClick}
                    className={`transition-colors ${showDeleteConfirm
                        ? 'text-red-700 bg-red-100 dark:bg-red-900/20'
                        : 'text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20'
                        }`}
                >
                    <Trash2 size={16} />
                </Button>
            </div>

            {/* Delete Confirmation Tooltip */}
            {showDeleteConfirm && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-0 top-full mt-2 bg-red-600 text-white text-sm px-3 py-1 rounded shadow-lg z-10"
                >
                    Click again to delete
                </motion.div>
            )}
        </motion.div>
    );
};

export default TaskItem;