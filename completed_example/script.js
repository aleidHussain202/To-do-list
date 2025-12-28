document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const itemsLeft = document.getElementById('items-left');
    const clearCompletedBtn = document.getElementById('clear-completed');
    const dateDisplay = document.getElementById('date-display');

    // State
    let tasks = JSON.parse(localStorage.getItem('premium-todo-tasks')) || [];

    // Initialize
    init();

    function init() {
        renderDate();
        renderTasks();
        addEventListeners();
    }

    function renderDate() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateDisplay.textContent = new Date().toLocaleDateString(undefined, options);
    }

    function addEventListeners() {
        addBtn.addEventListener('click', addTask);
        
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTask();
        });

        taskList.addEventListener('click', handleTaskAction);
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', handleFilter);
        });

        clearCompletedBtn.addEventListener('click', clearCompleted);
    }

    // Task Operations
    function addTask() {
        const text = taskInput.value.trim();
        
        if (text === '') {
            shakeInput();
            return;
        }

        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();
        taskInput.value = '';
        taskInput.focus();
    }

    function handleTaskAction(e) {
        const item = e.target.closest('.task-item');
        if (!item) return;

        const id = Number(item.dataset.id);

        // Toggle Complete (Clicking the custom checkbox or the text)
        if (e.target.closest('.custom-checkbox') || e.target.classList.contains('task-text')) {
            toggleTask(id);
        }

        // Delete (Clicking the delete button)
        if (e.target.closest('.delete-btn')) {
            deleteTask(item, id);
        }
    }

    function toggleTask(id) {
        tasks = tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        saveTasks();
        renderTasks();
    }

    function deleteTask(element, id) {
        // Add exit animation
        element.style.transform = 'translateX(20px)';
        element.style.opacity = '0';

        setTimeout(() => {
            tasks = tasks.filter(task => task.id !== id);
            saveTasks();
            renderTasks();
        }, 300);
    }

    function clearCompleted() {
        tasks = tasks.filter(task => !task.completed);
        saveTasks();
        renderTasks();
    }

    // Filtering & Rendering
    function handleFilter(e) {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderTasks();
    }

    function getActiveFilter() {
        const activeBtn = document.querySelector('.filter-btn.active');
        return activeBtn ? activeBtn.dataset.filter : 'all';
    }

    function renderTasks() {
        const filter = getActiveFilter();
        
        // Filter tasks
        const filteredTasks = tasks.filter(task => {
            if (filter === 'active') return !task.completed;
            if (filter === 'completed') return task.completed;
            return true;
        });

        // Clear list
        taskList.innerHTML = '';

        // Generate HTML
        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.dataset.id = task.id;
            
            li.innerHTML = `
                <div class="task-left">
                    <div class="custom-checkbox">
                        <i class="fas fa-check"></i>
                    </div>
                    <span class="task-text">${escapeHtml(task.text)}</span>
                </div>
                <button class="delete-btn"><i class="fas fa-trash"></i></button>
            `;
            
            taskList.appendChild(li);
        });

        updateStats();
    }

    function updateStats() {
        const activeCount = tasks.filter(task => !task.completed).length;
        itemsLeft.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;
    }

    function saveTasks() {
        localStorage.setItem('premium-todo-tasks', JSON.stringify(tasks));
    }

    // Helper: Input Shake Animation
    function shakeInput() {
        taskInput.style.borderColor = 'var(--danger)';
        taskInput.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 400,
            easing: 'ease-in-out'
        });
        
        setTimeout(() => {
            taskInput.style.borderColor = 'var(--glass-border)';
        }, 400);
    }

    // Helper: Prevent XSS
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});
