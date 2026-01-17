# Mini Time Tracker - Frontend

## 🚀 Technologies

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **UI Library:** [Material-UI (MUI) v7](https://mui.com/)
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

## 🛠️ Installation

1. Clone the repository:
```bash
   git clone <repository-url>
   cd viso-academy-front
```

2. **Create a `.env.local` file** in the root directory:
```env
   NEXT_PUBLIC_API_URL=your backend API URL
```   

3. **Install dependencies:**
```bash
   npm install
```

4. **Run:**
```bash
   npm run dev
```  

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








