import { Button } from "@/components/ui/button";
import Reveal from "./_components/reveal";

export default function OnScrollReveal() {
  return (
    <div className="flex h-fit w-full items-center justify-center">
      <div className="flex w-[70%] flex-col items-center">
        {/* Spacer */}
        <div className="h-20" />
        <div className="flex w-full flex-col gap-4">
          <Reveal>
            <h1 className="text-8xl font-black">
              Heyy I&apos;m Akshay
              <span className="rounded-full text-6xl">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h3 className="text-4xl font-bold">I&apos; a Full stack developer.</h3>
          </Reveal>
          <Reveal>
            <p className="w-[50%] whitespace-break-spaces">
              I love to code and learn new things. I&apos; much interested in learning
              about web development, software engineering, and computer science.
            </p>
          </Reveal>
          <Reveal>
            <Button className="w-fit">Contact me</Button>
          </Reveal>
        </div>
        {/* Spacer */}

        <div className="h-40" />
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full flex-col gap-10">
            <Reveal>
              <h2 className="text-4xl font-bold underline">About</h2>
            </Reveal>
            <div className="flex w-[70%] flex-col gap-4">
              {[
                {
                  description:
                    "Blog Chef is a blogging application. In which you can create a blog, and share it with others. You can add comments to the blog. The main feature is if you post any abusive words in any blog. Then the abusive words will be removed from that blog. Admin can approve the blog after that word will be blurred.",
                },
                {
                  description:
                    "Blog Chef is a blogging application. In which you can create a blog, and share it with others. You can add comments to the blog. The main feature is if you post any abusive words in any blog. Then the abusive words will be removed from that blog. Admin can approve the blog after that word will be blurred.",
                },
                {
                  description:
                    "Blog Chef is a blogging application. In which you can create a blog, and share it with others. You can add comments to the blog. The main feature is if you post any abusive words in any blog. Then the abusive words will be removed from that blog. Admin can approve the blog after that word will be blurred.",
                },
                {
                  description:
                    "Blog Chef is a blogging application. In which you can create a blog, and share it with others. You can add comments to the blog. The main feature is if you post any abusive words in any blog. Then the abusive words will be removed from that blog. Admin can approve the blog after that word will be blurred.",
                },
              ].map((p, i) => (
                <ProjectCard key={i} description={p.description} />
              ))}
            </div>
          </div>
        </div>
        {/* Spacer */}
        <div className="h-40" />

        <div className="flex w-full items-center justify-center">
          <div className="flex w-full flex-col gap-10">
            <Reveal>
              <h2 className="text-4xl font-bold underline">Projects</h2>
            </Reveal>
            <div className="flex w-[70%] flex-col gap-4">
              {[
                {
                  title: "Blog Chef",
                  description:
                    "Blog Chef is a blogging application. In which you can create a blog, and share it with others. You can add comments to the blog. The main feature is if you post any abusive words in any blog. Then the abusive words will be removed from that blog. Admin can approve the blog after that word will be blurred. There is a search bar. ",
                },
                {
                  title: "Blog Chef",
                  description:
                    "Blog Chef is a blogging application. In which you can create a blog, and share it with others. You can add comments to the blog. The main feature is if you post any abusive words in any blog. Then the abusive words will be removed from that blog. Admin can approve the blog after that word will be blurred.",
                },
              ].map((p, i) => (
                <ProjectCard key={i} title={p.title} description={p.description} />
              ))}
            </div>
          </div>
        </div>
        {/* Spacer */}
        <div className="h-40" />
        <div className="flex flex-col items-center justify-center">
          <Reveal>
            <h1 className="text-7xl font-bold underline">Contact.</h1>
          </Reveal>
          <div className="h-20" />
          <Reveal>
            <span>
              Here is my email address @02b3akshay@gmail.com. Feel free to contact me. I
              will be happy to help you out with any questions that you may have.
            </span>
          </Reveal>
          <div className="h-20" />
          <div className="flex gap-4">
            <Reveal>
              <span className="text-slate-200 underline">Instagram</span>
            </Reveal>
            <Reveal>
              <span className="text-slate-200 underline">X.</span>
            </Reveal>
            <Reveal>
              <span className="text-slate-200 underline">LinkedIn</span>
            </Reveal>
            <Reveal>
              <span className="text-slate-200 underline">Github</span>
            </Reveal>
          </div>
          <div className="h-20" />
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div className="rounded-mdp-4 flex h-fit w-full flex-col gap-2">
      <Reveal>
        <div className="text-2xl">{title}</div>
      </Reveal>
      <Reveal>
        <div>{description}</div>
      </Reveal>
    </div>
  );
};
