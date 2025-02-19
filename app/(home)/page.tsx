import { Metadata, NextPage } from "next";
import styles from "~/app/(home)/page.module.scss";
import { cn } from "~/utils/cn";

import { Technologies } from "~/components/home/technologies";
import { ContactMeButton } from "~/components/home/contact-me-button";
import { ProjectsButton } from "~/components/home/projects-button";
import { OtherButton } from "~/components/home/other-button";
import { Footer } from "~/components/home/footer";
import { websiteName } from "~/constants/website-name";
import { BlogButton } from "~/components/home/blog-button";

export const metadata: Metadata = {
  metadataBase: new URL("https://graphicsprocessingunit.github.io"),
  title: `${websiteName}`,
  description: "This is my website",
  openGraph: {
    title: `🌴 ${websiteName}`,
    description: "This is my website",
    images: "/assets/palm_tree.png"
  },
  authors: [{ name: "Aaron", url: "https://graphicsprocessingunit.github.io" }]
};

const Page: NextPage = () => {
  return (
    <>
      <main className="grid h-screen w-full place-items-center overflow-hidden">
        <div className="grid h-max grid-flow-row place-items-center gap-2 pb-[5%]">
          <div
            className={cn(
              "grid grid-cols-[repeat(3,max-content)] place-items-center gap-2",
              styles["fade-in-down"]
            )}
          >
            <span
              className={cn("select-none text-2xl md:text-4xl", styles["wave-animation"])}
              style={{ animationDelay: "1800ms" }}
            >
              👋
            </span>
            <span> </span>
            <span className="text-2xl dark:text-white md:text-4xl">
              Hi! I'm <span className={styles["special-text"]}>Aaron</span>
            </span>
          </div>
          <div className="grid w-full grid-flow-row place-content-center gap-2 pt-4 sm:grid-flow-col">
            <div
              className={cn("z-10 w-full", styles["bouncing-animation"])}
              style={{ animationDelay: "800ms" }}
            >
              <ContactMeButton />
            </div>
            <div
              className={cn("z-10 w-full", styles["bouncing-animation"])}
              style={{ animationDelay: "1000ms" }}
            >
              <ProjectsButton />
            </div>
            <div
              className={cn("z-10 w-full", styles["bouncing-animation"])}
              style={{ animationDelay: "1200ms" }}
            >
              
            </div>
            <div
              className={cn("z-10 w-full", styles["bouncing-animation"])}
              style={{ animationDelay: "1400ms" }}
            >
              <OtherButton />
            </div>
          </div>

          <div className="grid grid-flow-row place-items-center gap-1 pt-10 md:pt-20">
            <span
              className={cn("text-zinc-500 !delay-300 dark:text-zinc-400", styles["fade-in-left"])}
            >
              technologies i'm learning
            </span>
            <Technologies />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
