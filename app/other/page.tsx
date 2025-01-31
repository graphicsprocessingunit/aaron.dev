import { NextPage } from "next";
import { OtherText } from "~/components/ascii-art/other-text";
import { FancyContent } from "~/components/fancy/fancy-content";
import { FancyGap } from "~/components/fancy/fancy-gap";
import { FancyHeader } from "~/components/fancy/fancy-header";
import { FancyInternalLink } from "~/components/fancy/fancy-internal-link";
import { Q } from "~/components/fancy/fancy-quote";
import { PageContainer } from "~/components/page-container";

const Page: NextPage = () => {
  return (
    <PageContainer>
      <OtherText />
      <FancyHeader title="info" />
      <FancyContent>
        This page contains some other things which I don't think are as important as the others on the home page.
      </FancyContent>
      <br />
      <FancyContent>
        This page mainly consists of stuff like configs
      </FancyContent>
      <br />
      <FancyGap />
      <FancyHeader title="dev-environment" />
      <FancyContent>
        You can find which apps I use for development mainly stuff like:{" "}
        <Q>VSCode</Q>
      </FancyContent>
      <FancyContent>
        <br />
        <FancyInternalLink alias="VSCode" href="https://code.visualstudio.com/" />

      </FancyContent>
      <FancyGap />
      <FancyHeader title="other-stuff" />
      <FancyContent>You can find any other stuff on my website through these links:</FancyContent>
      <FancyContent>
        <br />
        Nothing Yet
        <br />
      </FancyContent>
    </PageContainer>
  );
};

export default Page;
