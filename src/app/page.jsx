function TitleContent() {
  return (
    <div className="flex">
      <div className="info">
        <h1 className="font-semibold text-5xl">Leonardo Grau</h1>
      </div>
      <img src="" alt="" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="" style={{ height: "100vh" }}>
        <div
          className="flex justify-center items-center"
          style={{ height: "100%" }}
        >
          <TitleContent></TitleContent>
        </div>
      </div>
    </>
  );
}
