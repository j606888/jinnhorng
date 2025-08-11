import Link from "next/link";

const Breadcrumb = ({ children }) => {
  return (
    <div className="flex gap-2  text-sm tracking-[0.84px] font-normal text-[#30241E]">
      <Link href="/" className="hover:underline hover:text-deep-brown/82 active:font-bold">
        <span>首頁</span>
      </Link>
      <span>{">"}</span>
      <Link href="/products" className="hover:underline hover:text-deep-brown/82 active:font-bold">
        <span>產品系列</span>
      </Link>
      <span>{">"}</span>
      <span className="font-bold">{children}</span>
    </div>
  );
};

export default Breadcrumb;
