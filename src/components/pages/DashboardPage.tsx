import { motion, AnimatePresence } from 'motion/react';
import React, { useState, useEffect } from 'react';
import type { Task, UserStats } from '@/types';
import '@/styles/globals.css';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  progress: number;
}

interface UserStats {
  xp: number;
  level: number;
  tasksCompleted: number;
  streak: number;
  achievements: string[];
}

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState('tasks');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Math homework', completed: false, priority: 'high', dueDate: '2025-01-30', progress: 60 },
    { id: 2, title: 'Read Chapter 5 ', completed: true, priority: 'medium', dueDate: '2025-01-28', progress: 100 },
    { id: 3, title: 'Prepare Term 2', completed: false, priority: 'high', dueDate: '2025-01-31', progress: 25 },
    { id: 4, title: 'Playing games', completed: false, priority: 'low', dueDate: '2025-02-05', progress: 15 }
  ]);

  const [userStats] = useState({
    xp: 1250,
    level: 5,
    tasksCompleted: 47,
    streak: 12,
    achievements: ['Early Bird', 'Streak Master', 'Task Crusher']
  });

  const [time, setTime] = useState(new Date());

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task: Task) => 
      task.id === id ? { ...task, completed: !task.completed, progress: task.completed ? 50 : 100 } : task
    ));
  };

  const sidebarItems = [
    { id: 'tasks', icon: '📝', label: 'My Tasks', count: tasks.filter((t: Task) => !t.completed).length },
    { id: 'calendar', icon: '📅', label: 'Calendar', count: null },
    { id: 'progress', icon: '📊', label: 'Progress', count: null },
    { id: 'achievements', icon: '🏆', label: 'Achievements', count: userStats.achievements.length },
    { id: 'settings', icon: '⚙️', label: 'Settings', count: null }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'tasks':
        return <TasksView tasks={tasks} toggleTask={toggleTask} />;
      case 'progress':
        return <ProgressView userStats={userStats} />;
      case 'achievements':
        return <AchievementsView userStats={userStats} />;
      default:
        return <TasksView tasks={tasks} toggleTask={toggleTask} />;
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 flex pt-16">
      {/* Sidebar */}
      <motion.aside
        className="w-72 bg-white/95 backdrop-blur-sm shadow-xl"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="p-6 h-full flex flex-col">
          {/* User Profile */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-xs text-gray-500 mb-2">
              {time.toLocaleTimeString()}
            </div>

            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              👨‍🎓
            </motion.div>

            <h3 className="font-bold text-gray-900 text-lg">Raju</h3>
            <div className="flex items-center justify-center mt-2">
              <span className="text-purple-600 font-semibold mr-2">
                Level {userStats.level}
              </span>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {userStats.xp} XP
              </div>
            </div>

            {/* XP Progress Bar */}
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 2, delay: 1 }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">250 XP to next level</p>
          </motion.div>

          {/* Navigation */}
          <nav className="space-y-2 flex-1">
            {sidebarItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
                
                {item.count !== null && (
                  <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeTab === item.id
                      ? 'bg-white/20 text-white'
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    {item.count}
                  </div>
                )}
              </motion.button>
            ))}
          </nav>

          {/* Quick Stats */}
          <motion.div
            className="mt-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h4 className="font-semibold mb-3 text-gray-900 flex items-center">
              <span className="mr-2 text-xl">📈</span>
              Today's Progress
            </h4>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Tasks Done</span>
                <span className="font-bold">3/5</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="flex items-center">
                  <span className="mr-1">🔥</span>
                  <span>Streak</span>
                </span>
                <span className="font-bold">{userStats.streak} days</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// Optimized Tasks View Component
function TasksView({ tasks, toggleTask }: { tasks: Task[]; toggleTask: (id: number) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Tasks
          </h1>
          <p className="text-gray-600">
            {tasks.filter(t => !t.completed).length} tasks remaining
          </p>
        </div>
        
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          + Add Task
        </motion.button>
      </div>

      {/* Task List */}
      <div className="grid gap-4">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
              task.completed ? 'opacity-75' : ''
            }`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                <motion.button
                  onClick={() => toggleTask(task.id)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    task.completed
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-purple-300 hover:border-purple-500'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {task.completed && <span className="text-lg">✓</span>}
                </motion.button>
                
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-900'
                  }`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  task.priority === 'high' ? 'bg-red-100 text-red-800' :
                  task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {task.priority}
                </div>
                
                <div className="w-32">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{task.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${task.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Simplified Progress View Component
function ProgressView({ userStats }: { userStats: UserStats }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Your Progress
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: '🎯', value: userStats.tasksCompleted, label: 'Tasks Completed' },
          { icon: '⚡', value: userStats.xp, label: 'Experience Points' },
          { icon: '🔥', value: userStats.streak, label: 'Day Streak' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className="text-6xl mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Level Progress</h2>
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-lg font-semibold">Level {userStats.level}</span>
          <div className="flex-1 bg-gray-200 rounded-full h-4">
            <motion.div
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-4 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ duration: 2, delay: 1 }}
            />
          </div>
          <span className="text-lg font-semibold">Level {userStats.level + 1}</span>
        </div>
        <p className="text-gray-600">250 XP to next level</p>
      </motion.div>
    </motion.div>
  );
}

// Simplified Achievements View Component
function AchievementsView({ userStats }: { userStats: UserStats }) {
  const allAchievements = [
    { name: 'Early Bird', icon: '🌅', description: 'Complete a task before 8 AM', unlocked: true },
    { name: 'Streak Master', icon: '🔥', description: 'Maintain a 7-day streak', unlocked: true },
    { name: 'Task Crusher', icon: '💪', description: 'Complete 50 tasks', unlocked: true },
    { name: 'Night Owl', icon: '🦉', description: 'Complete a task after 10 PM', unlocked: false },
    { name: 'Speed Demon', icon: '⚡', description: 'Complete 10 tasks in one day', unlocked: false },
    { name: 'Perfectionist', icon: '✨', description: 'Complete a week with 100% task completion', unlocked: false }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Achievements
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allAchievements.map((achievement, index) => (
          <motion.div
            key={achievement.name}
            className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center ${
              achievement.unlocked ? 'hover:shadow-xl' : 'opacity-60'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: achievement.unlocked ? 1 : 0.6, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={achievement.unlocked ? { scale: 1.05 } : {}}
          >
            <div className="text-6xl mb-4">{achievement.icon}</div>
            <h3 className={`text-lg font-bold mb-2 ${
              achievement.unlocked ? 'text-gray-900' : 'text-gray-500'
            }`}>
              {achievement.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
            
            {achievement.unlocked ? (
              <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                UNLOCKED
              </div>
            ) : (
              <div className="bg-gray-300 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold">
                LOCKED
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
