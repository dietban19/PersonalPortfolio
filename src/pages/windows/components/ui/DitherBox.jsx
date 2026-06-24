function DitherBox({ children }) {
  return (
    <div
      className="
        min-h-[280px] w-full
        border-2 border-solid border-white
        bg-white p-8
        [background-image:radial-gradient(#fff200_1px,transparent_1px),radial-gradient(#fff200_1px,transparent_1px)]
        [background-size:6px_6px]
        [background-position:0_0,3px_3px]
      "
    >
      {children}
    </div>
  );
}

export default DitherBox;
