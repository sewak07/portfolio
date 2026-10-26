export default function LinkComponent({
  link,
  name,
  className = "",
  onClick,
  target,
  rel,
}) {
  const isHighlight = className.includes("highlight-link");

  return (
    <div className={className}>
      <a
        href={link}
        target={target}
        rel={rel}
        onClick={onClick}
        className={
          isHighlight
            ? "inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-[15px] font-semibold text-white no-underline transition-all duration-300 ease-in-out hover:scale-[1.03] hover:text-white hover:shadow-[0_8px_25px_rgba(249,115,22,0.35)]"
            : "inline-block text-[15px] font-medium text-slate-600 no-underline transition-colors duration-200 ease-in-out hover:text-slate-900"
        }
      >
        {name}
      </a>
    </div>
  );
}