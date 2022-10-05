import { NextPage } from "next";
import Button from "../../components/button";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
        rows={4}
        placeholder="Ask a question!"
      />
      <Button text="Submit">Submit</Button>
    </form>
  );
};

export default Write;
