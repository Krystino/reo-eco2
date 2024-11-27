import Image from "next/image";

export default function PoweredBySection() {
  return (
    <div className="relative h-screen bg-black">
      {/* 上方黑色渐变区域 */}
      <div className="absolute top-0 left-0 w-full h-32 bg-black z-10" />
      <div className="absolute top-32 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent z-10" />
      
      {/* 背景图片 */}
      <Image
        src="/factory.png"
        alt="Reo eco facility"
        fill
        priority // 优先加载图片
        className="object-cover"
      />
      {/* 半透明黑色遮罩 */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* 中心内容 */}
      <div className="absolute inset-16 flex flex-col items-center justify-center text-center gap-4 z-20">
        <p className="text-white text-xl tracking-wide">POWERED BY</p>
        <Image src="/logo_white.png" alt="" width={500} height={300} />
      </div>
      
      {/* 下方黑色渐变区域 */}
      
      <div className="absolute bottom-32 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-black z-10" />
      
      {/* 滚动提示 */}
      <div className="absolute bottom-40 text-xl left-1/2 transform -translate-x-1/2 text-white z-20">
        Scroll to next section
      </div>
    </div>
  );
}


        