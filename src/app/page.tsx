"use client"
import React, { useState } from 'react';
import Head from 'next/head';
import Modal from '../components/Modal';
import InputForm from '../components/InputForm';
import Image from "next/image";
import Chart from '../components/Chart';
import TransactionList from '@/components/TransactionList';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="min-h-screen bg-gray-100">
    <Head>
      <title>Personal Finance Tracker</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Personal Finance Tracker</h1>
      </div>
    </header>

    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-10">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-end mb-4">
          <button
            onClick={openModal}
            className="py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Transaction
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <InputForm onClose={closeModal} />
        </Modal>

        <TransactionList />
        <Chart />
      </div>
    </main>
  </div>
  );
}
