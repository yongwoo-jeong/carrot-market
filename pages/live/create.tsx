import { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const StreamCreate: NextPage = () => {
  return (
    <Layout canGoBack title="라이브 시작">
      <form className="space-y-5 px-4 py-10">
        <Input required label="Name" name="name" type="text" />
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="시작" />
      </form>
    </Layout>
  );
};

export default StreamCreate;
