import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid gap-10 space-y-5 bg-slate-400 py-10 px-5">
      <div className="rounded-3xl bg-white p-6 shadow-xl  ">
        <span className="text-3xl font-semibold">Select Item</span>
        <div className="my-2 flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$172</span>
        </div>
        <div className="mt-2 flex justify-between border-t-2 border-dashed pt-2">
          <span>Total</span>
          <span className="font-semibold">$91</span>
        </div>
        <div className="m-auto mx-auto w-3/5 rounded-xl bg-blue-500 p-2 text-center text-white">
          Check out
        </div>
      </div>
      <div className="rounded-2xl bg-white  shadow-xl  ">
        <div className="overflow-hidden rounded-t-2xl bg-blue-500 p-6 pb-14">
          <span className="text-2xl text-white">Profile</span>
        </div>
        <div className="relative -top-5 rounded-3xl bg-white p-6">
          <div className="itend relative -top-16 flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Order</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24  rounded-full bg-red-400" />
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
      <div className="rounded-2xl bg-white p-10 shadow-xl  "></div>
      <div className="rounded-2xl bg-white p-10 shadow-xl  "></div>
    </div>
  );
};

export default Home;
