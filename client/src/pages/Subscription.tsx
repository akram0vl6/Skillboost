import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Subscription = () => {
  const faqData = [
    {
      id: 0,
      title: "Что дает подписка?",
      content:
        "Подписка дает доступ ко всем вопросам с собеседований, доступным на платформе, и безлимитному количеству собеседований.",
    },
    {
      id: 1,
      title: "Могу ли я получить помощь или задать вопрос по подписке?",
      content: (
        <>
          Вы можете обратиться в нашу службу поддержки через{" "}
          <a
            href="/support"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            форму на сайте
          </a>{" "}
          или{" "}
          <a
            href="https://t.me/solvit_support"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            в телеграме
          </a>
          .
        </>
      ),
    },
    {
      id: 2,
      title: "Как отменить подписку?",
      content: 'Отменить подписку можно в профиле во вкладке "Личный кабинет".',
    },
  ];

  // const modalContentDb = [
  //   {
  //     id: 1,
  //     title: 'Подписка на 1 месяц',
  //     price: '1290 ₽',
  //   },
  //   {
  //     id: 2,
  //     title: 'Подписка на 3 месяц',
  //     price: '1290 ₽',
  //   }
  // ]

  const [open, setOpen] = useState<number | any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    price: "",
    description: "",
  });
  const [promoCode, setPromoCode] = useState("");

  const contentRefs = useRef<Record<number, HTMLDivElement | any>>({});

  const toggle = (id: number) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  const handalModalOpen = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <div>
      <section className="flex flex-col">
        <h1 className="font-bold text-2xl text-[var(--color-text)] sm:text-5xl leading-10 sm:leading-[56px] mb-10">
          Оформи подписку и получи <br /> дополнительные преимущества
        </h1>

        <main className="flex flex-col md:flex-row gap-10">
          <article className="basis-1/2">
            <h2 className="font-bold text-[#09B87E] text-[20px] mb-2">
              ✅ Доступ ко всем вопросам и задачам
            </h2>
            <p className="text-[#87898F]">
              Доступ ко всем задачам и вопросам с реальных собеседований в
              ведущие IT-компании
            </p>
          </article>
          <article className="basis-1/2">
            <h2 className="font-bold text-[#09B87E] text-[20px] mb-2">
              ♾️ Безлимит на собеседования
            </h2>
            <p className="text-[#87898F]">
              Доступ к безлимитному прохождению собеседований в{" "}
              <Link to="/interviews" className="text-[#09B87E]">
                Тренажере
              </Link>
            </p>
          </article>
        </main>

        <section className="flex md:flex-row flex-col items-center gap-10 w-full mt-10">
          {/* Подписка на 1 месяц */}
          <article className="relative overflow-hidden bg-[#09B87E] flex flex-col gap-5 md:max-w-[500px] bg-st-green-90 rounded-[20px] p-5 sm:p-7 basis-1/2">
            <header className="flex flex-col gap-2">
              <h3 className="font-bold text-2xl lg:text-3xl text-white">
                Подписка на 1 месяц
              </h3>
              <p className="text-white text-md lg:text-xl font-light">
                Идеальный вариант для быстрой подготовки к собеседованию
              </p>
            </header>

            <section className="w-full mt-auto flex flex-col justify-between gap-3 p-4 rounded-[20px] bg-white">
              <header className="flex gap-3 items-center">
                <h3 className="font-semibold text-4xl text-black">1290 ₽</h3>
              </header>

              <article className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                <p className="w-full lg:w-[65%] text-sm text-gray-400">
                  У вас есть промокод? Введите его, чтобы получить скидку на
                  подписку
                </p>
                <button
                  onClick={() =>
                    handalModalOpen({
                      title: "Подписка на 1 месяц",
                      price: "1290 ₽",
                      description:
                        "Идеальный вариант для быстрой подготовки к собеседованию",
                    })
                  }
                  className="cursor-pointer p-button p-button-sm !bg-transparent w-full max-w-48 lg:w-[40%] text-st-green-90 border-2 hover:border-[#7cdbbbfd] hover:text-[#7cdbbbfd] duration-300 border-[#09B87E] text-[#09B87E] rounded-lg px-[3px]"
                >
                  Ввести промокод
                </button>
              </article>
            </section>

            <button className="bg-black text-white hover:bg-neutral-700 font-medium px-5 py-3 rounded-xl text-base z-10 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
              Оформить подписку
            </button>
          </article>

          {/* Подписка на 3 месяца */}
          <article className="relative overflow-hidden flex flex-col gap-5 md:max-w-[500px] basis-1/2 p-5 sm:p-7 rounded-[20px] bg-[#9747FF]">
            <header className="flex flex-col gap-2">
              <h3 className="font-bold text-2xl lg:text-3xl text-white">
                Подписка на 3 месяца
              </h3>
              <p className="text-white text-md lg:text-xl font-light">
                Самая востребованная подписка среди пользователей
              </p>
            </header>

            <section className="w-full mt-auto flex flex-col justify-between gap-3 p-4 rounded-[20px] bg-white z-10">
              <header className="flex gap-3 items-center">
                <h3 className="font-semibold text-4xl text-black">2990 ₽</h3>
              </header>

              <article className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
                <p className="w-full lg:w-[65%] text-sm text-gray-400">
                  У вас есть промокод? Введите его, чтобы получить скидку на
                  подписку
                </p>
                <button
                  onClick={() =>
                    handalModalOpen({
                      title: "Подписка на 3 месяц",
                      price: "2990 ₽",
                      description:
                        "Самая востребованная подписка среди пользователей",
                    })
                  }
                  className="p-button p-button-sm !bg-transparent w-full max-w-48 lg:w-[40%] text-st-green-90 border-2 hover:border-[#09B87E] border-[#09B87E] text-[#09B87E] rounded-lg px-[3px]"
                >
                  Ввести промокод
                </button>
              </article>
            </section>

            <button className="bg-black text-white hover:bg-neutral-700 font-medium px-5 py-3 rounded-xl text-base z-10 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
              Оформить подписку
            </button>
          </article>
        </section>
      </section>

      <SubscriptionDialog modalOpen={modalOpen} onClose={setModalOpen} content={modalContent} />

      <section className="w-full pb-20">
        <h2 className="font-bold text-[40px] mt-8 mb-6 text-[var(--color-text)]">FAQ</h2>
        <div className="w-full bg-[var(--bg-03)] rounded-lg  border border-[#262840]">
          {faqData.map(({ id, title, content }) => {
            const isOpen = open === id;
            return (
              <div
                key={id}
                className="mb-2 px-2 border-t border-[#262840] overflow-hidden transition-all duration-500"
              >
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  className={`flex justify-between w-full text-left text-[#9493A1] text-lg py-4 px-2 font-medium dark:!bg-st-white-T5 ${
                    isOpen ? "text-[var(--color-text)]" : ""
                  } hover:text-[var(--color-text)] transition-colors`}
                >
                  {title}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                <div
                  ref={(el) => {
                    contentRefs.current[id] = el;
                  }}
                  className="transition-all duration-500 ease-in-out px-2 overflow-hidden text-[#9493A1]"
                  style={{
                    maxHeight: isOpen
                      ? `${contentRefs.current[id]?.scrollHeight}px`
                      : "0px",
                  }}
                >
                  <p className="text-sm pb-4">{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

// function SubscriptionDialog({
//   promocode,
//   onPromocodeChange,
//   onApply,
//   onClose,
//   content
// }) {
//   return (
//     <div
//       className="p-dialog p-component rounded-3xl dark:bg-surface-800 dark:border dark:border-surface-700 dark:text-white"
//       role="dialog"
//       aria-labelledby="subscription-dialog-header"
//       aria-modal="true"
//       style={{ display: 'flex', flexDirection: 'column', pointerEvents: 'auto', width: 400 }}
//     >
//       {/* focus trap start */}
//       <span
//         className="p-hidden-accessible p-hidden-focusable"
//         tabIndex={0}
//         role="presentation"
//         aria-hidden="true"
//       />

//       {/* Header */}
//       <div className="p-dialog-header flex items-start justify-between pb-1 pt-4">
//         <section className="flex flex-col gap-5 pt-1">
//           <h1 id="subscription-dialog-header" className="text-2xl font-bold">
//             Оформление подписки
//           </h1>
//           <p className="text-gray-400">
//             Чтобы скидка применилась, введите промокод
//           </p>
//         </section>

//         {/* Close button */}
//         <button
//           type="button"
//           onClick={onClose}
//           aria-label="Close"
//           className="p-button p-component p-button-icon-only p-button-secondary p-button-rounded p-button-text"
//         >
//           <svg
//             width={14}
//             height={14}
//             viewBox="0 0 14 14"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="p-icon"
//           >
//             <path
//               d="M8.01186 7.00933L12.27 2.75116..."
//               fill="currentColor"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Content */}
//       <div className="p-dialog-content flex flex-col gap-3">
//         <div className="flex gap-2 mb-5">
//           <input
//             type="text"
//             id="promocode"
//             maxLength={30}
//             autoFocus
//             autoComplete="off"
//             placeholder="Введите промокод"
//             className="p-inputtext p-component flex-auto uppercase focus:ring-0 w-full py-2"
//             value={promocode}
//             onChange={e => onPromocodeChange(e.target.value)}
//           />
//           <button
//             type="button"
//             onClick={onApply}
//             disabled={!promocode.trim()}
//             aria-label="Применить"
//             className="p-button p-component w-full rounded-xl text-sm py-2.5"
//           >
//             Применить
//           </button>
//         </div>

//         <div className="flex justify-between mt-2">
//           <p className="text-gray-400 w-1/2">Стоимость подписки за месяц</p>
//           <p className="font-bold text-2xl">{content.price} ₽</p>
//         </div>

//         <button
//           type="button"
//           disabled={!promocode.trim()}
//           className="p-button p-component w-full mt-5"
//           aria-label="Перейти к оплате"
//         >
//           Перейти к оплате
//         </button>
//       </div>

//       {/* focus trap end */}
//       <span
//         className="p-hidden-accessible p-hidden-focusable"
//         tabIndex={0}
//         role="presentation"
//         aria-hidden="true"
//       />
//     </div>
//   );
// }


function SubscriptionDialog({ onClose, content, modalOpen }) {
  const [promocode, setPromocode] = useState("");

  if (modalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }


  return (
    modalOpen && (
    <div className="fixed scale-hider inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] text-gray-700">
      {/* Само окно */}
      <div className="relative bg-[var(--bg-03)] border border-[#262840] w-[400px] rounded-lg p-6">
        {/* Фокус-холдер сверху */}
        <span
          className="sr-only"
          tabIndex={0}
          aria-hidden="true"
        />

        {/* Заголовок */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[var(--color-text)]">Оформление подписки</h1>
            <p className="mt-1 text-gray-400">
              Чтобы скидка применилась, введите промокод
            </p>
          </div>
          <button
            onClick={() => onClose(false)}
            aria-label="Закрыть"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Контент */}
        <div className="space-y-6">
          {/* Промокод */}
          <div className="flex gap-3">
            <input
              type="text"
              // value={promotode}
              onChange={e => setPromocode(e.target.value)}
              className="flex-1 bg-[var(--color-accent)] px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:border-2 focus:border-[var(--color-main)] placeholder-gray-500 text-[var(--color-text)]"
              placeholder="Введите промокод"
              maxLength={30}
              autoFocus
            />
            <button
              onClick={() => {/* применить */}}
              // disabled={!promotode.trim()}
              className="px-6 bg-[var(--color-main)] disabled:opacity-50 rounded-lg text-white font-medium transition"
            >
              Применить
            </button>
          </div>

          {/* Стоимость */}
          <div className="flex justify-between items-center">
            <span className="text-gray-400 w-[150px]">Стоимость подписки за месяц</span>
            <span className="text-2xl font-bold text-[var(--color-text)]">{content.price}</span>
          </div>

          {/* Оплатить */}
          <button
            onClick={() => {/* оплата */}}
            // disabled={!promotode.trim()}
            className="w-full py-3 bg-[var(--color-main)] disabled:opacity-50 rounded-lg text-white font-semibold transition"
          >
            Перейти к оплате
          </button>
        </div>

        {/* Фокус-холдер снизу */}
        <span
          className="sr-only"
          tabIndex={0}
          aria-hidden="true"
        />
      </div>
    </div>

    )
  );
}

export default Subscription;
