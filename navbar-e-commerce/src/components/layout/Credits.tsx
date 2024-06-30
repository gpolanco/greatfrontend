import { FC } from "react";

interface ICreditsProps {}

export const Credits: FC<ICreditsProps> = () => {
  return (
    <div className="credits">
      A challenge by
      <a
        href="https://www.greatfrontend.com/projects?ref=challenges"
        target="_blank"
      >
        GreatFrontEnd Projects
      </a>
      . Built by
      <a
        href="https://www.greatfrontend.com/projects/u/frontendTips"
        target="_blank"
      >
        FrontendTips
      </a>
      .
    </div>
  );
};
