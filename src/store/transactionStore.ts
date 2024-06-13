import { create } from "zustand";
import { persist } from "zustand/middleware";
import {Transaction } from "@/types"

interface StoreState {
    transactions: Transaction[];
    addTransaction: (transaction: Transaction) => void;
  }
  
  export const useStore = create<StoreState>()(
    persist(
      (set) => ({
        transactions: [],
        addTransaction: (transaction: Transaction) =>
          set((state) => ({
            transactions: [...state.transactions, transaction],
          })),
      }),
      {
        name: 'finance-tracker', // name of the item in storage
      }
    )
  );
  