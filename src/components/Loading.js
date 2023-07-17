import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <>
      <div className="loader">
        <ReactLoading type="spin" color="#0000FF" height={100} width={150} />
      </div>
    </>
  );
};

export default Loading;
