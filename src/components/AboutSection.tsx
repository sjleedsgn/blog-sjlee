"use client";

import { useState } from "react";

const experiences = [
  {
    period: "2024 — 현재",
    company: "오내피플",
    role: "Product Designer",
    desc: "캐치시큐 프로덕트 전반의 디자인을 담당했습니다. B2B SaaS 프로덕트 디자인을 진행하며 문제해결 능력을 키울 수 있었습니다.",
    tags: ["Design System", "0→1", "Mentoring"],
  },
  {
    period: "2023 — 2023",
    company: "그레이비랩",
    role: "Product Designer",
    desc: "그래버 HR 서비스와, 프로젝트를 담당했습니다.",
    tags: ["Commerce", "A/B Test", "Funnel"],
  },
  {
    period: "2020 — 2022",
    company: "코레토",
    role: "UI/UX Designer",
    desc: "다양한 도메인의 디자인 경험을 했습니다. 프로젝트를 진행했습니다.",
    tags: ["Start", "Design", "Projects"],
  },
];

function AboutBody() {
  return (
    <div className="flex flex-col gap-[18px] text-[15px] leading-[1.7] text-ink-soft w-full">
      <p>
        5년 차 프로덕트 디자이너입니다. 핀테크와 커머스 도메인에서 0→1 제품과
        대규모 리뉴얼을 두루 경험했습니다. 디테일에 집착하지만, 디테일보다 맥락을
        먼저 봅니다.
      </p>
      <p>
        디자인은 결국 좋은 결정의 합이라고 믿습니다. 그래서 화면을 그리기 전에
        질문을 정리합니다.
      </p>
      <div className="h-[16px]" />
      <div className="grid grid-cols-2 overflow-hidden rounded-[12px] border border-line bg-line gap-px">
        {[
          { k: "BASED IN", v: "서울" },
          { k: "FOCUS", v: "B2B · 프로덕트" },
          { k: "TOOLS", v: "Figma" },
          { k: "EXPERIENCE", v: "5+ years" },
        ].map(({ k, v }) => (
          <div key={k} className="bg-surface px-[20px] py-[18px]">
            <p className="text-[12px] tracking-[0.24px] text-muted">{k}</p>
            <p className="mt-[6px] text-[15px] font-medium leading-[20px] text-ink">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ label, heading }: { label: string; heading: string }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="font-ibm text-[11.5px] tracking-[1.15px] text-[#555870]">{label}</p>
      <p className="text-[20px] font-bold tracking-[-0.4px] text-ink">{heading}</p>
    </div>
  );
}

function ToggleButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center gap-[2px] rounded-full border border-line bg-white px-[14px] py-[7px] text-[12px] font-semibold tracking-[0.72px] text-ink transition-shadow hover:shadow-[0px_0px_0px_2px_rgba(224,220,220,0.25),0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0"
    >
      {open ? "경력 접어두기" : "경력 보기"}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="shrink-0"
        style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="py-[90px]">
      {!open ? (
        /* 닫힌 상태 */
        <div className="grid gap-[64px] lg:grid-cols-[200px_1fr]">
          <SectionLabel label="About" heading="소개" />
          <div className="flex flex-col gap-[40px] items-center min-w-0 max-w-[656px]">
            <AboutBody />
            <ToggleButton open={false} onClick={() => setOpen(true)} />
          </div>
        </div>
      ) : (
        /* 열린 상태 */
        <div className="flex flex-col">
          {/* About 행 */}
          <div className="grid gap-[64px] lg:grid-cols-[200px_1fr] w-full">
            <SectionLabel label="About" heading="소개" />
            <div className="flex flex-col items-center max-w-[656px] min-w-0">
              <AboutBody />
            </div>
          </div>

          {/* Experience 행 */}
          <div className="grid gap-[64px] lg:grid-cols-[200px_1fr] pt-[64px] pb-[24px]">
            <SectionLabel label="Experience" heading="경력" />
            <div className="flex flex-col gap-[40px] items-center max-w-[656px] min-w-0">
              <div className="flex flex-col w-full">
                {experiences.map((exp) => (
                  <div
                    key={exp.company}
                    className="flex gap-[24px] items-start border-b border-line-soft py-[32px]"
                  >
                    <div className="shrink-0 w-[120px]">
                      <p className="text-[12px] tracking-[0.24px] text-muted">
                        {exp.period}
                      </p>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                      <div className="flex flex-col gap-[4px]">
                        <p className="text-[17px] font-bold tracking-[-0.255px] text-ink">
                          {exp.company}
                        </p>
                        <p className="font-ibm text-[14px] tracking-[0.14px] text-[#5b8eb8]">
                          {exp.role}
                        </p>
                      </div>
                      <div className="h-[10px]" />
                      <p className="text-[15px] leading-[1.68] text-ink-soft">
                        {exp.desc}
                      </p>
                      <div className="h-[12px]" />
                      <div className="flex flex-wrap gap-[7px]">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono rounded-[6px] border border-line px-[9px] py-[3px] text-[11px] tracking-[0.22px] text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ToggleButton open={true} onClick={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
