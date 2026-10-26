export default function ContactListComponent({ icon, title, value }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] bg-orange-50 text-[22px] text-amber-500">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="mb-0.5 text-sm text-slate-500">{title}</p>

        <div className="break-words text-base font-semibold text-slate-900">
          {value}
        </div>
      </div>
    </div>
  );
}