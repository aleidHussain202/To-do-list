# Comparison: Vanilla JS vs Next.js

You now have two versions of the project:

1.  **Root Directory**: The "Vanilla" version (HTML/CSS/JS) you are learning.
2.  **`nextjs-example/`**: The modern "Pro" version using Next.js, React, and Tailwind.

## Key Differences

| Feature       | Vanilla (Root)    | Next.js (`nextjs-example/`)                    |
| :------------ | :---------------- | :--------------------------------------------- |
| **Structure** | `index.html` File | `src/app/layout.tsx` & `page.tsx` Components   |
| **Styling**   | `style.css`       | Tailwind CSS (Utility classes) & `globals.css` |
| **Logic**     | `script.js`       | React Components (inside `.tsx` files)         |
| **Routing**   | Single Page       | File-system based (folders in `app/`)          |

## File Mapping

If you want to see "where the code went" in Next.js:

- **`index.html`** → Replaced by **`src/app/page.tsx`** (The UI) and **`src/app/layout.tsx`** (The wrapper `<html>` and `<body>`).
- **`style.css`** → Replaced by **Tailwind classes** (e.g., `text-center`, `flex`) inside the components, and base styles in **`src/app/globals.css`**.
- **`script.js`** → Logic is now written directly inside the **React Components** in `src/app/page.tsx`.

## How to Run the Next.js App

To see the Next.js version in action, you need to use the terminal:

1.  Open your terminal.
2.  Navigate to the folder:
    ```bash
    cd nextjs-example
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.
