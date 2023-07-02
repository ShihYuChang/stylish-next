'use client';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar() {
  const [userInput, setUserInput] = useState<string>('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setUserInput(input);
  }

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = `/search/${userInput}`;
  }

  return (
    <form
      className='w-[214px] h-[44px] flex items-center border border-solid border-custom-grey rounded-[20px] pl-[20px] pr-[10px]'
      onSubmit={handleSearch}
    >
      <input
        className='w-full h-[24px] outline-none text-[20px] text-custom-brown'
        placeholder='搜尋'
        onChange={handleInput}
      />
      <button
        type='submit'
        className='h-full w-[44px] shrink-0 text-[30px] text-icon-brown flex items-center justify-center cursor-pointer'
      >
        <CiSearch />
      </button>
    </form>
  );
}
