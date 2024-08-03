// components/techstack.tsx
import Image from 'next/image';

const TechStack = () => {
  return (
    <div className="p-5">
      <h1 className="text-slate-200 font-bold text-3xl mb-4">
        Tech Stack
      </h1>
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-1 w-16 mb-4"></div>
      <div className="flex flex-wrap gap-8 justify-center">
        {/* Languages Section */}
        <div className="flex flex-col items-center w-[300px]">
          <h3 className="font-semibold text-xl p-4 text-slate-300 mb-2">Languages</h3>
          <div className="grid grid-cols-4 gap-y-4 gap-x-4">
            <Image src="/C.svg" width={40} height={40} alt="C language" />
            <Image src="/python.svg" width={40} height={40} alt="Python language" />
            <Image src="/go.svg" width={40} height={40} alt="Go language" />
            <Image src="/java.svg" width={40} height={40} alt="Java language" />
            <Image src="/js.svg" width={40} height={40} alt="JavaScript language" />
            <Image src="/ts.svg" width={40} height={40} alt="TypeScript language" />
            <Image src="/css.svg" width={40} height={40} alt="CSS language" />
            <Image src="/html.svg" width={40} height={40} alt="HTML language" />
          </div>
        </div>

        {/* Frameworks Section */}
        <div className="flex flex-col items-center w-[300px]">
          <h3 className="font-semibold text-xl p-4 text-slate-300 mb-2">Frameworks</h3>
          <div className="grid grid-cols-3 gap-x-5 gap-y-4">
            <Image src="/react.svg" width={50} height={50} alt="React" />
            <Image src="/next.svg" width={50} height={50} alt="Next.js" />
            <Image src="/tailwind.svg" width={50} height={50} alt="Tailwind CSS" />
            <Image src="/node.svg" width={50} height={50} alt="Node.js" />
            <Image src="/docker.svg" width={50} height={50} alt="docker" />
          </div>
        </div>

        {/* Database Section */}
        <div className="flex flex-col items-center w-[300px]">
          <h3 className="font-semibold text-xl p-4 text-slate-300 mb-2">Database</h3>
          <div className="grid grid-cols-3 gap-x-6">
            <Image src="/mongo.svg" width={40} height={40} alt="MongoDB" />
            <Image src="/redis.svg" width={40} height={40} alt="Redis" />
            <Image src="/mysql.svg" width={40} height={40} alt="MySQL" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
