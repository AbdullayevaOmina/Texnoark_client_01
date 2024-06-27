import { AksiyaProducts } from "@/components/sections";

const AboutPage = () => {
  return (
    <div className="mb-8">
      <div className="container my-4 mb-10">
        <div className="flex gap-3 mb-4">
          <button className="w-[175px] h-[46px] bg-[#FF6F14] rounded-lg text-white font-bold text-[14px] flex justify-center items-center gap-3">
            Texnoark haqida
          </button>
          <button className="w-[175px] h-[46px] bg-white rounded-lg font-bold text-[14px] flex justify-center items-center gap-3">
            Muddatli to’lov
          </button>
          <button className="w-[175px] h-[46px] bg-white rounded-lg font-bold text-[14px] flex justify-center items-center gap-3">
            Yordam
          </button>
          <button className="w-[175px] h-[46px] bg-white rounded-lg font-bold text-[14px] flex justify-center items-center gap-3">
            To‘lov usullari
          </button>
          <button className="w-[175px] h-[46px] bg-white rounded-lg font-bold text-[14px] flex justify-center items-center gap-3">
            Tovarlarga kafolat
          </button>
        </div>
        <div className="h-[526px] bg-white rounded-lg p-[60px]">
          <h1 className="text-[35px] font-extrabold ">Texnoark haqida</h1>
          <div className="flex gap-10 my-5">
            <div>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout.
              <br />
              <br />
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </div>
            <div>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout.
              <br />
              <br />
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </div>
          </div>
          <div className="flex gap-5">
            <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.08376 6.08376C6.51413 3.75992 8.55154 2 11 2H13C15.4485 2 17.4859 3.75992 17.9162 6.08376C20.2401 6.51413 22 8.55154 22 11V13C22 15.4485 20.2401 17.4859 17.9162 17.9162C17.4859 20.2401 15.4485 22 13 22H11C8.55154 22 6.51413 20.2401 6.08376 17.9162C3.75992 17.4859 2 15.4485 2 13V11C2 8.55154 3.75992 6.51413 6.08376 6.08376ZM8.17071 6C8.58254 4.83481 9.69378 4 11 4H13C14.3062 4 15.4175 4.83481 15.8293 6H8.17071ZM6 13V15.8293C4.83481 15.4175 4 14.3062 4 13V11C4 9.34315 5.34315 8 7 8H17C18.6569 8 20 9.34315 20 11V13C20 14.3062 19.1652 15.4175 18 15.8293V13C18 12.4477 17.5523 12 17 12H7C6.44772 12 6 12.4477 6 13ZM8 14V17C8 18.6569 9.34315 20 11 20H13C14.6569 20 16 18.6569 16 17V14H8Z"
                  fill="#240E00"
                  fill-opacity="0.8"
                />
              </svg>
            </button>
            <button className="flex items-center justify-center gap-[4px] bg-[#f0f0f0] py-[13px] px-[14px] rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C16.615 10 15.3945 9.29614 14.6765 8.22662L9.65734 10.3777C9.87761 10.8735 10 11.4225 10 12C10 12.4468 9.92674 12.8765 9.79157 13.2778L14.7035 15.7337C15.4248 14.6865 16.6322 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18C14 17.8741 14.0058 17.7496 14.0172 17.6266L8.68814 14.9621C7.97795 15.607 7.03487 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C6.8779 8 7.68975 8.28282 8.34939 8.76231L14.0138 6.33471C14.0047 6.22435 14 6.11272 14 6ZM18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4ZM18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16ZM4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12Z"
                  fill="#240E00"
                  fill-opacity="0.8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AksiyaProducts />
    </div>
  );
};

export default AboutPage;
