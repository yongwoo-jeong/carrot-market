import { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="글쓰기">
      <form className="space-y-4 p-4">
        <TextArea required placeholder="Ask a question!"></TextArea>
        <Button text="Submit"></Button>
      </form>
    </Layout>
  );
};

export default Write;
