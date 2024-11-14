import { DataContextType } from '@/types/DataContextTypes';
import { createContext, ReactNode } from 'react';

export const DataContext = createContext<DataContextType | null>(null)

const DataProvider = ({ children }: { children: ReactNode }) => {
    const loading = false;

    const allData = { loading }
    return (
        <DataContext.Provider value={allData}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
