import { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="divide-y-[1px] py-10">
      {[...Array(10)].map((_, i) => (
        <div className="flex cursor-pointer items-center space-x-3 px-4 py-3">
          <div className="h-12 w-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm  font-medium text-gray-500">
              See you tomorrow at ther corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
