export type Note = {
    id: number; 
    userId: string; 
    title: string; 
    content: string; 
    language: 'en' | 'ar'; 
    summary: string | null; 
    createdAt: string; 
    updatedAt: string; 
}

 