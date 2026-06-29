import { mdiVoteOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VoteOutline(props: IconComponentProps) {
  return <Icon path={mdiVoteOutline} {...props} />;
}

export { mdiVoteOutline as path };
