export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-[920px] border-t border-line px-6 py-[84px] lg:px-0">
        <h2 className="break-keep text-[24px] font-bold leading-[1.1] tracking-[-1.2px] lg:text-[40px]">
          함께 만들고 싶은 일이 있다면,
          <br />
          sjleedsgn@gmail.com
        </h2>
        <div className="mt-[48px] flex flex-wrap items-center justify-between gap-3">
          <span className="font-ibm text-[12px] tracking-[0.24px] text-muted">
            © 2026 이상정 · Sangjeong Lee
          </span>
          <span className="font-ibm text-[12px] tracking-[0.24px] text-muted">
            Designed by sjlee
          </span>
        </div>
      </div>
    </footer>
  );
}
