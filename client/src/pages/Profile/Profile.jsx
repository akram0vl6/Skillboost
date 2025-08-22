import React, { use, useState } from "react";
import "./Profile.css";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Edit from "./Edit/Edit";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const storedData = JSON.parse(localStorage.getItem("data")) || {};
  const username = storedData.fullName || "Гость";
  const avatarUrl = storedData.avatarUrl ? storedData.avatarUrl : null;

  console.log(storedData);
  
  return (
    <>
   {edit ? (
    <div>
      <Edit />
    </div>
   ): (

     <>
       <div className="pb-5">
         <h1 className="font-bold text-[32px] px-2 md:px-0 my-5 text-[var(--color-text)] " >Мой профиль</h1>
         <div>
           <section className="w-full flex flex-col gap-3">
             <section className="flex flex-col gap-3 border border-[var(--color-text)] p-3 md:p-4 dark:bg-st-white-T5 rounded-2xl sm:flex-row">
               <section className="flex justify-between items-start gap-1.5">
                 <button className="relative w-fit h-fit" disabled="">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                     {avatarUrl ? (
                       <img
                         src={`http://localhost:4444${avatarUrl}`}
                         alt="Аватар"
                         className="w-full h-full object-cover"
                       />
                     ) : (
                       <FaUser className="w-full h-full text-[#6e8a9e] dark:text-st-gray-60" />
                     )}
                   </div>
                 </button>
                 <section className="flex sm:hidden flex-col gap-3 items-end">
                   <a
                     href="/profile/subscription"
                     className="min-w-fit w-[174px] flex flex-col gap-1 items-end"
                     aria-label="Подписка не оплачена"
                     role="status"
                   >
                     <p className="text-center text-red-700 text-sm rounded-2xl px-2 py-1 w-full bg-st-error-T250 text-st-error-50 dark:bg-st-error-T300">
                       Подписка не оплачена
                     </p>
                   </a>
                   <section className="flex gap-3">
                     <img
                       src="/google-logo.svg"
                       className="w-7 h-7 md:w-9 md:h-9"
                       width="36"
                       height="36"
                       alt="провайдер авторизации"
                       title="akramovakramov32@gmail.com"
                     />
                   </section>
                 </section>
               </section>
               <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                 <section className="flex flex-col gap-1">
                   <p className="text-[#6e8a9e]">Имя</p>
                   <p className="text-xl font-bold text-[var(--color-text)]">{storedData.fullName}</p>
                 </section>
                 <section className="hidden sm:flex flex-col gap-1">
                   <p className="text-[#6e8a9e]">Связанные аккаунты</p>
                   <section className="flex gap-3 text-[var(--color-text)]">
                     <img />
                   </section>
                 </section>
                 <section className="flex flex-col gap-1">
                   <p className="text-[#6e8a9e]">Никнейм</p>
                   <a
                     
                     className="transition-colors text-xl font-bold w-fit text-[var(--color-text)]"
                   >
                     {storedData.username || "Не указан"}
                   </a>
                 </section>
                 <section className="flex flex-col gap-1">
                   <p className="text-[#6e8a9e]">Страна, город</p>
                   <p className="text-xl font-bold text-[var(--color-text)]">Не указано</p>
                 </section>
                 <section className="flex flex-col gap-1 lg:col-span-2">
                   <p className="text-[#6e8a9e]">Email</p>
                   <p
                     className="text-xl font-bold text-wrap break-words text-[var(--color-text)]"
                    
                   >
                     {storedData.email || "Не указан"}
                   </p>
                 </section>
               </section>
               <a href="/profile/subscription">
                 <p className="text-center text-sm rounded-2xl px-2 py-1 w-full bg-st-error-T250 text-st-error-50 dark:bg-st-error-T300">
                   Подписка не оплачена
                 </p>
               </a>
             </section>
             <section className="flex flex-col gap-3 border border-[var(--color-text)]  p-3 md:p-4 dark:bg-st-white-T5 rounded-2xl">
               <h3 className="text-2xl font-bold text-[var(--color-text)]">О себе</h3>
               <p className="text-[#6e8a9e]">Данные не указаны</p>
             </section>
             <section className="flex flex-col gap-3 border border-[var(--color-text)]  p-3 md:p-4 dark:bg-st-white-T5 rounded-2xl">
               <h3 className="text-2xl font-bold text-[var(--color-text)]">Опыт</h3>
               <section className="flex flex-col gap-4">
                 <p className="text-[#6e8a9e]"> Специализация не указана </p>
               </section>
             </section>
             <button 
              onClick={() => setEdit(true)}
             className="border border-[var(--color-main)] text-[var(--color-main)] p-2 rounded-lg cursor-pointer self-end">
               Редактировать
             </button>
           </section>
         </div>
       </div>
     </>
   )}
    </>
  );
};

export default Profile;
