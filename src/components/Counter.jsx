export const Counter = () => {
  return (
    <>
      <div className="mb-3">
        <span>0</span>
      </div>
      <div className="flex justify-content-around">
        <button className="width-100">+</button>
        <button className="width-100">-</button>
        <button className="width-100">+10</button>
        <button className="width-100">+ Async</button>
      </div>
    </>
  );
};
