import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyExternalLink } from "~/components/fancy/fancy-external-link";
import { DotfilesText } from "~/components/ascii-art/dotfiles-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyMapLinks } from "~/components/fancy/fancy-map-links";
import { MyWebsiteText } from "~/components/ascii-art/My-Website-text";
import { FancyGap } from "~/components/fancy/fancy-gap";

const Page = () => {
  return (
    <div className="mx-auto grid w-[95%] grid-flow-row py-20 lg:w-[60%] xl:w-[40%]">
      <MyWebsiteText />
      <FancyHeader title="info" />
      <FancyContent>This is the current website you are on.</FancyContent>
      <br/>
      <FancyGap />
      <FancyHeader title="Credits" />
      <FancyContent>I got this projects source code from: MaxHu @ https://maxhu.dev    .    I've altered the source code to be better and less cluttered, other than that most work goes to MaxHu</FancyContent>
      <br/>
      <FancyGap />
      <FancyHeader title="Usage Terms" />
      <FancyContent>When using this don't claim as your own.</FancyContent>
    </div>
  );
};

export default Page;
