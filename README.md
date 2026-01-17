# Mini Time Tracker - Frontend

## 🚀 Technologies

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **UI Library:** [Material-UI (MUI) v7](https://mui.com/)
- **Styling:** Emotion (CSS-in-JS)
- **React:** 19.2.3

## 📋 Features

- **Time Entry Form:**
  - Date picker (defaults to today's date)
  - Project dropdown with predefined projects
  - Hours input field
  - Work description textarea
  - Form validation and error handling

- **Entry History:**
  - Entries grouped by date
  - Displays: Date | Project | Hours | Description
  - Total hours per day
  - Grand total across all entries
  - Server-side rendering for optimal performance

## 📁 Project Structure

```
src/
├── api/                    
│   └── timeEntryApi.ts    
├── app/                    
│   ├── layout.tsx         
│   ├── page.tsx           
│   └── globals.css        
├── components/            
│   ├── CreateTimeEntrySection.tsx  
│   ├── TimeEntryForm.tsx          
│   ├── TimeEntryHistory.tsx       
│   └── ui/                        
│       ├── CustomButton.tsx
│       └── CustomField.tsx
├── constants/             
│   └── projects.ts        
├── hooks/                 
│   └── useCreateTimeEntry.ts  
├── lib/                   
│   └── dateUtils.ts       
└── types/                 
    └── timeEntry.ts       
```

## 🛠️ Installation

1. **Clone the repository** (if applicable) or navigate to the project directory

2. **Install dependencies:**
   ```bash
   npm install
   ```

## ⚙️ Configuration

1. **Create a `.env.local` file** in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```
   
   Replace `http://localhost:3001` with your backend API URL.

2. **Update project list** (optional):
   Edit `src/constants/projects.ts` to customize available projects.


