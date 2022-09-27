import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen gap-10 space-y-5 bg-slate-400 px-10 py-10">
      <div className="rounded-3xl bg-white p-6 shadow-xl  ">
        <span className="text-3xl font-semibold">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div className="first my-2 flex justify-between" key={i}>
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <div className="flex flex-col">
          <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
            <span>Total</span>
            <span className="font-semibold">$91</span>
          </div>
          <button className="m-auto mx-auto w-3/5 rounded-xl bg-blue-500 p-2 text-center text-white hover:bg-teal-500 hover:text-black ">
            Check out
          </button>
        </div>
      </div>
      <div className="group rounded-2xl  bg-white shadow-xl ">
        <div className="overflow-hidden rounded-t-2xl bg-blue-500 p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="itend relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Order</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24  rounded-full bg-zinc-400 transition-colors group-hover:bg-red-400" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-400">뉴욕, 미국</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-xl  ">
        <div className="mb-5 flex items-center justify-between">
          <span>⬅</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="rounded-md p-2 text-red-500 shadow-xl">♥</span>
          </div>
        </div>
        <div className="mb-5 h-72 bg-zinc-400" />
        <div className="flex flex-col">
          <span className="mb-1.5 text-xl font-medium">Swoon Lounge</span>
          <span className="to-gray-500 text-xs">Chair</span>
          <div className="mt-3 mb-5 flex items-center justify-between">
            <div className="space-x-2">
              <button className="h-5 w-5 rounded-full bg-yellow-500 bg-opacity-50 ring-yellow-500 ring-offset-2 transition-all focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-indigo-500 bg-opacity-50 ring-indigo-500 ring-offset-2 transition-all focus:ring-2" />
              <button className="h-5 w-5 rounded-full bg-teal-500 bg-opacity-50 ring-teal-500 ring-offset-2 transition-all focus:ring-2" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="aspect-square w-8 items-center justify-center rounded-lg bg-blue-100 p-1.5 text-xl font-medium text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="aspect-square w-8 items-center justify-center rounded-lg bg-blue-100 p-1.5 text-xl font-medium text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium">$450</span>
            <button className="rounded-lg bg-blue-500 py-2 px-8 text-center text-sm text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
