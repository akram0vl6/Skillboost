import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import "./Edit.css";

const Edit = () => {
  const navigate = useNavigate();
  const storedData = JSON.parse(localStorage.getItem("data")) || {};

  const [name, setName] = useState(storedData.fullName || "");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(storedData.avatarUrl || "");
  const [openInput, setOpenInput] = useState(null);

  const [specialization, setSpecialization] = useState("");
  const [grade, setGrade] = useState("");
  const [skills, setSkills] = useState([]);

  const inputs = [
    {
      id: 1,
      label: "Специализация",
      options: [
        "Python разработчик",
        "Frontend разработчик",
        "Backend разработчик",
        "Go разработчик",
      ],
    },
    {
      id: 2,
      label: "Грейд",
      options: ["Стажёр", "Junior", "MIddle", "Senior"],
    },
    // {
    //   id: 3,
    //   label: "Навыки",
    //   options: ["Python", "JavaScript", "Flask", "FactApi", "Django"],
    // },
  ];

  const skillsList = [
    "Python",
    "JavaScript",
    "Flask",
    "FastAPI",
    "Django",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
  ];

  // const [skills, setSkills] = useState([]);
  // const [openInput, setOpenInput] = useState(false);
    const wrapperRef = useRef(null);

  // Закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenInput(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpenInput]);

  const inputSkills = (value) => {
    setSkills((prev) => (prev.includes(value) ? prev : [...prev, value]));
  };

  const removeSkill = (value) => {
    setSkills((prev) => prev.filter((skill) => skill !== value));
  };

  const handleSelect = (inputId, value) => {
    console.log(`Выбранное значение для ${inputId}:`, value);
    console.log("hi");

    if (inputId === 1) {
      setSpecialization(value);
    }
    if (inputId === 2) {
      setGrade(value);
    }
    if (inputId === 3) {
      setSkills((prev) => [...prev, value]);
    }
    setOpenInput(null); // закрыть список
  };

  console.log(openInput, "openInput");

  // Обрабатываем загрузку фото
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);

    // Создаем превью фото
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  // Отправляем данные на сервер
  const handleSave = async () => {
    const formData = new FormData();
    formData.append("fullName", name);
    if (image) formData.append("avatarUrl", image);

    try {
      const res = await axios.put(
        "http://localhost:4444/api/profile/edit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${storedData.token}`,
          },
          withCredentials: true,
        }
      );

      // Обновляем данные в localStorage
      const updatedData = {
        ...storedData,
        fullName: res.data.fullName,
        avatarUrl: res.data.avatarUrl,
      };
      localStorage.setItem("data", JSON.stringify(updatedData));

      navigate("/home/profile");
    } catch (error) {
      console.error("Ошибка сохранения:", error);
    }
  };

  return (
    <div
      className=" max-w-full px-2 sm:px-2 lg:px-4"
      data-pc-section="panelcontainer"
    >
      <div>
        <form
          className="flex flex-col gap-3"
          data-pc-name="form"
          pc1_68=""
          data-pc-section="root"
        >
          <section className="flex flex-col gap-3 border border-[var(--color-text)] dark:border-st-gray-60 p-3 md:p-4 dark:bg-st-white-T5 rounded-2xl sm:flex-row items-start">
            <button className="relative w-fit h-fit" disabled="">
              <img
                className="object-cover rounded-xl relative p-skeleton w-[144px] h-[144px]"
                src="https://lh3.googleusercontent.com/a/ACg8ocLMgOc2MVG3-Ab5bKrqqne4pnxninaFrC0Hzw9x5jol8sDzrg=s400-c?retry=0"
                aria-hidden="true"
                referrerpolicy="no-referrer"
              />
              {/* <section  className="flex gap-1 items-end absolute right-1.5 bottom-1.5">
                <div
                  className="p-fileupload p-fileupload-basic p-component !justify-end"
                  data-pc-name="fileupload"
                  pc1_85=""
                  data-pc-section="root"
                >
                  <button
                    className="p-button p-component p-fileupload-choose-button !bg-white !gap-0 !p-1 border !border-st-gray-10 dark:border-st-gray-60"
                    data-p=""
                    type="button"
                    aria-label=" "
                    data-pc-name="pcchoosebutton"
                    data-p-disabled="false"
                    data-pc-extend="button"
                    pc1_86=""
                    data-pc-section="root"
                  >
                    <span
                      className="iconify i-st-icons:st-edit-outlined text-[#09B87E]"
                      aria-hidden="true"
        
                    ></span>
                    <span
                      className="p-button-label"
                      data-pc-section="label"
                      data-p=""
                    >
                      {" "}
                    </span>
                  </button>
                  <input type="file" accept="image/*" data-pc-section="input" />
                </div>
              </section> */}
            </button>
            <section className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-[var(--color-text)]">
              <label className="w-full flex flex-col gap-1">
                <p className="requiredField text-st-gray-50">Имя, Фамилия</p>
                <input
                  type="text"
                  className="border-2 border-[var(--color-text)] text-md p-2 pr-8 rounded-lg w-full
                     hover:border-[var(--color-main)]
                     focus:border-[var(--color-main)] focus:outline-none
                     transition-colors duration-200"
                  name="name"
                  data-p=""
                  data-pc-name="inputtext"
                  pc1_69=""
                  data-pc-section="root"
                  value={storedData.fullName || ""}
                />
              </label>
              <label className="w-full flex flex-col gap-1">
                <p className="requiredField text-st-gray-50">Никнейм</p>
                <input
                  type="text"
                  className="border-2 border-[var(--color-text)] text-md p-2 pr-8 rounded-lg w-full
                     hover:border-[var(--color-main)]
                     focus:border-[var(--color-main)] focus:outline-none
                     transition-colors duration-200"
                  name="username"
                  data-p=""
                  data-pc-name="inputtext"
                  pc1_70=""
                  data-pc-section="root"
                  value={storedData.username || "Гость"}
                />
              </label>
              <label className="w-full flex flex-col gap-1">
                <p className="text-st-gray-50">Страна, город</p>
                <input
                  type="text"
                  className="border-2 border-[var(--color-text)] text-md p-2 pr-8 rounded-lg w-full
                     hover:border-[var(--color-main)]
                     focus:border-[var(--color-main)] focus:outline-none
                     transition-colors duration-200"
                  name="location"
                  data-p=""
                  data-pc-name="inputtext"
                  pc1_71=""
                  data-pc-section="root"
                  value={storedData.location || "Не указано"}
                />
              </label>
              <label className="w-full flex flex-col gap-1">
                <p className="text-st-gray-50">Email</p>
                <input
                  type="email"
                  className="border-2 border-[var(--color-text)] text-md p-2 pr-8 rounded-lg w-full
                     hover:border-[var(--color-main)]
                     focus:border-[var(--color-main)] focus:outline-none
                     transition-colors duration-200"
                  name="email"
                  disabled=""
                  data-p=""
                  data-pc-name="inputtext"
                  pc1_72=""
                  data-pc-section="root"
                  value={storedData.email || "Не указан"}
                />
              </label>
            </section>
          </section>
          <section className="flex flex-col gap-3 border border-st-gray-20 dark:border-st-gray-60 p-3 md:p-4 rounded-2xl text-[var(--color-text)]">
            <h3 className="text-2xl font-bold requiredField">О себе</h3>
            <textarea
              className="border-2 border-[var(--color-text)] text-md p-2 pr-8 rounded-lg w-full
                     hover:border-[var(--color-main)]
                     focus:border-[var(--color-main)] focus:outline-none
                     transition-colors duration-200"
              name="bio"
              data-p=""
              type="text"
              data-pc-name="textarea"
              pc1_73=""
              data-pc-section="root"
            ></textarea>
          </section>
          <section className="flex flex-col gap-3 border border-st-gray-20 dark:border-st-gray-60 rounded-2xl px-4 py-3 md:p-4 text-[var(--color-text)]">
            <h3 className="text-2xl font-bold">Опыт</h3>
            <section className="flex flex-col gap-4 relative" ref={wrapperRef}>
              {inputs.map((input) => (
                <div key={input.id} className="relative w-full">
                  <p className="text-st-gray-50">{input.label}</p>
                  <div
                    className="relative w-full"
                    onClick={() =>
                      setOpenInput(openInput === input.id ? null : input.id)
                    }
                  >
                    <input
                      value={
                        input.id === 1
                          ? specialization
                          : input.id === 2
                          ? grade
                          : skills
                      }
                      className={`border-2  cursor-pointer  border-[var(--color-text)] text-md p-2 pr-8 rounded-lg w-full
                     hover:border-[var(--color-main)]
                     focus:border-[var(--color-main)] focus:outline-none
                     transition-colors duration-200 
                                   ${
                                     input.id === 3
                                       ? "bg-[var(--bg-03)]"
                                       : "border-[var(--color-text)]"
                                   }`}
                      name="bio"
                      type="text"
                    />
                    <IoIosArrowDown className="absolute right-2 top-[25px] -translate-y-1/2 text-st-gray-50 pointer-events-none" />
                  </div>
                  <div ref={wrapperRef}>

                  {openInput === input.id && (
                    <ul className="absolut overflow-hidden left-0 right-0 mt-1 bg-[var(--bg-03)] border border-[var(--color-text)] text-[var(--color-text)] rounded-lg shadow-md z-10">
                      {input.options.map((option) => (
                        <li
                          key={option}
                          className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                          onClick={() => handleSelect(input.id, option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                  </div>
                </div>
              ))}
              <div className="relative w-full">
                <p className="text-st-gray-50">Навыки</p>

                {/* Поле с выбранными навыками */}
                <div
                  className="border-2 rounded-lg p-2 cursor-pointer w-full flex flex-wrap gap-1 min-h-[42px]   hover:border-[var(--color-main)]
                     focus:border-[var(--color-main)] focus:outline-none
                     transition-colors duration-200 "
                  onClick={() => setOpenInput(openInput === 3 ? null : 3)}
                >
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[var(--bg-02)] text-[var(--color-text)] px-2 py-0.5 rounded flex items-center gap-1"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation(); // чтобы не открывалось меню
                          removeSkill(skill);
                        }}
                        className="text-[var(--color-text)] cursor-pointer font-bold"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <input className="outline-none flex-1 bg-transparent" />
                </div>

                {/* Выпадающий список */}
                {openInput === 3 && (
                  <ul ref={wrapperRef} className="absolut overflow-hidden left-0 right-0 mt-1 bg-[var(--bg-03)] border border-[var(--color-text)] text-[var(--color-text)] rounded-lg shadow-md z-10">
                    {skillsList.map((option) => (
                      <li
                        key={option}
                        className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        onClick={() => inputSkills(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </section>
          <section className="flex gap-3 justify-end mb-5">
            <button
              onClick={() => navigate(-1)}
              className="border border-[var(--color-text)] rounded-lg px-4 py-2 text-[var(--color-text)]"
              data-p=""
              type="button"
            >
              {" "}
              Отменить изменения{" "}
            </button>
            <button className="bg-[#09B87E] text-white rounded-lg px-4 py-2">
              {" "}
              Сохранить изменения{" "}
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Edit;
